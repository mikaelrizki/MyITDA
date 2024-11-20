import { Image, TouchableOpacity, View } from "react-native";
import { COLORS, SHADOWS, SIZES } from "../../styles";
import Text from "../../components/Text";
import IMAGES from "../../assets/images";
import Constants from "expo-constants";
import { useState } from "react";

export default function AppBar({
  username,
  bgColorBell,
  bellIcon,
  navigation,
  profilePicture,
  jenisKelamin,
}) {
  const [imageError, setImageError] = useState(false);
  const SBHeight = Constants.statusBarHeight + 10;
  return (
    <View
      style={{
        height: 47,
        flexDirection: "row",
        alignItems: "center",
        marginTop: SBHeight,
        marginHorizontal: 20,
      }}>
      <TouchableOpacity
        activeOpacity={0.7}
        style={{ height: 47, width: 47 }}
        onPress={() => navigation.navigate("MainAdmin")}>
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
        }}>
        <Text regular fontsize={SIZES.smallText} padVertical={0}>
          Selamat Datang di MyITDA,
        </Text>
        <Text
          bold
          fontsize={SIZES.smallText}
          color={COLORS.darkBlue}
          padVertical={0}
          style={{ textTransform: "capitalize" }}>
          {username}
        </Text>
      </View>

      <TouchableOpacity
        activeOpacity={0.7}
        style={[
          SHADOWS.shadowBox,
          {
            height: 45,
            width: 45,
            marginRight: 10,
            backgroundColor: bgColorBell,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 45,
          },
        ]}
        onPress={() => navigation.navigate("Announcement")}>
        <Image source={bellIcon} style={{ width: 20, height: 21 }} />
      </TouchableOpacity>

      <View>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate("Setting")}>
          <Image
            source={
              imageError && jenisKelamin === "L"
                ? IMAGES.manProfile
                : imageError && jenisKelamin === "P"
                ? IMAGES.womanProfile
                : { uri: profilePicture }
            }
            style={{
              width: 45,
              height: 45,
              borderWidth: 3,
              borderColor: COLORS.primary,
              borderRadius: 25,
            }}
            onError={() => setImageError(true)}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
