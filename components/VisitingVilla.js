import React, { useRef } from "react";
import { View, Text, StyleSheet, Dimensions, Switch } from "react-native";
import { TextStyle } from "../utils/Styles";
import { customBlue, mawaqifBlue } from "../utils/Utilities";

const { width, height } = Dimensions.get("window");

const VisitingVilla = ({ value, changeValue, isDark }) => (
  <View style={styles.container}>
    <Text style={TextStyle}>Are you visiting a villa?</Text>
    <Switch
      value={value}
      onValueChange={(val) => changeValue(val)}
      trackColor={{ true: isDark ? "green" : customBlue, false: null }}
    />
  </View>
);

export default VisitingVilla;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 25,
    width: width,
  },
});
