import React, { Component } from "react";
import {
  StyleSheet,
  KeyboardAvoidingView,
  Text,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
import * as ScreenOrientation from "expo-screen-orientation";

class ChartScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: null,
      dataSet: false,
      chartConfig: null,
      data: null,
    };
  }

  componentDidMount = async () => {
    Dimensions.addEventListener("change", (e) => {
      const { width } = e.window;
      this.setState({
        width: width,
      });
    });

    await this.toLandscape();
    await this.setData();
  };

  componentWillUnmount = async () => {
    await this.toPortrait();
  };

  toLandscape = async () => {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.LANDSCAPE_LEFT
    );
  };

  toPortrait = async () => {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.PORTRAIT
    );
  };

  setData = async () => {
    const chartConfig = {
      backgroundGradientFrom: "#1E2923",
      backgroundGradientFromOpacity: 0,
      backgroundGradientTo: "#08130D",
      backgroundGradientToOpacity: 0.5,
      color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      barPercentage: 0.1,
    };

    var days = this.props.route.params.data;
    days = days.slice(0, days.length - 1);
    days = days.slice(Math.max(days.length - 30, 0));
    var labels = [];
    var confirmed = [];
    var deaths = [];
    var recovered = [];

    days.forEach((day) => {
      const formatted = day.date.substring(
        day.date.indexOf("-") + 1,
        day.date.length
      );
      labels.push(formatted);
      confirmed.push(day.confirmed);
      deaths.push(day.deaths);
      recovered.push(day.recovered);
    });

    const data = {
      labels: labels,
      datasets: [
        {
          data: confirmed,
          color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`, // optional
          strokeWidth: 2, // optional
        },
        {
          data: deaths,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // optional
          strokeWidth: 2, // optional
        },
        {
          data: recovered,
          color: (opacity = 1) => `rgba(0, 255, 0, ${opacity})`, // optional
          strokeWidth: 2, // optional
        },
      ],
      legend: ["Confirmed", "Deaths", "Recovered"], // optional
    };

    this.setState({
      dataSet: true,
      chartConfig: chartConfig,
      data: data,
    });
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        {this.state.dataSet ? (
          <LineChart
            data={this.state.data}
            width={this.state.width}
            height={220}
            chartConfig={this.state.chartConfig}
            verticalLabelRotation={45}
          />
        ) : (
          <ActivityIndicator size="large" color="#000" />
        )}
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E6E6E6",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontFamily: "voga",
    fontSize: 80,
    color: "#000",
    margin: 20,
  },
});

export default ChartScreen;
