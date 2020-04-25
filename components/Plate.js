import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

import CodePicker from "./CodePicker";
import { connect } from "react-redux";

console.disableYellowBox = true;

const Plate = ({
  bgColor = "white",
  children,
  width = 300,
  height = 95,
  borderWidth = 6,
  borderRadius = 15,
  fontSize = 30,
  notSharjah = true,
  isDark,
}) => (
  <View
    style={[
      styles.container,
      {
        backgroundColor: isDark ? null : bgColor,
        width: width,
        height: height,
        borderWidth: borderWidth,
        borderRadius: borderRadius,
        borderColor: isDark ? "rgba(255,255,255,0.8)" : "black",
      },
    ]}
  >
    {notSharjah && (
      <Text
        style={{
          fontSize: fontSize,
          fontWeight: "bold",
          flex: 1,
          color: isDark ? "rgba(255,255,255,0.8)" : null,
        }}
      >
        50
      </Text>
    )}
    <View style={{ flex: 1, paddingHorizontal: 5 }}>{children}</View>
    <View style={{ flex: 3 }}>
      <TextInput
        maxLength={5}
        placeholder={"00000"}
        style={{
          fontSize: fontSize,
          fontWeight: "bold",
          textAlign: "center",
          color: isDark ? "rgba(255,255,255,0.8)" : null,
        }}
        keyboardType="number-pad"
        keyboardAppearance={isDark ? "dark" : "light"}
      />
    </View>
  </View>
);

const states = (state) => {
  return {
    isDark: state.menu.isDark,
  };
};

export default connect(states)(Plate);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
});
