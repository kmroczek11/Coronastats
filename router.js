import React from "react";
import { createAppContainer } from "react-navigation";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import HomeScreen from "./screens/HomeScreen";
import FollowedScreen from "./screens/FollowedScreen";

const AppNavigator = createMaterialTopTabNavigator(
  {
    Home: HomeScreen,
    Followed: FollowedScreen,
  },
  {
    tabBarOptions: {
      activeTintColor: "white",
      showIcon: true,
      showLabel: true,
      style: {
        backgroundColor: "#B30000",
      },
      indicatorStyle: {
        backgroundColor: "white",
      },
    },
  }
);
export default createAppContainer(AppNavigator);
