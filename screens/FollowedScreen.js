import React, { Component } from "react";
import {
  StyleSheet,
  KeyboardAvoidingView,
  Text,
  ScrollView,
  ActivityIndicator,
  View,
  AsyncStorage,
} from "react-native";
import { connect } from "react-redux";
import { dispatch } from "rxjs/internal/observable/pairs";
import * as Font from "expo-font";
import Icon from "react-native-vector-icons/Ionicons";
import ListItems from "../components/ListItems";
import { getCountries } from "../redux/followed/duck/operations";

class FollowedScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false,
    };
  }

  componentDidMount = async () => {
    await Font.loadAsync({
      coronaFont: require("../assets/fonts/bloody.otf"),
    });
    this.setState({ fontloaded: true });
    this.loadFollowed();
  };

  loadFollowed = async () => {
    let keys = await AsyncStorage.getAllKeys();
    console.log("Klucze ", keys);
    this.props.getCountries(keys);
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        {this.state.fontloaded ? (
          <Text style={styles.header}>Followed</Text>
        ) : (
          <Text>Font not loaded</Text>
        )}
        <ScrollView>
          <ListItems countries={this.props.all} />
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontFamily: "coronaFont",
    fontSize: 50,
    color: "#fff",
    margin: 20,
  },
});

FollowedScreen.navigationOptions = {
  tabBarIcon: ({ tintColor, focused }) => (
    <Icon name={"ios-trending-up"} color={tintColor} size={25} />
  ),
};

const matchDispatchToProps = (dispatch) => ({
  getCountries: (f) => dispatch(getCountries(f)),
});

const mapStateToProps = (state) => {
  const { all } = state.followed;
  return { all };
};

export default connect(mapStateToProps, matchDispatchToProps)(FollowedScreen);
