import { Image, TouchableOpacity, View } from "react-native";
import { COLORS, SIZES } from "../../styles";
import Text from "../../components/Text";
import Constants from "expo-constants";
import ICONS from "../../assets/icons";

export default function SecondAppBar({ label, navigation }) {
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
      <TouchableOpacity
        activeOpacity={0.7}
        style={{
          height: 45,
          width: 45,
          backgroundColor: COLORS.transparent,
          left: -5,
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={() => navigation.goBack()}
      >
        <Image
          source={ICONS.iconBack}
          style={{ height: 22, width: 13}}
        />
      </TouchableOpacity>

      <View
        style={{
          flex: 1,
          height: 50,
          justifyContent: "center",
        }}
      >
        <Text bold fontsize={SIZES.LargeText} padVertical={0}>
          {label}
        </Text>
      </View>
    </View>
  );
}
