import { ImageBackground, View, Image } from "react-native";
import AppBar from "../../components/AppBar";
import IMAGES from "../../assets/images";
import { COLORS, SHADOWS, SIZES, STYLES } from "../../styles";
import ICONS from "../../assets/icons";
import Text from "../../components/Text";
import BottomNavbar from "../../components/BottomNavbar";

export default function AnnouncementScreen({ navigation }) {
  return (
    <ImageBackground source={IMAGES.bgDefault} style={STYLES.container}>
      <View
        style={{
          flex: 1,
          width: SIZES.full,
          flexdirection: "column",
          alignItems: "center",
        }}
      >
        <AppBar
          username={"Melisa Wijaya"}
          bgColorBell={COLORS.primary}
          bellIcon={ICONS.iconBellWhite}
          navigation={navigation}
        />

        <View
          style={[
            SHADOWS.shadowBox,
            {
              top: 15,
              width: "95%",
              height: 130,
              paddingTop: 16,
              padding: 18,
              shadowColor: "#9EB9CB",
              borderRadius: 10,
              backgroundColor: "white",
            },
          ]}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "flex-end",
              width: SIZES.full,
            }}
          >
            <Text semiBold fontsize={SIZES.smallText} padVertical={0}>
              Informasi Registrasi
            </Text>
            <Text medium fontsize={SIZES.extraSmallText} padVertical={0}>
              03 Mar - 04 Apr
            </Text>
          </View>
          <Text
            medium
            fontsize={SIZES.extraSmallText}
            padVertical={12}
            style={{ color: COLORS.lightBlue }}
          >
            Teman-teman silakan untuk melakukan registrasi Sem. Gasal 2024/2025.
            Registrasi kelas in{"... "}
            <Text semiBold underline fontsize={SIZES.extraSmallText}>
              Read More
            </Text>
          </Text>

          <View
          style={{flexDirection: "row", width: "47%", height: 28, borderColor: COLORS.lightBlue, borderWidth: 0.5, alignItems: "center", borderRadius: 50, paddingLeft: 10}}>
            <Image
            source={ICONS.iconPDF}
            resizeMode="content"
            style={{width: 15, height: 19, marginRight: 8}}/>
            <Text medium fontsize={SIZES.extraSmallText} padVertical={0} style={{ color: COLORS.lightBlue }}>Jadwal registrasi{'...'}</Text>
          </View>
        </View>
      </View>
      <BottomNavbar navigation={navigation}/>
    </ImageBackground>
  );
}
