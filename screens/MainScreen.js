import React, { Component } from "react";
import {
  StyleSheet,
  KeyboardAvoidingView,
  Text,
  ScrollView
} from "react-native";
import { getAllCountries } from "../redux/countries/duck/operations";
import { connect } from "react-redux";
import { dispatch } from "rxjs/internal/observable/pairs";
import ListItems from "../components/ListItems";
import * as Font from "expo-font";

class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false
    };
  }

  componentDidMount = async () => {
    await Font.loadAsync({
      coronaFont: require("../assets/fonts/bloody.otf")
    });
    this.setState({ fontloaded: true });
    //   getAllCountries();
  };

  render() {
    return this.state.fontloaded ? (
      <KeyboardAvoidingView style={styles.container}>
        <Text style={styles.header}>Coronastats</Text>
        <ScrollView>
          <ListItems />
        </ScrollView>
      </KeyboardAvoidingView>
    ) : null;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center"
  },
  header: {
    fontFamily: "coronaFont",
    fontSize: 50,
    color: "#871A26",
    margin: 20
  }
});

const mapStateToProps = state => {
  const { countries } = state;
  return { countries };
};

// const matchDispatchToProps = dispatch => ({
//   getAllCountries: () => dispatch(getAllCountries())
// });

// export default connect(mapStateToProps, matchDispatchToProps)(MainScreen);
export default connect(mapStateToProps)(MainScreen);
