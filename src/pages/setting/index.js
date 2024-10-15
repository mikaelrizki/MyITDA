import { Image, TouchableOpacity, View } from "react-native";
import Text from "../../components/Text";
import IMAGES from "../../assets/images";
import { COLORS, SHADOWS, SIZES } from "../../styles";
import SecondAppBar from "../../components/SecondAppBar";
import ICONS from "../../assets/icons";

export default function SettingScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
      }}
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
        }}
      >
        <Image
          source={IMAGES.bgSetting}
          style={{
            width: "100%",
            height: "undefine",
            aspectRatio: 360 / 348,
          }}
          resizeMode="contain"
        />
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
          }}
        >
          <Image source={IMAGES.bgPic} style={{ width: 194, height: 194 }} />
          <Image
            source={IMAGES.profilePic}
            style={{ position: "absolute", width: 137, height: 137 }}
          />
        </View>
      </View>
      <View style={{ width: SIZES.width }}>
        <SecondAppBar
          label={"Profil Mahasiswa"}
          setting
          navigation={navigation}
        />
      </View>

      <View
        style={{
          position: "absolute",
          alignItems: "center",
          width: "100%",
          height: "40%",
          top: SIZES.height / 2.9,
          justifyContent: "space-around",
        }}
      >
        <View
          style={[
            SHADOWS.shadowBox,
            {
              width: "65%",
              height: "45%",
              backgroundColor: "white",
              borderRadius: 20,
              shadowColor: COLORS.primary,
              justifyContent: "space-evenly",
            },
          ]}
        >
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 20,
              alignItems: "center",
            }}
          >
            <Image
              source={ICONS.usernameIcon}
              style={{ width: 30, height: 29 }}
            />
            <Text bold fontsize={SIZES.smallText} style={{ paddingLeft: 20 }}>
              Melisa Wijaya
            </Text>
          </View>
          <View
            style={{
              borderWidth: 0.5,
              borderColor: COLORS.lightGray,
              marginHorizontal: 20,
            }}
          />
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 20,
              alignItems: "center",
            }}
          >
            <Image source={ICONS.nimIcon} style={{ width: 30, height: 29 }} />
            <Text bold fontsize={SIZES.smallText} style={{ paddingLeft: 20 }}>
              71210714
            </Text>
          </View>
        </View>

        <View
          style={{
            width: "65%",
            height: "34%",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 20,
              alignItems: "center",
              backgroundColor: COLORS.secondary,
              borderRadius: 10,
            }}
          >
            <Image
              source={ICONS.notificationSwitch}
              style={{ width: 30, height: 29 }}
            />
            <Text bold fontsize={SIZES.smallText} style={{ paddingLeft: 20 }}>
              Notifikasi
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 20,
              alignItems: "center",
              backgroundColor: COLORS.secondary,
              borderRadius: 10,
            }}
          >
            <Image
              source={ICONS.changePasswordIcon}
              style={{ width: 30, height: 29 }}
            />
            <Text bold fontsize={SIZES.smallText} style={{ paddingLeft: 20 }}>
              Ubah Kata Sandi
            </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        activeOpacity={0.87}
        style={{
          position: "absolute",
          bottom: 30,
          backgroundColor: COLORS.red,
          width: "70%",
          height: "7%",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 50,
          shadowColor: COLORS.red,
          shadowOpacity: 0.1,
          shadowRadius: 8,
          elevation: 4,
        }}
        onPress={() => navigation.navigate("Splash")}
      >
        <Text bold fontsize={SIZES.mediumText} color={COLORS.white}>
          Keluar
        </Text>
      </TouchableOpacity>
    </View>
  );
}
