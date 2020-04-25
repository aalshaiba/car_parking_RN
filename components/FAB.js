import React, { useEffect, useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { FABColor } from "../utils/Utilities";
import Logo from "../assets/svg/message.svg";
import { connect } from "react-redux";
import { Transitioning, Transition } from "react-native-reanimated";

const FAB = ({ onPress, isDark }) => {
  const transition = (
    <Transition.Together>
      <Transition.In type="fade" durationMs={400} />
      <Transition.Out type="fade" durationMs={400} />
    </Transition.Together>
  );
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      ref.current;
    }
  }, [isDark]);

  return (
    <TouchableOpacity
      style={{
        backgroundColor: isDark ? "green" : FABColor,
        ...styles.container,
      }}
      onPress={onPress}
    >
      <Logo height={33} width={33} fill={"white"} />
    </TouchableOpacity>
  );
};

const current = (state) => {
  return {
    isDark: state.menu.isDark,
  };
};

export default connect(current)(FAB);

const size = 60;

const styles = StyleSheet.create({
  container: {
    width: size,
    height: size,
    borderRadius: size / 2,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 25,
    right: 25,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
});
