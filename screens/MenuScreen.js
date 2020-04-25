import React, { useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  Platform,
} from "react-native";
import ItemDrawer from "../components/ItemDrawer";
import { FontAwesome, FontAwesome5, Feather } from "@expo/vector-icons";
import Divider from "../components/Divider";
import { setDark } from "../actions/MenuActions";
import { connect } from "react-redux";
import TxtComponent from "../components/TxtComponent";
import { Transitioning, Transition } from "react-native-reanimated";

const MenuScreen = ({ navigation, state, dark, isDark }) => {
  const transition = (
    <Transition.Together>
      <Transition.In type="fade" durationMs={400} />
      <Transition.Out type="fade" durationMs={400} />
    </Transition.Together>
  );

  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      ref.current.animateNextTransition();
    }
  }, [isDark]);

  return (
    <Transitioning.View style={{ flex: 1 }} ref={ref} transition={transition}>
      {isDark && (
        <View
          style={{ ...StyleSheet.absoluteFill, backgroundColor: "#303030" }}
        />
      )}
      <SafeAreaView />
      <Text style={styles.menuTitle}>Menu</Text>
      <ItemDrawer
        isDark={isDark}
        focused={state.index == 0}
        title={"Abu Dhabi"}
        onPress={() => navigation.navigate("AbuDhabi")}
      />
      <ItemDrawer
        isDark={isDark}
        focused={state.index == 1}
        title={"Dubai"}
        onPress={() => navigation.navigate("Dubai")}
      />
      <ItemDrawer
        isDark={isDark}
        focused={state.index == 2}
        title={"Sharjah"}
        onPress={() => navigation.navigate("Sharjah")}
      />
      <ItemDrawer
        isDark={isDark}
        focused={state.index == 3}
        title={"Ajman"}
        onPress={() => navigation.navigate("Ajman")}
      />
      <Divider marginHorizontal={10} />
      <View>
        <Text
          style={{
            fontWeight: "600",
            marginBottom: 15,
            color: isDark ? "rgba(255,255,255,0.8)" : "grey",
            marginVertical: 15,
            marginHorizontal: 25,
          }}
        >
          Abu Dhabi Toll Gate System
        </Text>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 25,
            paddingVertical: 15,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <FontAwesome name={"car"} size={18} color={"grey"} />
            <Text
              style={{
                marginLeft: 10,
                color: isDark ? "rgba(255,255,255,0.8)" : "grey",
              }}
            >
              Register your car
            </Text>
          </View>
          <FontAwesome5 name={"info-circle"} size={18} color={"grey"} />
        </TouchableOpacity>
      </View>
      <Divider marginHorizontal={10} />
      <View>
        <Text
          style={{
            color: isDark ? "rgba(255,255,255,0.8)" : "grey",
            fontWeight: "600",
            marginVertical: 15,
            marginHorizontal: 25,
          }}
        >
          Settings
        </Text>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 25,
            paddingVertical: 15,
          }}
          onPress={() => dark(!isDark)}
        >
          <Text style={{ color: isDark ? "rgba(255,255,255,0.8)" : "grey" }}>
            {isDark ? "Disable dark mode" : "Enable dark mode"}
          </Text>

          {!isDark && <Feather name={"moon"} size={20} color={"grey"} />}
          {isDark && <Feather name={"sun"} size={20} color={"grey"} />}
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1 }} />
      <View
        style={{
          flexDirection: "row",
          marginLeft: 25,
          marginBottom: Platform.OS === "android" ? 25 : 0,
        }}
      >
        <Text style={{ color: isDark ? "rgba(255,255,255,0.8)" : "grey" }}>
          Made by{" "}
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            color: isDark ? "rgba(255,255,255,0.8)" : "grey",
          }}
        >
          AMTech.
        </Text>
      </View>
      <SafeAreaView />
    </Transitioning.View>
  );
};

const mapStateToProps = (state) => {
  return {
    isDark: state.menu.isDark,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dark: (bool) => dispatch(setDark(bool)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuScreen);

const styles = StyleSheet.create({
  menuTitle: {
    fontWeight: "bold",
    fontSize: 25,
    marginTop: 10,
    color: "grey",
    paddingHorizontal: 25,
    marginBottom: 20,
  },
});
