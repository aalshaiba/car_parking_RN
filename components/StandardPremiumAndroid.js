import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { connect } from "react-redux";
import { mawaqifBlue } from "../utils/Utilities";
import Bar from "./Bar";
import CircleStdPrm from "./CircleStdPrm";

const { width, height } = Dimensions.get("window");

const StandardPremiumAndroid = ({ isDark }) => (
  <View style={styles.container}>
    <TouchableOpacity
      style={{
        borderColor: isDark ? "white" : "grey",
        borderWidth: 2,
        borderTopStartRadius: 10,
        borderBottomStartRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 25,
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <CircleStdPrm
        size={24}
        color={"black"}
        borderColor={isDark ? "white" : "grey"}
        borderWidth={2}
      />
      <Text
        style={{
          marginLeft: 10,
          color: isDark ? "white" : "black",
          textAlign: "center",
        }}
      >
        Standard
      </Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={{
        flex: 1,
        paddingVertical: 10,
        borderTopEndRadius: 10,
        borderBottomEndRadius: 10,
        paddingHorizontal: 25,
        borderColor: isDark ? "white" : "grey",
        borderStartWidth: 0,
        borderTopWidth: 2,
        borderEndWidth: 2,
        borderBottomWidth: 2,
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          marginRight: 10,
          color: isDark ? "white" : "black",
          textAlign: "center",
        }}
      >
        Premium
      </Text>
      <CircleStdPrm
        size={24}
        color={"white"}
        borderColor={isDark ? "white" : "grey"}
        borderWidth={2}
      />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: width,
    justifyContent: "space-around",
    paddingHorizontal: 25,
  },
});
const current = (state) => {
  return {
    isDark: state.menu.isDark,
  };
};

export default connect(current)(StandardPremiumAndroid);
