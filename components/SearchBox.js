import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { connect } from "react-redux";
import { Ionicons } from "@expo/vector-icons";

class SearchBox extends Component {
  constructor(props) {
    super(props);
  }

  onSearch = (t) => {
    console.log(this.props.countries);
  };

  render() {
    return (
      <View style={styles.container}>
        <Ionicons name="md-search" size={50} />
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

const mapStateToProps = (state) => {
  const { countries } = state;
  return { countries };
};

export default connect(mapStateToProps)(SearchBox);
