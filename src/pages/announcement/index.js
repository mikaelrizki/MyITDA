import { Image, ImageBackground, ScrollView, View } from "react-native";
import ItemAnnouncement from "../../components/ItemAnnouncement";
import IMAGES from "../../assets/images";
import { SIZES } from "../../styles";
import SecondAppBar from "../../components/SecondAppBar";
import { useState } from "react";
import ModalBox from "react-native-modalbox";
import Text from "../../components/Text";
import ICONS from "../../assets/icons";

export default function AnnouncementScreen({ navigation }) {
  const [showModal, setShowModal] = useState(false);
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
          gap: 15,
        }}
      >
        <ItemAnnouncement
          announcementTitle={"Informasi Registrasi"}
          announcementDate={"03 Mar - 04 Apr"}
          announcementContent={
            "Teman-teman silakan untuk melakukan registrasi Sem. Gasal 2024/2025. Registrasi kelas ini online, jadi hari i"
          }
          anouncementFileName={"Jadwal Registrasi"}
          onPress={() => navigation.navigate("DetailAnnouncement")}
        />
        <ItemAnnouncement
          announcementTitle={"Informasi Registrasi"}
          announcementDate={"03 Mar - 04 Apr"}
          announcementContent={
            "Teman-teman silakan untuk melakukan registrasi Sem. Gasal 2024/2025. Registrasi kelas ini online, jadi hari i"
          }
          anouncementFileName={"Jadwal Registrasi"}
          onPress={() => setShowModal(true)}
        />
        <ItemAnnouncement
          announcementTitle={"Informasi Registrasi"}
          announcementDate={"03 Mar - 04 Apr"}
          announcementContent={
            "Teman-teman silakan untuk melakukan registrasi Sem. Gasal 2024/2025. Registrasi kelas ini online, jadi hari i"
          }
          anouncementFileName={"Jadwal Registrasi"}
        />
      </View>
      <ModalBox
        swipeToClose={false}
        isOpen={showModal}
        onClosed={() => setShowModal(false)}
        position={"center"}
        animationDuration={0}
        entry={"bottom"}
        style={{ height: "70%", width: SIZES.width - 60, borderRadius: 35 }}
      >
        <ImageBackground
          resizeMode="content"
          source={IMAGES.bgDefault}
          imageStyle={{ borderRadius: 35 }}
          style={{
            flex: 1,
            width: "100%",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
            alignSelf: "center",
          }}
        >
          <View
            style={{
              width: "100%",
              height: ((SIZES.width - 60) / 318) * 184,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={IMAGES.imageDetailAnnouncement}
              style={{
                position: "absolute",
                borderTopLeftRadius: 35,
                borderTopRightRadius: 35,
                top: 0,
                left: 0,
                width: "100%",
                height: undefined,
                aspectRatio: 318 / 184,
              }}
              resizeMode="cover"
            />
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              paddingTop: 10,
              paddingHorizontal: 20,
            }}
          >
            <Text bold fontsize={16}>
              Informasi Registrasi Sem. Gasal 2024/2025
            </Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={ICONS.calendarIcon}
                style={{ width: 19, height: 19, marginRight: 10 }}
              />
              <Text medium fontsize={SIZES.smallText}>
                03 Mar - 04 Apr 2024
              </Text>
            </View>
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={{ flex: 1}}
            >
              <Text regular fontsize={SIZES.smallText}>
                Teman-teman silakan untuk melakukan registrasi Sem. Gasal
                2024/2025. Registrasi kelas ini online, jadi hari ini bisa
                diakses hingga pukul 23.59 WIB. Kelas yang ditawarkan sudah
                tidak ada tambahan, kecuali ada pemberitahuan dari Prodi. Bagi
                yang belum mendapatkan kelas, silakan untuk di cek secara
                berkala atau bisa diatur jadwalnya. Terima Kasih
              </Text>
            </ScrollView>
            <View
              style={{
                marginTop: 10,
                width: 125,
                height: 81,
                backgroundColor: "#F6F6F6",
                borderRadius: 5,
                borderColor: "#DBDBDB",
                borderWidth: 0.5,
                marginBottom: 30
              }}
            ></View>
          </View>
        </ImageBackground>
      </ModalBox>
    </ImageBackground>
  );
}
