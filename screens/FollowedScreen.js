import React, { Component } from "react";
import {
  StyleSheet,
  KeyboardAvoidingView,
  Text,
  ScrollView,
  ActivityIndicator,
  AsyncStorage,
} from "react-native";
import { connect } from "react-redux";
import { dispatch } from "rxjs/internal/observable/pairs";
import * as Font from "expo-font";
import Icon from "react-native-vector-icons/Ionicons";
import ListItems from "../components/ListItems/ListItems";
import { loadFollowed, getFollowed } from "../redux/followed/duck/operations";

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
    var followed = await AsyncStorage.getAllKeys();
    this.props.loadFollowed(followed);
    this.props.getFollowed(followed);
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        {this.state.fontloaded ? (
          <Text style={styles.header}>Followed</Text>
        ) : (
          <Text>Font not loaded</Text>
        )}

        {this.props.followedSearched ? (
          <ScrollView>
            <ListItems data={this.props.followedCountries} />
          </ScrollView>
        ) : (
          <ActivityIndicator size="large" color="#fff" />
        )}
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
  loadFollowed: (names) => dispatch(loadFollowed(names)),
  getFollowed: (names) => dispatch(getFollowed(names)),
});

const mapStateToProps = (state) => {
  const { followedCountries, followedSearched } = state.followed;
  return { followedCountries, followedSearched };
};

export default connect(mapStateToProps, matchDispatchToProps)(FollowedScreen);
