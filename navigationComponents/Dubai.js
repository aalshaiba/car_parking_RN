import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import TopLeftIcon from "../components/TopLeftIcon";
import Dubai from "../screens/DubaiScreen";
import { connect } from "react-redux";

const Stack = createStackNavigator();

const DubaiScreen = ({ navigation, isDark }) => (
  <Stack.Navigator
    screenOptions={{
      headerLeft: () => <TopLeftIcon navigation={navigation} />,
      headerTitle: () => (
        <Text
          style={{
            color: isDark ? "white" : "black",
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          Dubai
        </Text>
      ),
    }}
  >
    <Stack.Screen
      name="Home"
      component={Dubai}
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

export default connect(currentState)(DubaiScreen);
