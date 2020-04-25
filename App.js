import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AbuDhabi from "./navigationComponents/AbuDhabi";
import Dubai from "./navigationComponents/Dubai";
import Sharjah from "./navigationComponents/Sharjah";
import Ajman from "./navigationComponents/Ajman";
import MenuScreen from "./screens/MenuScreen";
import { Provider } from "react-redux";
import store from "./store/Store";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName={"AbuDhabi"}
          drawerContent={(props) => <MenuScreen {...props} />}
          drawerType="back"
          overlayColor={"transparent"}
          drawerStyle={{
            width: 250,
          }}
          sceneContainerStyle={{
            shadowRadius: 15,
            shadowOffset: {
              width: 5,
              height: 5,
            },
            shadowColor: "black",
            shadowOpacity: 0.3,
            elevation: 15,
          }}
        >
          <Drawer.Screen name={"AbuDhabi"} component={AbuDhabi} />
          <Drawer.Screen name={"Dubai"} component={Dubai} />
          <Drawer.Screen name={"Sharjah"} component={Sharjah} />
          <Drawer.Screen name={"Ajman"} component={Ajman} />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
