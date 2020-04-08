import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  AsyncStorage,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

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
      selected: false,
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
            source={require("../assets/images/growth.png")}
          />
        );
      case "decrease":
        return (
          <Image
            style={styles.icon}
            source={require("../assets/images/decrease.png")}
          />
        );
      case "stable":
        return (
          <Image
            style={styles.icon}
            source={require("../assets/images/stable.png")}
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

  getAllData = async () => {
    let keys = await AsyncStorage.getAllKeys();
    console.log("Klucze ", keys);
    let stores = await AsyncStorage.multiGet(keys);
    // console.log("stores", stores);
    let maps = stores.map((result, i, store) => {
      let key = store[i][0];
      let value = JSON.parse(store[i][1]);
      console.log(key, value);
    });
  };

  setData = async (key) => {
    await AsyncStorage.setItem(key, JSON.stringify({}), (err) => {
      if (err) {
        console.log(`The error is: ${err}`);
      }
    }).catch((err) => console.log(`The error is: ${err}`));
  };

  removeData = async (key) => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (err) {
      console.log(`The error is: ${err}`);
    }
  };

  removeAllData = async () => {
    await AsyncStorage.getAllKeys()
      .then((keys) => AsyncStorage.multiRemove(keys))
      .then(() => console.log("usunięto"));
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
        this.getAllData();
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
            <Icon name="ios-eye" size={30} color="green" />
          ) : (
            <Icon name="ios-eye" size={30} color="red" />
          )}
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    backgroundColor: "#686868",
    padding: 5,
    borderRadius: 10,
    borderBottomWidth: 5,
  },
  name: {
    color: "white",
    fontSize: 10,
    fontWeight: "bold",
  },
  type: {
    fontWeight: "bold",
  },
  flag: {
    width: 30,
    height: 30,
    marginLeft: 2,
    marginRight: 2,
  },
  icon: {
    width: 30,
    height: 30,
  },
  box: {
    backgroundColor: "white",
    alignItems: "center",
    padding: 5,
    borderWidth: 2,
    borderRadius: 5,
    marginLeft: 2,
    marginRight: 2,
  },
  inbox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  growth: {
    color: "green",
  },
  decrease: {
    color: "red",
  },
  stable: {
    color: "grey",
  },
});

export default CountryTile;
