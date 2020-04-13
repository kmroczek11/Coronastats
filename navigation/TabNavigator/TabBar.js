import React, { Component } from "react";
import { View, TouchableOpacity } from "react-native";
import Animated from "react-native-reanimated";

class TabBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ flexDirection: "row" }}>
        {this.props.state.routes.map((route, index) => {
          const { options } = this.props.descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = this.props.state.index === index;

          const onPress = () => {
            const event = this.props.navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              this.props.navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            this.props.navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };

          const inputRange = this.props.state.routes.map((_, i) => i);
          const opacity = Animated.interpolate(this.props.position, {
            inputRange,
            outputRange: inputRange.map((i) => (i === index ? 1 : 0)),
          });

          return (
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              accessibilityStates={isFocused ? ["selected"] : []}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{ flex: 1 }}
            >
              <Animated.Text style={{ opacity }}>{label}</Animated.Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
}

export default TabBar;
