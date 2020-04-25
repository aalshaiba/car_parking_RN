import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import TopLeftIcon from "../components/TopLeftIcon";
import AjmanScreen from "../screens/AjmanScreen";
import { connect } from "react-redux";

const Stack = createStackNavigator();

const Ajman = ({ navigation, isDark }) => (
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
          Ajman
        </Text>
      ),
    }}
  >
    <Stack.Screen
      name="Home"
      component={AjmanScreen}
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

export default connect(currentState)(Ajman);
