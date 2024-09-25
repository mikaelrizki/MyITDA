import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../../styles";

export default function ProgressBar({ ip }) {
  const Percent = (ip / 4) * 100 + "%";
  return (
    <View style={LOKAL_STYLES.progressBarBackground}>
      <View style={[LOKAL_STYLES.progressBarFill, { width: Percent }]}>
        <Text style={LOKAL_STYLES.progressText}>{ip}</Text>
      </View>
    </View>
  );
}

const LOKAL_STYLES = StyleSheet.create({
  progressBarBackground: {
    height: 34,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.radius,
    justifyContent: "center",
    borderWidth: 1,
    borderColor: COLORS.gray,
  },
  progressBarFill: {
    height: 34,
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.radius,
    justifyContent: "center",
    alignItems: "center",
  },
  progressText: {
    color: COLORS.white,
    fontSize: SIZES.extraSmallText,
  },
});
