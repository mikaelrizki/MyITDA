import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import SplashScreen from "../../pages/splash";
import AuthScreen from "../../pages/auth";
import Riwayat from "../../pages/payment/riwayat";
import ReportScreen from "../../pages/report";
import AnnouncementScreen from "../../pages/announcement";
import ResetScreen from "../../pages/reset";
import KhsScreen from "../../pages/report/khs";
import TranskripScreen from "../../pages/report/transkrip";
import MainScreen from "../../pages/main";

const Stack = createNativeStackNavigator();

export default function Router() {
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
      </Stack.Navigator>
    </BottomSheetModalProvider>
  );
}
