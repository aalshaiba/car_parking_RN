import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { customBlue } from "../utils/Utilities";

const ItemDrawer = ({ title, num = 0, onPress, focused, isDark }) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <Text
      style={{
        color: focused
          ? isDark
            ? "#FFCB6B"
            : customBlue
          : isDark
          ? "rgba(255,255,255,0.8)"
          : "grey",
        fontWeight: focused ? "bold" : "normal",
      }}
    >
      {title}
    </Text>
    <Text
      style={[
        styles.subtitle,
        {
          fontWeight: focused ? "bold" : "normal",
          color: isDark ? "rgba(255,255,255,0.8)" : "grey",
        },
      ]}
    >
      {num} saved cars
    </Text>
  </TouchableOpacity>
);
export default ItemDrawer;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 25,
  },
  subtitle: {
    fontSize: 10,
  },
});
