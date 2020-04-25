import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AUH, DXB, SHJ, AJM, FUJ } from "./SvgIcons";

import RAK from "../../assets/svg/rak";
import UMQ from "../../assets/svg/umq";
import UMQ_DARK from "../../assets/svg/umq-dark";

import { connect } from "react-redux";

const images = (isDark, dimension) => [
  <AUH height={dimension} width={dimension} isDark={isDark} />,
  <DXB height={dimension} width={dimension} isDark={isDark} />,
  <SHJ height={dimension} width={dimension} isDark={isDark} />,
  <AJM height={dimension} width={dimension} isDark={isDark} />,
  isDark ? (
    <UMQ_DARK height={dimension} width={dimension} />
  ) : (
    <UMQ height={dimension} width={dimension} />
  ),
  <RAK height={dimension} width={dimension} />,
  <FUJ height={dimension} width={dimension} isDark={isDark} />,
];

const ImageSelection = ({ isDark }) => (
  <View style={styles.container}>
    {images(isDark, 70).map((item, index) => (
      <View style={styles.item} key={index}>
        {item}
      </View>
    ))}
  </View>
);

const currentState = (state) => {
  return {
    isDark: state.menu.isDark,
  };
};
export default connect(currentState)(ImageSelection);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
  item: {
    padding: 15,
  },
});
