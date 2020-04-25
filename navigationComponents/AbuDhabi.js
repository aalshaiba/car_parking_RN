import { createStackNavigator } from "@react-navigation/stack";
import AbuDhabi from "../screens/AbuDhabiScreen";
import React from "react";
import { Text } from "react-native";
import TopLeftIcon from "../components/TopLeftIcon";
import { connect } from "react-redux";

const Stack = createStackNavigator();

const AbuDhabiScreen = ({ navigation, isDark }) => (
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
          Abu Dhabi
        </Text>
      ),
    }}
  >
    <Stack.Screen
      name="Home"
      component={AbuDhabi}
      options={{ headerTransparent: true }}
    />
  </Stack.Navigator>
);

const currentState = (state) => {
  return {
    isDark: state.menu.isDark,
  };
};
export default connect(currentState)(AbuDhabiScreen);
