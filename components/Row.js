import React, { useEffect, useRef } from "react";
import { View, Text } from "react-native";
import { MyPadding } from "../utils/Styles";
import CircleInRow from "./CircleInRow";
import { MaterialIcons } from "@expo/vector-icons";
import Divider from "./Divider";
import Plate from "./Plate";
import Auh from "../assets/svg/auh.svg";
import CircleStdPrm from "./CircleStdPrm";
import {
  Transition,
  Transitioning,
  TransitioningView,
} from "react-native-reanimated";
import { AUH } from "./icons/SvgIcons";
import { connect } from "react-redux";

const Row = ({
  sector,
  isDark,
  duration,
  marginVertical = 0,
  notSharjah = true,
  notAjman = true,
  switched = false,
}) => {
  const transition = (
    <Transition.Together>
      <Transition.In type="scale" durationMs={750} />
      <Transition.Out type="scale" durationMs={750} />
    </Transition.Together>
  );

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          ...MyPadding,
          marginVertical: marginVertical,
        }}
      >
        <CircleInRow color={"grey"}>
          <MaterialIcons name={"edit"} size={24} color={"white"} />
        </CircleInRow>
        <CircleInRow>
          {notSharjah ? (
            switched ? (
              <Text style={{ color: "white", fontWeight: "bold" }}>
                {sector}
              </Text>
            ) : (
              <CircleStdPrm />
            )
          ) : (
            <MaterialIcons name={"home"} size={24} color={"white"} />
          )}
        </CircleInRow>
        <Plate
          notSharjah={notSharjah}
          height={50}
          width={120}
          borderWidth={3}
          borderRadius={8}
          fontSize={12}
        >
          <AUH height={25} width={25} isDark={isDark} />
        </Plate>
        <CircleInRow color={"grey"}>
          <Text style={{ color: "white", fontWeight: "bold" }}>
            {duration} {duration > 1 ? "hrs" : "hr"}
          </Text>
        </CircleInRow>
      </View>
      <Divider height={0.5} />
    </View>
  );
};

const current = (state) => {
  return {
    isDark: state.menu.isDark,
  };
};
export default connect(current)(Row);
