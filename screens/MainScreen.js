import React, { Component } from "react";
import {
  StyleSheet,
  KeyboardAvoidingView,
  Text,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { connect } from "react-redux";
import ListItems from "../components/ListItems";
import * as Font from "expo-font";
import SearchBox from "../components/SearchBox";

class MainScreen extends Component {
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
  };

  render() {
    return this.state.fontloaded ? (
      <KeyboardAvoidingView style={styles.container}>
        <Text style={styles.header}>Coronastats</Text>
        <SearchBox />
        {/* {this.props.countriesReceived ? ( */}
        <ScrollView>
          <ListItems />
        </ScrollView>
        {/* ) : ( */}
        {/* <ActivityIndicator size="large" color="#fff" /> */}
        {/* )} */}
      </KeyboardAvoidingView>
    ) : null;
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

const mapStateToProps = (state) => {
  const { countries } = state;
  return { countries };
};

export default connect(mapStateToProps)(MainScreen);
