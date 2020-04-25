import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { connect } from "react-redux";

const TopLeftIcon = ({ navigation, isDark }) => (
  <TouchableOpacity
    style={styles.container}
    onPress={() => navigation.openDrawer()}
  >
    <MaterialIcons
      size={30}
      name={"menu"}
      color={isDark ? "rgba(255,255,255,0.8)" : null}
    />
  </TouchableOpacity>
);

const mapStateToProps = (state) => {
  return {
    isDark: state.menu.isDark,
  };
};
export default connect(mapStateToProps)(TopLeftIcon);

const styles = StyleSheet.create({
  container: {
    paddingLeft: 15,
  },
});
