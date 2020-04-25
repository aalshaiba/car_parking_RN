import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

const Divider = ({ color = "grey", marginHorizontal = 20, height = 1 }) => (
  <View
    style={{
      height: height,
      backgroundColor: color,
      opacity: 0.3,
      width: width - 40,
      marginHorizontal: marginHorizontal,
    }}
  />
);
export default Divider;
