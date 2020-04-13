import React, { Component } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import HomeScreen from "../../screens/HomeScreen";
import FollowedScreen from "../../screens/FollowedScreen";
import Icon from "react-native-vector-icons/Ionicons";
import { tabBarOptions } from "./router";

class TabNavigator extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const Tab = createMaterialTopTabNavigator();
    return (
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = "ios-stats";
            } else if (route.name === "Followed") {
              iconName = "ios-trending-up";
            }

            // You can return any component that you like here!
            return <Icon name={iconName} size={20} color={color} />;
          },
        })}
        tabBarOptions={tabBarOptions}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{ tabBarLabel: "Home" }}
        />
        <Tab.Screen
          name="Followed"
          component={FollowedScreen}
          options={{ tabBarLabel: "Followed" }}
        />
      </Tab.Navigator>
    );
  }
}

export default TabNavigator;
