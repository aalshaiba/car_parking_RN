import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { PlateSubTitle } from "../utils/Styles";
import Plate from "./Plate";

import { AUH } from "../components/icons/SvgIcons";
import { connect } from "react-redux";
import { showModal } from "../actions/AbuDhabiActions";

const PlateRow = ({ notSharjah = true, isDark, showModal, selected }) => (
  <View style={{ marginVertical: 15 }}>
    <Plate notSharjah={notSharjah}>
      <TouchableOpacity onPress={() => showModal(true)}>
        <AUH height={55} width={55} isDark={isDark} />
      </TouchableOpacity>
    </Plate>
    <Text style={PlateSubTitle}>Click on the image to change plate</Text>
  </View>
);

const current = (state) => {
  return {
    isDark: state.menu.isDark,
    selected: state.ad.selectedEmirate,
  };
};

const dispatches = (dispatch) => {
  return {
    showModal: (bool) => dispatch(showModal(bool)),
  };
};

export default connect(current, dispatches)(PlateRow);
