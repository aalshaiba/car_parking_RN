import React from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import PlateRow from "../components/PlateRow";
import Divider from "../components/Divider";
import CustomButton from "../components/CustomButton";
import DurationRow from "../components/DurationRow";
import Row from "../components/Row";
import { connect } from "react-redux";

const SharjahScreen = ({ isDark }) => (
  <View style={styles.container}>
    {isDark && (
      <View
        style={{ ...StyleSheet.absoluteFill, backgroundColor: "#303030" }}
      />
    )}
    <SafeAreaView />
    <View style={{ height: 70 }} />
    <PlateRow notSharjah={false} />
    <Divider />
    <CustomButton title={"SAVE"} marginVertical={15} />
    <Divider />
    <DurationRow isDark={isDark} />
    <Divider />
    <ScrollView>
      <Row marginVertical={15} duration={1} notSharjah={false} />
    </ScrollView>
  </View>
);

const currentState = (state) => {
  return {
    isDark: state.menu.isDark,
  };
};

export default connect(currentState)(SharjahScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
