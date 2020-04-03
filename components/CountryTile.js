import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";

class CountryTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cProgress: "",
      dProgress: "",
      rProgress: ""
    };
  }

  componentDidMount = () => {
    this.checkProgresses();
  };

  checkProgresses = () => {
    var cProgress = (dProgress = rProgress = "");

    if (this.props.confirmed > this.props.cYesterday) cProgress = "growth";
    else if (this.props.confirmed < this.props.cYesterday)
      cProgress = "decrease";
    else cProgress = "stable";

    if (this.props.deaths > this.props.dYesterday) dProgress = "growth";
    else dProgress = "stable";

    if (this.props.recovered > this.props.rYesterday) rProgress = "growth";
    else rProgress = "stable";

    this.setState({
      cProgress: cProgress,
      dProgress: dProgress,
      rProgress: rProgress
    });
  };

  progress = p => {
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

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.date}>{this.props.date}</Text>
        <Image
          style={styles.flag}
          source={this.props.flag}
        />
        <View style={styles.box}>
          <Text style={styles.type}>Confirmed</Text>
          <View style={styles.inbox}>
            <Text>{this.props.confirmed}</Text>
            {this.progress(this.state.cProgress)}
          </View>
        </View>
        <View style={styles.box}>
          <Text style={styles.type}>Deaths</Text>
          <View style={styles.inbox}>
            <Text>{this.props.deaths}</Text>
            {this.progress(this.state.dProgress)}
          </View>
        </View>
        <View style={styles.box}>
          <Text style={styles.type}>Recovered</Text>
          <View style={styles.inbox}>
            <Text>{this.props.recovered}</Text>
            {this.progress(this.state.rProgress)}
          </View>
        </View>
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
    backgroundColor: "#2AD143",
    padding: 5,
    borderRadius: 10,
    borderBottomWidth: 5
  },
  date: {
    fontWeight: "bold"
  },
  type: {
    fontWeight: "bold"
  },
  flag: {
    width: 30,
    height: 30,
    marginLeft: 5,
    marginRight: 5
  },
  icon: {
    width: 30,
    height: 30
  },
  box: {
    backgroundColor: "white",
    alignItems: "center",
    padding: 5,
    borderWidth: 2,
    borderRadius: 5,
    marginLeft: 5,
    marginRight: 5
  },
  inbox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default CountryTile;
