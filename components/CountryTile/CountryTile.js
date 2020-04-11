import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import { styles } from "./styles"
import Icon from "react-native-vector-icons/Ionicons";
import { connect } from "react-redux";
import Storage from "../../libs/Storage";
import {
  addName,
  removeName,
  getFollowed,
} from "../../redux/followed/duck/operations";

class CountryTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cProgress: "",
      dProgress: "",
      rProgress: "",
      cDifference: this.props.confirmed - this.props.cYesterday,
      dDifference: this.props.deaths - this.props.dYesterday,
      rDifference: this.props.recovered - this.props.rYesterday,
      selected: this.props.selected,
    };
  }

  componentDidMount = () => {
    this.checkProgresses();
  };

  checkProgresses = () => {
    var cProgress = (dProgress = rProgress = "");

    if (this.state.cDifference > 0) cProgress = "growth";
    else if (this.state.cDifference < 0) cProgress = "decrease";
    else cProgress = "stable";

    if (this.state.dDifference > 0) dProgress = "growth";
    else dProgress = "stable";

    if (this.state.rDifference > 0) rProgress = "growth";
    else rProgress = "stable";

    this.setState({
      cProgress: cProgress,
      dProgress: dProgress,
      rProgress: rProgress,
    });
  };

  progress = (p) => {
    switch (p) {
      case "growth":
        return (
          <Image
            style={styles.icon}
            source={require("../../assets/images/growth.png")}
          />
        );
      case "decrease":
        return (
          <Image
            style={styles.icon}
            source={require("../../assets/images/decrease.png")}
          />
        );
      case "stable":
        return (
          <Image
            style={styles.icon}
            source={require("../../assets/images/stable.png")}
          />
        );
      default:
        break;
    }
  };

  difference = (d) => {
    if (d > 0) return <Text style={styles.growth}>+{d}</Text>;
    else if (d < 0) return <Text style={styles.decrease}>{d}</Text>;
    else return <Text style={styles.stable}>{d}</Text>;
  };

  setData = async (name) => {
    await Storage.addItem(name);
    this.props.addName(name);
    this.props.getFollowed(this.props.followedNames);
    ToastAndroid.showWithGravity(
      "Observed " + name,
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );
  };

  removeData = async (name) => {
    await Storage.removeItem(name);
    const index = this.props.followedNames.indexOf(name);
    this.props.removeName(index);
    this.props.getFollowed(this.props.followedNames);
    ToastAndroid.showWithGravity(
      "Unobserved " + name,
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );
  };

  changeSelection = () => {
    this.setState(
      {
        selected: !this.state.selected,
      },
      () => {
        if (this.state.selected) {
          this.setData(this.props.name);
        } else {
          this.removeData(this.props.name);
        }
      }
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.name}>{this.props.name}</Text>
        <Image style={styles.flag} source={this.props.flag} />
        <View style={styles.box}>
          <Text style={styles.type}>Confirmed</Text>
          <View style={styles.inbox}>
            <Text>{this.props.confirmed}</Text>
            {this.progress(this.state.cProgress)}
          </View>
          {this.difference(this.state.cDifference)}
        </View>
        <View style={styles.box}>
          <Text style={styles.type}>Deaths</Text>
          <View style={styles.inbox}>
            <Text>{this.props.deaths}</Text>
            {this.progress(this.state.dProgress)}
          </View>
          {this.difference(this.state.dDifference)}
        </View>
        <View style={styles.box}>
          <Text style={styles.type}>Recovered</Text>
          <View style={styles.inbox}>
            <Text>{this.props.recovered}</Text>
            {this.progress(this.state.rProgress)}
          </View>
          {this.difference(this.state.rDifference)}
        </View>
        <TouchableOpacity onPress={this.changeSelection}>
          {this.state.selected ? (
            <Icon name="ios-eye" size={30} color="#32CD32" />
          ) : (
            <Icon name="ios-eye" size={30} color="#FF1A1A" />
          )}
        </TouchableOpacity>
      </View>
    );
  }
}

const matchDispatchToProps = (dispatch) => ({
  addName: (followed) => dispatch(addName(followed)),
  removeName: (followed) => dispatch(removeName(followed)),
  getFollowed: (names) => dispatch(getFollowed(names)),
});

const mapStateToProps = (state) => {
  const { followedNames } = state.followed;
  return { followedNames };
};

export default connect(mapStateToProps, matchDispatchToProps)(CountryTile);
