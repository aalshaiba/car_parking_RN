import React from "react";
import { View, Text, StyleSheet } from "react-native";

const TxtComponent = ({ dark = false, children, style = {} }) => (
  <Text style={[{ color: dark ? "white" : "black" }, { ...style }]}>
    {children}
  </Text>
);
export default TxtComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
