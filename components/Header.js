import React from "react";
import { View, Text, Dimensions } from "react-native";
import TopLeftIcon from "../components/TopLeftIcon";

const { width, height } = Dimensions.get("window");

const Header = ({ navigation, title }) => (
  <View
    style={{
      height: 70,
      width: width,
      flexDirection: "row",
      alignItems: "center",
      borderBottomColor: "rgba(0,0,0,0.25)",
      borderBottomWidth: 0.3,
    }}
  >
    <TopLeftIcon navigation={navigation} />
    <Text
      style={{
        fontSize: 20,
        fontWeight: "500",
        marginLeft: 25,
      }}
    >
      {title}
    </Text>
  </View>
);
export default Header;
