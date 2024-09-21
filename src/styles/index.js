import { Dimensions, StyleSheet } from "react-native";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

export const COLORS = {
  primary: "#3085BB",
  secondary: "#EBF7FF",
  white: "#FFFFFF",
  black: "#222222",
  gray: "#A1A1A1",
  transparent: "transparent",
  warning: "#BB3030",
  lightWarning: "#FFEBEB",
};

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 10,
  bigRadius: 50,
  padding: 12,
  padding2: 20,
  disableOpacity: 0.7,
  // font sizes
  extraLargeText: 32,
  LargeText: 20,
  mediumText: 14,
  smallText: 12,
  extraSmallText: 10,
  // app dimensions
  width: WIDTH,
  height: HEIGHT,
  full: "100%",
  auto: "auto",
};

export const STYLES = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: SIZES.padding2,
  }
});