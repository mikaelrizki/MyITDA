import { ImageBackground, ScrollView } from "react-native";
import ItemAnnouncement from "../../components/ItemAnnouncement";
import IMAGES from "../../assets/images";
import { SIZES } from "../../styles";
import SecondAppBar from "../../components/SecondAppBar";
import { useState } from "react";
import DetailAnnouncement from "../../components/DetailAnnouncement";

export default function AnnouncementScreen({ navigation }) {
  const [showModal, setShowModal] = useState(false);

  const onClosed = () => {
    setShowModal(false);
  };
  return (
    <ImageBackground source={IMAGES.bgDefault} style={{ flex: 1 }}>
      <SecondAppBar label={"Pengumuman"} navigation={navigation} />
      <ScrollView
        style={{
          flex: 1,
          width: SIZES.full,
          marginBottom: 50,
          paddingHorizontal: 20,
        }}
        showsVerticalScrollIndicator={false}
      >
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
        <ItemAnnouncement
          announcementTitle={"Informasi Registrasi"}
          announcementDate={"03 Mar - 04 Apr"}
          announcementContent={
            "Teman-teman silakan untuk melakukan registrasi Sem. Gasal 2024/2025. Registrasi kelas ini online, jadi hari i"
          }
          anouncementFileName={"Jadwal Registrasi"}
        />
        <ItemAnnouncement
          lastList={true}
          announcementTitle={"Informasi Registrasi"}
          announcementDate={"03 Mar - 04 Apr"}
          announcementContent={
            "Teman-teman silakan untuk melakukan registrasi Sem. Gasal 2024/2025. Registrasi kelas ini online, jadi hari i"
          }
          anouncementFileName={"Jadwal Registrasi"}
        />
      </ScrollView>
      <DetailAnnouncement
        showModal={showModal}
        onClosed={onClosed}
        title={"Informatika Registrasi Sem.Gasal 2024/2025"}
        date={"13 Mar - 14 Apr 2024"}
        content={
          "Teman-teman silakan untuk melakukan registrasi Sem. Gasal 2024/2025. Registrasi kelas ini online, jadi hari ini bisa diakses hingga pukul 23.59 WIB. Kelas yang ditawarkan sudah tidak ada tambahan, kecuali ada pemberitahuan dari Prodi. Bagi yang belum mendapatkan kelas, silakan untuk di cek secara berkala atau bisa diatur jadwalnya. Terima Kasih"
        }
        imageFile={"file:///data/user/0/host.exp.exponent/cache/DocumentPicker/731d3d08-ac79-4bd8-bfd5-da4bfe209adf.jpg"}
        fileName={"coba-coba.jpg"}
      />
    </ImageBackground>
  );
}
