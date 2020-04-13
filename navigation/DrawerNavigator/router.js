import React, { Component } from "react";
import { View, Text } from "react-native";
import { createDrawerNavigator } from "react-navigation-drawer";
import StackNavigator from "../StackNavigator/StackNavigator";

export default config = createDrawerNavigator(
  { StackNavigator: StackNavigator },
  {
    initialRouteName: "StackNavigator",
    drawerBackgroundColor: "#fff",
    drawerType: "slide",

    contentComponent: () => (
      <View>
        <Text>Eluwina</Text>
      </View>
    ),
  }
);
