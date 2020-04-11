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
import * as Font from "expo-font";
import SearchBox from "../components/SearchBox/SearchBox";
import Icon from "react-native-vector-icons/Ionicons";

class HomeScreen extends Component {
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
    return (
      <KeyboardAvoidingView style={styles.container}>
        {this.state.fontloaded ? (
          <Text style={styles.header}>Stats</Text>
        ) : (
          <Text>Font not loaded</Text>
        )}

        <SearchBox />

        {this.props.countriesSearched ? (
          <ScrollView>
            <ListItems data={this.props.searchedCountries}/>
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

HomeScreen.navigationOptions = {
  tabBarIcon: ({ tintColor, focused }) => (
    <Icon name={"ios-stats"} color={tintColor} size={25} />
  ),
};

const mapStateToProps = (state) => {
  const { searchedCountries, countriesSearched } = state.searched;
  return { searchedCountries, countriesSearched };
};

export default connect(mapStateToProps)(HomeScreen);
