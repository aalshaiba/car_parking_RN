import React from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import PlateRow from "../components/PlateRow";
import Divider from "../components/Divider";
import CustomButton from "../components/CustomButton";
import Row from "../components/Row";
import { connect } from "react-redux";

const AjmanScreen = ({ isDark }) => (
  <View style={styles.container}>
    {isDark && (
      <View
        style={{ ...StyleSheet.absoluteFill, backgroundColor: "#303030" }}
      />
    )}
    <SafeAreaView />
    <View style={{ height: 70 }} />
    <PlateRow />
    <Divider />
    <CustomButton title={"SAVE"} marginVertical={15} />
    <Divider />
    <ScrollView>
      <Row marginVertical={15} duration={1} notAjman={false} />
    </ScrollView>
  </View>
);

const currentState = (state) => {
  return {
    isDark: state.menu.isDark,
  };
};

export default connect(currentState)(AjmanScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
