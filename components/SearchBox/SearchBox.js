import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { connect } from "react-redux";
import { dispatch } from "rxjs/internal/observable/pairs";
import Icon from "react-native-vector-icons/Ionicons";
import { searchCountry } from "../../redux/searched/duck/operations";
import { debounce } from "lodash";

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phrase: "",
      searching: false,
    };
  }

  onSearch = (t) => {
    if (t != "") {
      this.setState({
        phrase: t,
        searching: true,
      });
      this.debouncedSearch(t);
    }
  };

  debouncedSearch = debounce((t) => {
    this.props.searchCountry(t, this.props.followedNames);
    this.setState({
      searching: false,
    });
  }, 500);

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Icon name="md-search" size={50} />
          <TextInput
            style={styles.input}
            placeholder="Search for a country..."
            onChangeText={(text) => this.onSearch(text)}
          />
        </View>
        {this.state.searching ? (
          <Text style={styles.searching}>
            Searching for {this.state.phrase}...
          </Text>
        ) : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  content: {
    backgroundColor: "#fff",
    flexDirection: "row",
    padding: 10,
    borderRadius: 30,
  },
  input: {
    width: 250,
    fontSize: 20,
    padding: 10,
  },
  searching: {
    color: "#000",
    fontFamily: "voga",
    fontSize: 20,
    marginTop: 5,
  },
});

const matchDispatchToProps = (dispatch) => ({
  searchCountry: (t, names) => dispatch(searchCountry(t, names)),
});

const mapStateToProps = (state) => {
  const { followedNames } = state.followed;
  return { followedNames };
};

export default connect(mapStateToProps, matchDispatchToProps)(SearchBox);
