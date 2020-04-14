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
import ListItems from "../components/ListItems/ListItems";
import { loadFollowed, getFollowed } from "../redux/followed/duck/operations";

class FollowedScreen extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = async () => {
    var followed = await AsyncStorage.getAllKeys();
    this.props.loadFollowed(followed);
    this.props.getFollowed(followed);
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <Text style={styles.header}>Followed</Text>

        {this.props.followedSearched ? (
          <ScrollView>
            <ListItems
              data={this.props.followedCountries}
              navigation={this.props.navigation}
            />
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
    backgroundColor: "#E6E6E6",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontFamily: "voga",
    fontSize: 80,
    color: "#000",
    margin: 20,
  },
});

const matchDispatchToProps = (dispatch) => ({
  loadFollowed: (names) => dispatch(loadFollowed(names)),
  getFollowed: (names) => dispatch(getFollowed(names)),
});

const mapStateToProps = (state) => {
  const { followedCountries, followedSearched } = state.followed;
  return { followedCountries, followedSearched };
};

export default connect(mapStateToProps, matchDispatchToProps)(FollowedScreen);
