import React, { useState, useEffect } from "react";
import { View, Picker } from "react-native";
import { characters, numbers } from "../utils/Utilities";
import { connect } from "react-redux";
import { setSector } from "../actions/AbuDhabiActions";
import Animated from "react-native-reanimated";

const AbuDhabiSector = ({ ad, change }) => {
  const [val1, setVal1] = useState("A");
  const [val2, setVal2] = useState("1");
  const [val3, setVal3] = useState("1");

  return (
    <View style={{ flexDirection: "row" }}>
      <Picker
        selectedValue={ad.sector.charAt(0)}
        style={{ width: 50 }}
        onValueChange={(value, index) =>
          change(ad.sector.replace(ad.sector.charAt(0), value))
        }
      >
        {characters().map((val, index) => (
          <Picker.Item label={`${val}`} value={val} key={index} />
        ))}
      </Picker>
      <Picker
        selectedValue={ad.sector.charAt(1)}
        style={{ width: 50 }}
        onValueChange={(value, index) =>
          change(ad.sector.replace(ad.sector.charAt(1), value))
        }
      >
        {numbers().map((val, index) => (
          <Picker.Item label={`${val}`} value={val} key={index} />
        ))}
      </Picker>
      <Picker
        selectedValue={ad.sector.charAt(2)}
        style={{ width: 50 }}
        onValueChange={(value, index) =>
          change(ad.sector.replace(ad.sector.charAt(2), value))
        }
      >
        {numbers().map((val, index) => (
          <Picker.Item label={`${val}`} value={val} key={index} />
        ))}
      </Picker>
    </View>
  );
};

const mapState = (state) => {
  return {
    ad: state.ad,
  };
};

const mapDispatch = (dispatch) => {
  return {
    change: (sector) => dispatch(setSector(sector)),
  };
};

export default connect(mapState, mapDispatch)(AbuDhabiSector);
