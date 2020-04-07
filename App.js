import React, { Component } from "react";
import HomeScreen from "./screens/HomeScreen.js";
import FollowedScreen from "./screens/FollowedScreen.js";
import { Provider } from "react-redux";
import store from "./store";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tabs = createMaterialTopTabNavigator();

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Tabs.Navigator>
            <Tabs.Screen name="Home" component={HomeScreen} />
            <Tabs.Screen name="Followed" component={FollowedScreen} />
          </Tabs.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}

export default App;
