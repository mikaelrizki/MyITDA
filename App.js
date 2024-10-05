import React, { useEffect } from "react";
import { View, AppState, Platform } from "react-native";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import Router from "./src/services/router";
import FONTS from "./src/assets/fonts";
import * as NavigationBar from "expo-navigation-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

export default function App() {
  const [fontsLoaded, fontError] = useFonts(FONTS.KhumbhSans);

  useEffect(() => {
    const handleAppStateChange = (nextAppState) => {
      if (nextAppState === "active" && Platform.OS === "android") {
        NavigationBar.setVisibilityAsync("hidden");
      }
    };

    const subscription = AppState.addEventListener(
      "change",
      handleAppStateChange
    );

    return () => {
      subscription.remove();
    };
  }, []);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <View style={{ flex: 1 }}>
          <NavigationContainer>
            <Router />
            <StatusBar style="auto" translucent={true} />
          </NavigationContainer>
        </View>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}
