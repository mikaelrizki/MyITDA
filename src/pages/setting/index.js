import { Image, TouchableOpacity, View } from "react-native";
import Text from "../../components/Text";
import IMAGES from "../../assets/images";
import { COLORS, SHADOWS, SIZES } from "../../styles";
import SecondAppBar from "../../components/SecondAppBar";
import ICONS from "../../assets/icons";
import ItemSetting from "../../components/ItemSetting";
import { useState } from "react";
import { resetDataAuth } from "../../stores/actions/actionAuth";
import { useDispatch, useSelector } from "react-redux";
import { resetDataPayment } from "../../stores/actions/actionPayment";
import { resetDataBeasiswa } from "../../stores/actions/actionBeasiswa";
import { resetNilaiKHS, resetYearnSmt } from "../../stores/actions/actionKHS";
import { resetNilaiTranskrip } from "../../stores/actions/actionTranskrip";
import { resetDataMahasiswa } from "../../stores/actions/actionMahasiswa";

export default function SettingScreen({ navigation }) {
  const [showNotif, setShowNotif] = useState(true);
  const dispatch = useDispatch();
  const dataMahasiswa = useSelector(
    (state) => state.dataMahasiswa.dataMahasiswaSelected[0]
  );
  const [imageError, setImageError] = useState(false);
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
            source={
              imageError && dataMahasiswa.jenis_kelamin === "L"
                ? IMAGES.manProfile
                : imageError && dataMahasiswa.jenis_kelamin === "P"
                ? IMAGES.womanProfile
                : {
                    uri:
                      "https://mahasiswa.itda.ac.id/perpus/img/" +
                      dataMahasiswa.path_foto,
                  }
            }
            style={{
              position: "absolute",
              width: 133,
              height: 133,
              borderRadius: 100,
            }}
            onError={() => setImageError(true)}
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
          <ItemSetting icon={ICONS.usernameIcon} value={"Nathanaeliano Michaelafidef Kiki Meme"} />
          <View
            style={{
              borderWidth: 0.5,
              borderColor: COLORS.lightGray,
              marginHorizontal: 20,
            }}
          />
          <ItemSetting icon={ICONS.nimIcon} value={dataMahasiswa.nim} />
        </View>

        <TouchableOpacity
          style={{
            width: "65%",
            flexDirection: "row",
            paddingHorizontal: 20,
            alignItems: "center",
            backgroundColor: COLORS.secondary,
            borderRadius: 10,
          }}
          onPress={() => {
            setShowNotif(!showNotif);
            console.log(showNotif);
          }}
        >
          <Image
            source={
              showNotif ? ICONS.notificationSwitch : ICONS.notificationSwitchOff
            }
            style={{ width: 30, height: 29 }}
          />
          <Text bold fontsize={SIZES.smallText} style={{ paddingLeft: 20 }}>
            Notifikasi
          </Text>
        </TouchableOpacity>
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
        onPress={() => {
          navigation.replace("Auth");
          dispatch(resetDataAuth());
          dispatch(resetDataPayment());
          dispatch(resetDataBeasiswa());
          dispatch(resetDataMahasiswa());
          dispatch(resetNilaiKHS());
          dispatch(resetNilaiTranskrip());
          dispatch(resetYearnSmt());
        }}
      >
        <Text bold fontsize={SIZES.mediumText} color={COLORS.white}>
          Keluar
        </Text>
      </TouchableOpacity>
    </View>
  );
}
