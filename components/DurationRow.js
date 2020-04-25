import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MyPadding, TextStyle } from "../utils/Styles";

const DurationRow = ({ children, isDark }) => (
  <View
    style={{
      ...MyPadding,
      ...styles.btnRow,
    }}
  >
    <View>
      <Text style={{ ...TextStyle, color: isDark ? "white" : "black" }}>
        Duration (Hr)
      </Text>
      {children}
    </View>
    <Text style={{ color: isDark ? "white" : "black", fontSize: 18 }}>1</Text>
  </View>
);
export default DurationRow;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  btnRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 15,
  },
});
