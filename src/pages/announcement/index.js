import { ImageBackground, View } from "react-native";
import ItemAnnouncement from "../../components/ItemAnnouncement";
import IMAGES from "../../assets/images";
import { SIZES } from "../../styles";
import SecondAppBar from "../../components/SecondAppBar";

export default function AnnouncementScreen({ navigation }) {
  return (
    <ImageBackground source={IMAGES.bgDefault} style={{ flex: 1 }}>
      <SecondAppBar label={"Pengumuman"} navigation={navigation} />
      <View
        style={{
          flex: 1,
          width: SIZES.full,
          flexdirection: "column",
          alignItems: "center",
          paddingHorizontal: 20,
        }}
      >
        <ItemAnnouncement
          announcementTitle={"Informasi Registrasi"}
          announcementDate={"03 Mar - 04 Apr"}
          announcementContent={
            "Teman-teman silakan untuk melakukan registrasi Sem. Gasal 2024/2025. Registrasi kelas ini online, jadi hari i"
          }
          anouncementFileName={"Jadwal Registrasi"}
        />
      </View>
    </ImageBackground>
  );
}
