import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native-gesture-handler";
import TabNavigator from "../TabNavigator/TabNavigator";
import Icon from "react-native-vector-icons/Ionicons";

class StackNavigator extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const Stack = createStackNavigator();
    return (
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#000",
          },
          headerTitleStyle: {
            color: "#fff",
            fontFamily: "voga",
            fontSize: 40,
          },
        }}
      >
        <Stack.Screen
          name="Coronastats"
          component={TabNavigator}
          options={{
            headerRight: () => (
              <TouchableOpacity
                style={styles.container}
                onPress={() => this.props.navigation.openDrawer()}
              >
                <Icon name="md-help" size={30} color="#fff" />
              </TouchableOpacity>
            ),
          }}
        />
      </Stack.Navigator>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
});

export default StackNavigator;
