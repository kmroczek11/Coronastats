import React, { Component } from "react";
import * as Font from "expo-font";
import { StatusBar } from "react-native";
import { Provider } from "react-redux";
import store from "./store";
import DrawerNavigator from "./navigation/DrawerNavigator/DrawerNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { AppLoading } from "expo";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false,
    };
  }

  componentDidMount = async () => {
    await Font.loadAsync({
      voga: require("./assets/fonts/voga.otf"),
    });
    this.setState({
      fontLoaded: true,
    });
  };

  render() {
    return this.state.fontLoaded ? (
      <Provider store={store}>
        <NavigationContainer>
          <StatusBar backgroundColor="#000" barStyle="light-content" />
          <DrawerNavigator />
        </NavigationContainer>
      </Provider>
    ) : (
      <AppLoading />
    );
  }
}

export default App;
