import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

import { TextStyle } from "../utils/Styles";
import { connect } from "react-redux";
const { width, height } = Dimensions.get("window");

const SectorRow = ({ isDark }) => {
  return (
    <View style={styles.container}>
      <Text style={TextStyle}>Select Sector</Text>
      <Text style={{ color: isDark ? "white" : "black" }}>A11</Text>
    </View>
  );
};

const current = (state) => {
  return {
    isDark: state.menu.isDark,
  };
};

export default connect(current)(SectorRow);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: width,
    marginVertical: 15,
    paddingHorizontal: 25,
  },
});
