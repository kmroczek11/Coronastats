import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { connect } from "react-redux";
import { dispatch } from "rxjs/internal/observable/pairs";
import Icon from "react-native-vector-icons/Ionicons";
import { searchCountry } from "../redux/countries/duck/operations";

class SearchBox extends Component {
  constructor(props) {
    super(props);
  }

  onSearch = (t) => {
    if (t != "") this.props.searchCountry(t);
  };

  render() {
    return (
      <View style={styles.container}>
        <Icon name="md-search" size={50} />
        <TextInput
          style={styles.input}
          placeholder="Search..."
          onChangeText={(text) => this.onSearch(text)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 8,
    backgroundColor: "#fff",
    flexDirection: "row",
    padding: 10,
    borderRadius: 30,
  },
  input: {
    width: 250,
    fontSize: 25,
    padding: 10,
  },
});

const matchDispatchToProps = (dispatch) => ({
  searchCountry: (t) => dispatch(searchCountry(t)),
});

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, matchDispatchToProps)(SearchBox);
