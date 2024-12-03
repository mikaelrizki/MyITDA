import { RefreshControl, View } from "react-native";
import ItemAnnouncement from "../../../components/ItemAnnouncement";
import { COLORS, SIZES } from "../../../styles";
import { FlatList } from "react-native-gesture-handler";
import { useState } from "react";
import adapter from "../../../services/adapter";
import { Alert } from "react-native";
import Text from "../../../components/Text";

export default function ListAnnouncementScreen({
  openDetailAnnouncement,
  setSelectedData,
  dataPengumuman,
  onRefresh,
  isRefreshing,
}) {
  const data = dataPengumuman;

  const formatDate = (tglMasuk, tglSelesai) => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "Mei",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Okt",
      "Nov",
      "Des",
    ];
    const tglMasukArr = tglMasuk.split("-");
    const tglSelesaiArr = tglSelesai.split("-");
    if (tglMasukArr[1] === tglSelesaiArr[1]) {
      return `${tglMasukArr[2]} - ${tglSelesaiArr[2]} ${
        months[parseInt(tglMasukArr[1]) - 1]
      } ${tglMasukArr[0]}`;
    } else {
      return `${tglMasukArr[2]} ${months[parseInt(tglMasukArr[1]) - 1]} - ${
        tglSelesaiArr[2]
      } ${months[parseInt(tglSelesaiArr[1]) - 1]} ${tglMasukArr[0]}`;
    }
  };

  return (
    <View
      style={{
        flex: 1,
        width: SIZES.full,
        paddingHorizontal: 20,
      }}
    >
      <FlatList
        data={data}
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} 
            colors={[COLORS.primary]}
          />
        }
        onScrollToTop={() => console.log("Scrolled to top")}
        renderItem={({ item }) => (
          <ItemAnnouncement
            announcementTitle={item.judul}
            announcementDate={formatDate(item.tgl_masuk, item.tgl_selesai)}
            announcementContent={item.isi}
            announcementFileName={item.nama_lampiran}
            onPress={() => {
              openDetailAnnouncement();
              setSelectedData(item);
            }}
            onAdmin
            onPressDelete={() => {
              Alert.alert(
                "Konfirmasi",
                "Apakah Anda yakin ingin menghapus pengumuman ini?",
                [
                  {
                    text: "Batal",
                    style: "cancel",
                  },
                  {
                    text: "Hapus",
                    onPress: async () => {
                      await adapter.deleteAnnouncement(item.id);
                      onRefresh();
                      Alert.alert(
                        "Pemberitahuan",
                        "Pengumuman berhasil dihapus"
                      );
                    },
                    style: "destructive",
                  },
                ],
                { cancelable: true }
              );

              console.log("Delete", item.id);
            }}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingBottom: 30 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
