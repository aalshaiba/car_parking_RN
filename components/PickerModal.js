import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Picker,
  Animated,
  TouchableOpacity,
} from "react-native";
import { connect } from "react-redux";
import { showPicker } from "../actions/AbuDhabiActions";

const PickerModal = ({ openPicker, togglePicker }) => {
  const [bottom, setBottom] = useState(new Animated.Value(-500));

  useEffect(() => {
    toggle1();
  }, [openPicker]);

  const toggle1 = () => {
    if (openPicker) {
      Animated.spring(bottom, {
        toValue: 0,
        speed: 20,
      }).start();
    } else {
      Animated.timing(bottom, {
        toValue: -500,
        duration: 400,
      }).start();
    }
  };

  return (
    <Animated.View
      style={{
        ...styles.container,
        height: 500,
        bottom: bottom,
        backgroundColor: "red",
      }}
    >
      <TouchableOpacity onPress={() => togglePicker(false)}>
        <Text>Close</Text>
      </TouchableOpacity>
      <Picker selectedValue={1} style={{ width: 50 }}>
        <Picker.Item value={1} label={"1"} />
        <Picker.Item value={2} label={"2"} />
      </Picker>
    </Animated.View>
  );
};

const currentState = (state) => {
  return {
    openPicker: state.ad.showPicker,
  };
};

const mapDispatch = (dispatch) => {
  return {
    togglePicker: (bool) => dispatch(showPicker(bool)),
  };
};

export default connect(currentState, mapDispatch)(PickerModal);

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2,
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
  },
});
