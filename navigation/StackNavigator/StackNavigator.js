import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native-gesture-handler";
import TabNavigator from "../TabNavigator/TabNavigator";
import Icon from "react-native-vector-icons/Ionicons";
import ChartScreen from "../../screens/ChartScreen";
import Header from "../HeaderComponents/Header/Header";
import BackButton from "../HeaderComponents/BackButton/BackButton";

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
            height: 70,
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
        <Stack.Screen
          name="ChartScreen"
          component={ChartScreen}
          options={{
            header: ({ scene, previous, navigation }) => {
              const { options } = scene.descriptor;
              const flag = scene.route.params.flag;
              const title = scene.route.params.name;
              
              return (
                <Header
                  flag={flag}
                  title={title}
                  leftButton={
                    previous ? (
                      <BackButton onPress={navigation.goBack} />
                    ) : undefined
                  }
                />
              );
            },
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
