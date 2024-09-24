import { Text as RNText } from "react-native";
import { COLORS, SIZES } from "../../styles";

export default function Text({
  fontsize = SIZES.font,
  padVertical = SIZES.padding,
  color = COLORS.primary,
  children,
  extraBold = false,
  bold = false,
  semiBold = false,
  medium = false,
  regular = false,
  light = false,
  center = false,
  opacity = 1,
  underline = false,
  style,
  right,
  ...props
}) {
  return (
    <RNText
      {...props}
      style={[
        {
          fontSize: fontsize,
          color: color,
          paddingVertical: padVertical,
          textAlign: center ? "center" : "left",
          opacity,
        },
        extraBold && { fontFamily: "extraBold" },
        bold && { fontFamily: "bold" },
        semiBold && { fontFamily: "semiBold" },
        medium && { fontFamily: "medium" },
        regular && { fontFamily: "regular" },
        light && { fontFamily: "light" },
        right && { textAlign: "right" },
        underline && { textDecorationLine: "underline" },
        style,
      ]}
    >
      {children}
    </RNText>
  );
}
