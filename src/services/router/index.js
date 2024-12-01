import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import SplashScreen from "../../pages/splash";
import AuthScreen from "../../pages/auth";
import Riwayat from "../../pages/payment/riwayat";
import ReportScreen from "../../pages/report";
import AnnouncementScreen from "../../pages/announcement";
import ResetScreen from "../../pages/reset";
import KhsScreen from "../../pages/report/khs";
import TranskripScreen from "../../pages/report/transkrip";
import MainScreen from "../../pages/main";
import SettingScreen from "../../pages/setting";
import MainAdminScreen from "../../pages/mainAdmin";

const Stack = createNativeStackNavigator();

export default function Router() {
  const dataAuth = useSelector((state) => state.dataAuth);
  const navigation = useNavigation();

  useEffect(() => {
    // MIDDLEWARE AUTH: Redirect to Auth screen if dataAuth is null
    if (!dataAuth.loginDate) {
      navigation.reset({
        index: 0,
        routes: [{ name: "Auth" }],
      });
    }
  }, [dataAuth, navigation]);
  return (
    <BottomSheetModalProvider>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
        }}
        screenListeners={{
          state: (e) => console.log("EVENT SCREEN", JSON.stringify(e, null, 2)),
        }}
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Auth" component={AuthScreen} />
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Riwayat" component={Riwayat} />
        <Stack.Screen name="Report" component={ReportScreen} />
        <Stack.Screen name="Announcement" component={AnnouncementScreen} />
        <Stack.Screen name="Reset" component={ResetScreen} />
        <Stack.Screen name="KHS" component={KhsScreen} />
        <Stack.Screen name="Transkrip" component={TranskripScreen} />
        <Stack.Screen name="Setting" component={SettingScreen} />
        <Stack.Screen name="MainAdmin" component={MainAdminScreen} />
      </Stack.Navigator>
    </BottomSheetModalProvider>
  );
}
