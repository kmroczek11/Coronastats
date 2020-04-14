import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { createDrawerNavigator } from "react-navigation-drawer";
import StackNavigator from "../StackNavigator/StackNavigator";

export default config = createDrawerNavigator(
  { StackNavigator: StackNavigator },
  {
    initialRouteName: "StackNavigator",
    drawerBackgroundColor: "#000",
    drawerType: "slide",

    contentComponent: () => (
      <View style={styles.container}>
        <Text style={styles.text}>{`
        Welcome to the Coronastats!
        You can check the total toll
        of the Coronavirus 
        around the world.
        Just type the 
        name of the country
        you'd like to search 
        for in a search box.
        You can also follow a country
        by checking green the eye
        icon alongside a 
        specific country.
        Long press a country
        to show a graph.
        `}</Text>
      </View>
    ),
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: -40,
  },
  text: {
    fontFamily: "voga",
    color: "#fff",
    fontSize: 28,
    lineHeight: 40,
  },
});
