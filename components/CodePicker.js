import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, Picker } from "react-native";
import { codeNumbers } from "../utils/Utilities";
import Animated from "react-native-reanimated";
import { connect } from "react-redux";
import { setCode } from "../actions/AbuDhabiActions";

const CodePicker = ({ ad, change }) => {
  return (
    <Picker
      selectedValue={ad.code}
      style={{ width: 50 }}
      onValueChange={(val, index) => change(val)}
      mode="dialog"
    >
      {codeNumbers().map((item, index) => (
        <Picker.Item value={item} label={`${item}`} key={index} />
      ))}
    </Picker>
  );
};

const mapStateToProps = (state) => {
  return {
    ad: state.ad,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    change: (c) => dispatch(setCode(c)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CodePicker);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
