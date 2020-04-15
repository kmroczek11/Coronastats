import React, { Component } from "react";
import {
  StyleSheet,
  KeyboardAvoidingView,
  Text,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { connect } from "react-redux";
import ListItems from "../components/ListItems/ListItems";
import SearchBox from "../components/SearchBox/SearchBox";

class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <Text style={styles.header}>Stats</Text>
        <SearchBox />

        {this.props.countriesSearched ? (
          <ScrollView>
            <ListItems
              data={this.props.searchedCountries}
              navigation={this.props.navigation}
            />
          </ScrollView>
        ) : (
          <ActivityIndicator size="large" color="#000" />
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

const mapStateToProps = (state) => {
  const { searchedCountries, countriesSearched } = state.searched;
  return { searchedCountries, countriesSearched };
};

export default connect(mapStateToProps)(HomeScreen);
