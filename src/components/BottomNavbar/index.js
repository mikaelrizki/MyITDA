import {
  View,
  Button,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import Text from "../Text";
import { COLORS, SIZES } from "../../styles";
import ICONS from "../../assets/icons";

export default function BottomNavbar({ navigation, home, grade, payment }) {
  return (
    <View style={LOCAL_STYLE.frame}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigation.navigate("Home")}>
        <View style={[LOCAL_STYLE.logoFrame, {backgroundColor: home ? COLORS.white : COLORS.primary}]}>
          <Image
            source={home ? ICONS.homeActive : ICONS.home}
            style={LOCAL_STYLE.logo}
            resizeMode="contain"
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigation.navigate("Report")}>
        <View style={[LOCAL_STYLE.logoFrame, {backgroundColor: grade ? COLORS.white : COLORS.primary}]}>
          <Image
            source={grade ? ICONS.gradeActive : ICONS.grade}
            style={LOCAL_STYLE.logo}
            resizeMode="contain"
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigation.navigate("Payment")}>
        <View style={[LOCAL_STYLE.logoFrame, {backgroundColor: payment ? COLORS.white : COLORS.primary}]}>
          <Image
            source={payment ? ICONS.paymentActive : ICONS.payment}
            style={LOCAL_STYLE.logo}
            resizeMode="contain"
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const LOCAL_STYLE = StyleSheet.create({
  frame: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: COLORS.primary,
    borderRadius: 100,
    paddingHorizontal: 25,
  },
  logoFrame: {
    alignItems: "center",
    padding: SIZES.padding,
    borderRadius: 100,
    marginHorizontal: 15,
    marginVertical: 10,
  },
  logo: {
    width: 20,
    height: 20,
  },
});
