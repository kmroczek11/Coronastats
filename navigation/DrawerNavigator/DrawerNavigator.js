import React, { Component } from "react";
import { createAppContainer } from "react-navigation";
import config from "./router";

class DrawerNavigator extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const Container = createAppContainer(config);
    return <Container />;
  }
}

export default DrawerNavigator;
