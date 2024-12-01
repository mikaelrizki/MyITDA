import { Image, TouchableOpacity, View } from "react-native";
import { COLORS, SIZES } from "../../styles";
import Text from "../../components/Text";
import IMAGES from "../../assets/images";
import Constants from "expo-constants";
import ICONS from "../../assets/icons";
import { useDispatch } from "react-redux";
import { resetDataAuth } from "../../stores/actions/actionAuth";

export default function ThirdAppBar({ navigation }) {
  const dispatch = useDispatch();
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
      <View style={{ height: 47, width: 47 }}>
        <Image
          source={IMAGES.logoITDA}
          style={{
            width: 47,
            height: 47,
          }}
        />
      </View>

      <View
        style={{
          flex: 1,
          height: 50,
          paddingLeft: 5,
          justifyContent: "center",
        }}
      >
        <Text regular fontsize={SIZES.smallText} padVertical={0}>
          Selamat Datang di MyITDA,
        </Text>
        <Text
          bold
          fontsize={SIZES.smallText}
          color={COLORS.darkBlue}
          padVertical={0}
          style={{ textTransform: "capitalize" }}
        >
          Admin
        </Text>
      </View>

      <TouchableOpacity
        activeOpacity={0.87}
        style={{
          width: 45,
          height: 45,
          backgroundColor: COLORS.softRed,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 50,
          shadowColor: COLORS.red,
          shadowOpacity: 0.1,
          shadowRadius: 8,
          elevation: 4,
        }}
        onPress={() => {
          navigation.replace("Auth");
          dispatch(resetDataAuth());
        }}
      >
        <Image
          source={ICONS.iconLogout}
          style={{ width: 22.5, height: 24, marginLeft: 2 }}
        />
      </TouchableOpacity>
    </View>
  );
}
