import React, { useState, useRef, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  SafeAreaView,
  Dimensions,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";

import { connect } from "react-redux";
import { setSector, setCode, showModal } from "../actions/AbuDhabiActions";
import Animated, { Transition, Transitioning } from "react-native-reanimated";
import SectorRow from "../components/SectorRow";
import StandardPremiumRow from "../components/StandardPremiumRow";
import VisitingVilla from "../components/VisitingVilla";
import Divider from "../components/Divider";
import { PlateSubTitle, MyPadding } from "../utils/Styles";
import CustomButton from "../components/CustomButton";
import Row from "../components/Row";
import FAB from "../components/FAB";
import PlateRow from "../components/PlateRow";
import DurationRow from "../components/DurationRow";
import Modal from "../components/PlateImageModal";
import { BlurView } from "expo-blur";
import StandardPremiumAndroid from "../components/StandardPremiumAndroid";
import ImageSelection from "../components/icons/ImageSelection";
import PickerModal from "../components/PickerModal";

const { width, height } = Dimensions.get("window");

const AbuDhabiScreen = ({ isDark, showModal, pickerIsOpen }) => {
  const [on, setOn] = useState(false);

  const getState = (bool) => {
    if (ref) {
      ref.current.animateNextTransition();
    }
    setOn(bool);
  };

  const transition = (
    <Transition.Together>
      <Transition.In type="fade" durationMs={400} />
      <Transition.Out type="fade" durationMs={400} />
    </Transition.Together>
  );

  const ref = useRef();
  const ref1 = useRef();
  useEffect(() => {
    if (ref1.current) {
      ref1.current.animateNextTransition();
    }
  }, [isDark]);

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      {isDark && (
        <View
          style={{ ...StyleSheet.absoluteFill, backgroundColor: "#303030" }}
        />
      )}
      {(showModal || pickerIsOpen) && (
        <BlurView
          intensity={100}
          tint="dark"
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            zIndex: 1,
          }}
        />
      )}
      <Modal isDark={isDark}>
        <ImageSelection />
      </Modal>
      <PickerModal />
      <SafeAreaView />
      <View style={{ height: 70 }} />
      <StatusBar barStyle={isDark ? "light-content" : "dark-content"} />
      <VisitingVilla isDark={isDark} value={on} changeValue={getState} />
      <PlateRow />
      <Divider />
      <Transitioning.View
        {...{ ref, transition }}
        style={{ marginVertical: 15 }}
      >
        {on && <SectorRow />}
        {!on &&
          (Platform.OS === "android" ? (
            <StandardPremiumAndroid />
          ) : (
            <StandardPremiumRow />
          ))}
      </Transitioning.View>
      <Divider />
      <View style={{ ...styles.btnRow, ...MyPadding }}>
        <CustomButton title={"PAY FINES"} />
        <CustomButton title={"TOP UP"} />
        <CustomButton title={"SAVE"} />
      </View>
      <Divider />
      <DurationRow isDark={isDark}>
        <View style={{ flexDirection: "row", marginTop: 5 }}>
          <Text style={{ color: isDark ? "white" : "black" }}>
            Total fare is{" "}
          </Text>
          <Text
            style={{ fontWeight: "bold", color: isDark ? "white" : "black" }}
          >
            2 AED*
          </Text>
        </View>
        <Text style={[PlateSubTitle, { marginTop: 0 }]}>
          * Excludes SMS fare
        </Text>
      </DurationRow>
      <Divider />
      <ScrollView>
        <Animated.View>
          <Row sector={"G11"} switched={on} duration={1} marginVertical={15} />
        </Animated.View>
      </ScrollView>
      <FAB />
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    ad: state.ad,
    isDark: state.menu.isDark,
    showModal: state.ad.showModal,
    pickerIsOpen: state.ad.showPicker,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    change: (num) => dispatch(setSector(num)),
    code: (c) => dispatch(setCode(c)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AbuDhabiScreen);

const styles = StyleSheet.create({
  btnRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 15,
  },
});
