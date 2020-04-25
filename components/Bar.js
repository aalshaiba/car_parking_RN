import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { mawaqifBlue } from "../utils/Utilities";

const Bar = ({ color, margin }) => (
  <View style={{ ...styles.container, marginHorizontal: margin }}>
    <View style={{ flex: 1, backgroundColor: mawaqifBlue }} />
    <View style={{ flex: 1, backgroundColor: color }} />
  </View>
);
export default Bar;

const styles = StyleSheet.create({
  container: {
    height: 10,
    flexDirection: "row",
    flex: 1,
    borderRadius: 15,
    borderWidth: 0.5,
    borderColor: "grey",
    overflow: "hidden",
  },
});
