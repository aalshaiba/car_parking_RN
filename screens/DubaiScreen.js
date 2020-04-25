import React from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import PlateRow from "../components/PlateRow";
import Divider from "../components/Divider";
import CustomButton from "../components/CustomButton";
import DurationRow from "../components/DurationRow";
import Row from "../components/Row";
import { connect } from "react-redux";

const DubaiScreen = ({ isDark }) => {
  return (
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
      <DurationRow isDark={isDark} />
      <Divider />
      <ScrollView>
        <Row sector={"111A"} duration={1} marginVertical={15} switched={true} />
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

const currentState = (state) => {
  return {
    isDark: state.menu.isDark,
  };
};

export default connect(currentState)(DubaiScreen);
