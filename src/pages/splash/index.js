import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../styles";

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>MyITDA</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: SIZES.largeText,
    color: COLORS.white,
  },
});