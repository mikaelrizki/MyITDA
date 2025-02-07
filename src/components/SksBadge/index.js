import { StyleSheet, View } from "react-native";
import React from "react";
import Text from "../Text";
import { COLORS, SIZES } from "../../styles";

export default function SksBadge({ value }) {
  return (
    <View style={LOKAL_STYLES.sksContainer}>
      <View style={LOKAL_STYLES.sksBadge}>
        <Text color={COLORS.white} fontsize={SIZES.smallText}>
          {value}
        </Text>
      </View>
    </View>
  );
}

const LOKAL_STYLES = StyleSheet.create({
  sksContainer: {
    paddingVertical: 4,
    resizeMode: "contain",
  },
  sksBadge: {
    backgroundColor: COLORS.gray,
    paddingHorizontal: 4,
    borderRadius: SIZES.radius,
  },
});
