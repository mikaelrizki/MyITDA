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
  danger: "#FF6B6B",
  success: "#88C097",
  darkGray: "#8C8C8C",
  lightGray: "#D5D5D5",
  darkBlue: "#005388",
  softBlue: "#BFE2F8",
  lightBlue: "#7DAFCF",
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
  },
  containerTabView: {
    flex: 1,
    marginBottom: 80,
    marginHorizontal: 20,
  },
});

export const SHADOWS = StyleSheet.create({
  shadowBox: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 7,
  },
});
