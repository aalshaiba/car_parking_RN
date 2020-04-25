import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import TopLeftIcon from "../components/TopLeftIcon";
import SharjahScreen from "../screens/SharjahScreen";
import { connect } from "react-redux";

const Stack = createStackNavigator();

const Sharjah = ({ navigation, isDark }) => (
  <Stack.Navigator
    screenOptions={{
      headerLeft: () => {
        return <TopLeftIcon navigation={navigation} />;
      },
      headerTitle: () => (
        <Text
          style={{
            color: isDark ? "white" : "black",
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          Sharjah
        </Text>
      ),
    }}
  >
    <Stack.Screen
      name="Home"
      component={SharjahScreen}
      options={{
        headerTransparent: true,
      }}
    />
  </Stack.Navigator>
);

const currentState = (state) => {
  return {
    isDark: state.menu.isDark,
  };
};

export default connect(currentState)(Sharjah);
