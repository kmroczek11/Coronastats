import React, { Component } from "react";
import * as Font from "expo-font";
import { StatusBar } from "react-native";
import { Provider } from "react-redux";
import store from "./store";
import DrawerNavigator from "./navigation/DrawerNavigator/DrawerNavigator";
import { NavigationContainer } from "@react-navigation/native";

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = async () => {
    await Font.loadAsync({
      voga: require("./assets/fonts/Voga.otf"),
    });
  };

  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <StatusBar backgroundColor="#000" barStyle="light-content" />
          <DrawerNavigator />
        </NavigationContainer>
      </Provider>
    );
  }
}

export default App;
