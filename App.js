import React, { Component } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { Provider } from "react-redux";
import store from "./store";
import { createAppContainer } from "react-navigation";
import Icon from "react-native-vector-icons/Ionicons";

import AppNavigator from "./router";
const AppIndex = createAppContainer(AppNavigator);

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <StatusBar backgroundColor="#B30000" barStyle="light-content" />
          <View style={styles.header}>
            <Icon name="ios-menu" size={28} color="white" />
          </View>
          <AppIndex />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  header: {
    flexDirection: "row",
    justifyContent:"flex-end",
    backgroundColor: "#B30000",
    paddingHorizontal: 18,
    paddingTop: 5,
  },
});

export default App;
