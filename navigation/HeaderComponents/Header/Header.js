import React, { Component } from "react";
import { View, StyleSheet, Text, Image } from "react-native";

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        {this.props.leftButton}
        <Image style={styles.icon} source={this.props.flag} />
        <Text style={styles.title}>{this.props.title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 70,
    backgroundColor: "#000",
    flexDirection: "row",
    alignItems: "baseline",
  },
  icon: {
    width: 30,
    height: 30,
    margin:5
  },
  title: {
    color: "#fff",
    fontSize: 40,
    fontFamily: "voga",
    margin:5
  },
});

export default Header;
