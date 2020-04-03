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

    for (var country in countries) {
      if (countries.hasOwnProperty(country)) {
        const days = countries[country];
        const today = days[days.length - 2];
        const flag = days[days.length - 1];
        const yesterday = days[days.length - 3];
        console.log(flag.symbol)

        tiles.push(
          <CountryTile
            key={Math.floor(Math.random() * 10000)}
            flag={flag.symbol}
            date={today.date}
            confirmed={today.confirmed}
            deaths={today.deaths}
            recovered={today.recovered}
            cYesterday={yesterday.confirmed}
            dYesterday={yesterday.deaths}
            rYesterday={yesterday.recovered}
          />
        );
      }
    }

    return <View style={styles.container}>{tiles}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  countryName: {
    fontSize: 30,
    fontWeight: "bold",
    alignSelf: "center"
  }
});

const mapStateToProps = state => {
  const { countries } = state;
  return { countries };
};

export default connect(mapStateToProps)(ListItems);
