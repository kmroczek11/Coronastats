import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ToastAndroid,
} from "react-native";
import { styles } from "./styles";
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
      name: "",
      flag: null,
      selected: null,
      confirmed: null,
      deaths: null,
      recovered: null,
      cDifference: null,
      dDifference: null,
      rDifference: null,
      cProgress: "",
      dProgress: "",
      rProgress: "",
    };
  }

  setStats = () => {
    const today = this.props.data[this.props.data.length - 2];
    const additional = this.props.data[this.props.data.length - 1];
    const yesterday = this.props.data[this.props.data.length - 3];

    this.setState(
      {
        name: additional.name,
        flag: additional.symbol,
        selected: additional.selected,
        confirmed: today.confirmed,
        deaths: today.deaths,
        recovered: today.recovered,
        cDifference: today.confirmed - yesterday.confirmed,
        dDifference: today.deaths - yesterday.deaths,
        rDifference: today.recovered - yesterday.recovered,
      },
      () => {
        this.checkProgresses();
      }
    );
  };

  componentDidMount = () => {
    this.setStats();
  };

  checkProgresses = () => {
    var cProgress = (dProgress = rProgress = "");

    if (this.state.cDifference > 0) cProgress = "growth";
    else if (this.state.cDifference < 0) cProgress = "decrease";
    else cProgress = "stable";

    if (this.state.dDifference > 0) dProgress = "growth";
    else dProgress = "stable";

    if (this.state.rDifference > 0) rProgress = "growth";
    else if (this.state.rDifference < 0) rProgress = "decrease";
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
          this.setData(this.state.name);
        } else {
          this.removeData(this.state.name);
        }
      }
    );
  };

  navigateToChart = () => {
    this.props.navigation.navigate("ChartScreen", {
      name: this.state.name,
      data: this.props.data,
    });
  };

  render() {
    return (
      <TouchableWithoutFeedback onLongPress={() => this.navigateToChart()}>
        <View style={styles.container}>
          <Text style={styles.name}>{this.state.name}</Text>
          <Image style={styles.flag} source={this.state.flag} />
          <View style={styles.box}>
            <Text style={styles.type}>Confirmed</Text>
            <View style={styles.inbox}>
              <Text style={styles.amount}>{this.state.confirmed}</Text>
              {this.progress(this.state.cProgress)}
            </View>
            {this.difference(this.state.cDifference)}
          </View>
          <View style={styles.box}>
            <Text style={styles.type}>Deaths</Text>
            <View style={styles.inbox}>
              <Text style={styles.amount}>{this.state.deaths}</Text>
              {this.progress(this.state.dProgress)}
            </View>
            {this.difference(this.state.dDifference)}
          </View>
          <View style={styles.box}>
            <Text style={styles.type}>Recovered</Text>
            <View style={styles.inbox}>
              <Text style={styles.amount}>{this.state.recovered}</Text>
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
      </TouchableWithoutFeedback>
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
