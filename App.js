import { View } from "react-native";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import Router from "./src/services/router";
import FONTS from "./src/assets/fonts";

export default function App() {
  const [fontsLoaded, fontError] = useFonts(FONTS.KhumbhSans);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <Router />
        <StatusBar style="auto" translucent={true} />
      </NavigationContainer>
    </View>
  );
}