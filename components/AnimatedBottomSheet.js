import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Animated, { useCode } from "react-native-reanimated";
import { TapGestureHandler, State } from "react-native-gesture-handler";
import AbuDhabiSector from "./AbuDhabiSector";
import { onGestureEvent } from "react-native-redash";

const { width, height } = Dimensions.get("window");

const AnimatedBottomSheet = ({
  translateY,
  gestureHandler,
  zIndex,
  opacity,
  children,
}) => {
  return (
    <>
      <TapGestureHandler {...gestureHandler}>
        <Animated.View
          style={{
            ...StyleSheet.absoluteFill,
            opacity: opacity,
            backgroundColor: "rgba(0,0,0,0.5)",
            zIndex: zIndex,
          }}
        />
      </TapGestureHandler>
      <Animated.View
        style={{
          ...styles.bottomSheet,
          transform: [{ translateY: translateY }],
          zIndex: 100,
        }}
      >
        {children}
      </Animated.View>
    </>
  );
};
export default AnimatedBottomSheet;

const styles = StyleSheet.create({
  bottomSheet: {
    position: "absolute",
    bottom: 0,
    width: width - 60,
    height: 300,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    backgroundColor: "white",
    shadowColor: "black",
    shadowRadius: 6,
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 30,
  },
});
