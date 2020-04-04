import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import CountryTile from "./CountryTile";
import { connect } from "react-redux";

class ListItems extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const countries = this.props.countries;
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
          confirmed={today.confirmed}
          deaths={today.deaths}
          recovered={today.recovered}
          cYesterday={yesterday.confirmed}
          dYesterday={yesterday.deaths}
          rYesterday={yesterday.recovered}
        />
      );
    });

    return <View style={styles.container}>{tiles}</View>;
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

const mapStateToProps = (state) => {
  const { countries } = state;
  return { countries };
};

export default connect(mapStateToProps)(ListItems);
