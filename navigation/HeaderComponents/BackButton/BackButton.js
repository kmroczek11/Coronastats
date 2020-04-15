import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { TouchableOpacity } from "react-native-gesture-handler";

class BackButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <Icon name="ios-arrow-back" size={30} color="#fff" style={{margin:10}}/>
      </TouchableOpacity>
    );
  }
}

export default BackButton;
