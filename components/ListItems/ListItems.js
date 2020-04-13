import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import CountryTile from "../CountryTile/CountryTile";
import { connect } from "react-redux";

class ListItems extends Component {
  constructor(props) {
    super(props);
  }

  createListItems = () => {
    const countries = this.props.data;
    const tiles = [];

    countries.map((country, i) => {
      const today = country[country.length - 2];
      const additional = country[country.length - 1];
      const yesterday = country[country.length - 3];

      tiles.push(
        <CountryTile
          key={i}
          flag={additional.symbol}
          name={additional.name}
          selected={additional.selected}
          confirmed={today.confirmed}
          deaths={today.deaths}
          recovered={today.recovered}
          cYesterday={yesterday.confirmed}
          dYesterday={yesterday.deaths}
          rYesterday={yesterday.recovered}
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