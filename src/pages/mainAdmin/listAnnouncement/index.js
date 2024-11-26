import { Image, ImageBackground, ScrollView, View } from "react-native";
import ItemAnnouncement from "../../../components/ItemAnnouncement";
import { SIZES } from "../../../styles";

export default function ListAnnouncementScreen({ openDetailAnnouncement }) {
  return (
    <View
      style={{
        flex: 1,
        width: SIZES.full,
        paddingHorizontal: 20,
      }}
    >
      <ScrollView
        style={{ marginBottom: 50 }}
        showsVerticalScrollIndicator={false}
      >
        <ItemAnnouncement
          announcementTitle={"Informasi Registrasi"}
          announcementDate={"03 Mar - 04 Apr"}
          announcementContent={
            "Teman-teman silakan untuk melakukan registrasi Sem. Gasal 2024/2025. Registrasi kelas ini online, jadi hari i"
          }
          anouncementFileName={"Jadwal Registrasi"}
          onPress={openDetailAnnouncement}
        />
        <ItemAnnouncement
          announcementTitle={"Informasi Registrasi"}
          announcementDate={"03 Mar - 04 Apr"}
          announcementContent={
            "Teman-teman silakan untuk melakukan registrasi Sem. Gasal 2024/2025. Registrasi kelas ini online, jadi hari i"
          }
          anouncementFileName={"Jadwal Registrasi"}
          onPress={openDetailAnnouncement}
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
    </View>
  );
}
