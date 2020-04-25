import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { mawaqifBlue } from "../utils/Utilities";

const CircleStdPrm = ({
  color = "white",
  size = 45,
  borderWidth = 0.5,
  borderColor = "grey",
}) => (
  <View
    style={{
      ...styles.container,
      width: size,
      height: size,
      borderRadius: size / 2,
      borderWidth: borderWidth,
      borderColor: borderColor,
    }}
  >
    <View style={{ backgroundColor: color, flex: 1 }} />
    <View style={{ backgroundColor: mawaqifBlue, flex: 1 }} />
  </View>
);
export default CircleStdPrm;

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    borderColor: "black",
    flexDirection: "row",
    // shadowColor: "black",
    // shadowOpacity: 0.5,
    // shadowOffset: {
    //   height: 5,
    //   width: 5,
    // },
    // shadowRadius: 0.5,
  },
});
