import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export const PlateSubTitle = {
  fontSize: 11,
  color: "grey",
  marginTop: 5,
  flexWrap: "wrap",
  width: 150,
};

export const TextStyle = { fontSize: 18, color: "grey" };
export const MyPadding = {
  width: width,
  paddingHorizontal: 25,
};
