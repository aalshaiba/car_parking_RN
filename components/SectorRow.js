import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";

import { TextStyle } from "../utils/Styles";
import { connect } from "react-redux";
import { TOGGLE_PICKER } from "../utils/Types";
const { width, height } = Dimensions.get("window");

const SectorRow = ({ isDark, togglePicker }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => togglePicker(true)}>
        <Text style={TextStyle}>Select Sector</Text>
      </TouchableOpacity>
      <Text style={{ color: isDark ? "white" : "black" }}>A11</Text>
    </View>
  );
};

const current = (state) => {
  return {
    isDark: state.menu.isDark,
  };
};

const mapDispatch = (dispatch) => {
  return {
    togglePicker: (bool) =>
      dispatch({
        type: TOGGLE_PICKER,
        payload: bool,
      }),
  };
};

export default connect(current, mapDispatch)(SectorRow);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: width,
    marginVertical: 15,
    paddingHorizontal: 25,
  },
});
