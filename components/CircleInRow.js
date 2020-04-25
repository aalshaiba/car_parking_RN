import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { customBlue } from "../utils/Utilities";

const CircleInRow = ({ color = customBlue, children }) => (
  <View
    style={{
      height: 45,
      width: 45,
      backgroundColor: color,
      borderRadius: 25,
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    {children}
  </View>
);
export default CircleInRow;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
