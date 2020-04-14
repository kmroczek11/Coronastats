import React, { Component } from "react";
import { StyleSheet } from "react-native";
import CountryTile from "../CountryTile/CountryTile";

class ListItems extends Component {
  constructor(props) {
    super(props);
  }

  createListItems = () => {
    const countries = this.props.data;
    const tiles = [];

    countries.map((country, i) => {
      tiles.push(
        <CountryTile
          key={i}
          data={country}
          navigation={this.props.navigation}
        />
      );
    });

    return tiles;
  };

  render() {
    return this.createListItems();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countryName: {
    fontSize: 30,
    fontWeight: "bold",
    alignSelf: "center",
  },
});

export default ListItems;
