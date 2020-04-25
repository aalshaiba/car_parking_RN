import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

const CustomButton = ({ onPress, title, width = 110, marginVertical = 0 }) => (
  <TouchableOpacity
    style={{
      ...styles.container,
      width: width,
      marginVertical: marginVertical,
    }}
    onPress={onPress}
  >
    <Text style={styles.txt}>{title}</Text>
  </TouchableOpacity>
);
export default CustomButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "grey",
    paddingVertical: 12,
    borderRadius: 5,
  },
  txt: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
