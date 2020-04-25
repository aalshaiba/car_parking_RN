import React from "react";
import {
  View,
  Dimensions,
  SegmentedControlIOS,
  SegmentedControlIOSComponent,
} from "react-native";
import Bar from "./Bar";
import { connect } from "react-redux";

const { width } = Dimensions.get("window");

const StandardPremiumRow = ({ isDark }) => {
  return (
    <View style={{ width: width, paddingHorizontal: 25 }}>
      <SegmentedControlIOS
        values={["Standard", "Premium"]}
        selectedIndex={0}
        style={{ backgroundColor: "grey" }}
      />
      <View style={{ flexDirection: "row", marginVertical: 5 }}>
        <Bar color={"black"} margin={15} />
        <Bar color={"white"} margin={15} />
      </View>
    </View>
  );
};

const current = (state) => {
  return {
    isDark: state.menu.isDark,
  };
};

export default connect(current)(StandardPremiumRow);
