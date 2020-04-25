import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Animated,
} from "react-native";
import { showModal } from "../actions/AbuDhabiActions";
import { connect } from "react-redux";
import { AntDesign } from "@expo/vector-icons";

import { mawaqifBlue, FABColor } from "../utils/Utilities";

const { width, height } = Dimensions.get("window");

const Modal = ({ isDark, showModal, modalIsOpen, children }) => {
  const [bottom, setBottom] = useState(new Animated.Value(-300));

  useEffect(() => {
    toggle();
  }, [modalIsOpen]);

  const toggle = () => {
    if (modalIsOpen) {
      Animated.spring(bottom, {
        toValue: 0,
        speed: 20,
      }).start();
    } else {
      Animated.spring(bottom, {
        toValue: -300,
        speed: 20,
      }).start();
    }
  };

  return (
    <Animated.View
      style={{
        ...styles.container,
        bottom: bottom,
        backgroundColor: isDark ? "#101010" : "white",
      }}
    >
      <View
        style={{
          ...styles.header,
          backgroundColor: isDark ? "green" : FABColor,
        }}
      >
        <Text style={styles.headerText}>Select Image of your plate</Text>
        <TouchableOpacity
          style={styles.closeBtn}
          onPress={() => showModal(false)}
        >
          <Animated.View>
            <AntDesign size={32} name={"closecircle"} color={"white"} />
          </Animated.View>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        {children}
      </View>
    </Animated.View>
  );
};

const current = (state) => {
  return {
    modalIsOpen: state.ad.showModal,
  };
};

const dispatches = (dispatch) => {
  return {
    showModal: (bool) => dispatch(showModal(bool)),
  };
};

export default connect(current, dispatches)(Modal);

const styles = StyleSheet.create({
  container: {
    height: 300,
    overflow: "hidden",
    width: "100%",
    borderRadius: 22,
    position: "absolute",
    zIndex: 2,
    shadowColor: "rgba(0,0,0,0.35)",
    shadowOffset: {
      height: 3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,

    justifyContent: "center",
    alignItems: "center",
    elevation: 15,
  },
  header: {
    width: "100%",
    textAlign: "left",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  headerText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
    textTransform: "uppercase",
  },
});
