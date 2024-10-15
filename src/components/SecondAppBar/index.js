import { Image, TouchableOpacity, View } from "react-native";
import { COLORS, SIZES } from "../../styles";
import Text from "../../components/Text";
import Constants from "expo-constants";
import ICONS from "../../assets/icons";

export default function SecondAppBar({ label, navigation, setting }) {
  const SBHeight = Constants.statusBarHeight + 10;
  return (
    <View
      style={{
        height: 47,
        flexDirection: "row",
        alignItems: "center",
        marginTop: SBHeight,
        marginHorizontal: 20,
      }}
    >
      <View
        style={{
          flex: 1,
          height: 50,
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
        }}
      >
        <Text
          bold
          fontsize={SIZES.LargeText}
          padVertical={0}
          color={setting ? COLORS.white : COLORS.primary}
        >
          {label}
        </Text>

        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            position: "absolute",
            paddingRight: 3,
            height: 40,
            width: 40,
            borderRadius: 50,
            backgroundColor: setting ? COLORS.white : COLORS.transparent,
            left: -5,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => navigation.goBack()}
        >
          <Image source={ICONS.iconBack} style={{ height: 22, width: 13 }} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
