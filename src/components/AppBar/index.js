import { Image, TouchableOpacity, View } from "react-native";
import { COLORS, SIZES } from "../../styles";
import Text from "../../components/Text";
import IMAGES from "../../assets/images";
import ICONS from "../../assets/icons";

export default function AppBar({ username }) {
  return (
    <View
      style={{
        height: 47,
        flexDirection: "row",
        alignItems: "center",
        marginTop: 23,
      }}
    >
      <TouchableOpacity activeOpacity={0.7} style={{ height: 47, width: 47 }}>
        <Image
          source={IMAGES.logoITDA}
          style={{
            width: 47,
            height: 47,
          }}
        />
      </TouchableOpacity>

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
        >
          {username}
        </Text>
      </View>

      <TouchableOpacity
        activeOpacity={0.7}
        style={{
          height: 45,
          width: 45,
          marginRight: 10,
          backgroundColor: COLORS.softBlue,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 45,
        }}
      >
        <Image source={ICONS.iconBellBlue} style={{ width: 20, height: 21 }} />
      </TouchableOpacity>

      <View>
        <TouchableOpacity activeOpacity={0.7}>
          <Image source={IMAGES.profilePic} style={{ width: 45, height: 45, borderWidth: 3, borderColor: COLORS.darkBlue, borderRadius: 25}} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
