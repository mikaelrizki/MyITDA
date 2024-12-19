import { RefreshControl, ScrollView } from "react-native";
import ItemAnnouncement from "../../../components/ItemAnnouncement";
import { COLORS, SIZES } from "../../../styles";
import { FlatList } from "react-native-gesture-handler";
import adapter from "../../../services/adapter";
import { Alert } from "react-native";
import { formatDateAnnouncement } from "../../../services/utils/formatter";

export default function ListAnnouncementScreen({
  openDetailAnnouncement,
  setSelectedData,
  dataPengumuman,
  onRefresh,
  isRefreshing,
}) {
  const data = dataPengumuman;

  return (
    <ScrollView
      style={{
        flex: 1,
        width: SIZES.full,
        paddingHorizontal: 20,
      }}
      refreshControl={
        <RefreshControl
          refreshing={isRefreshing}
          onRefresh={onRefresh}
          colors={[COLORS.primary]}
        />
      }
    >
      <FlatList
        data={data}
        onScrollToTop={() => console.log("Scrolled to top")}
        renderItem={({ item }) => (
          <ItemAnnouncement
            announcementTitle={item.judul}
            announcementDate={formatDateAnnouncement(item.tgl_masuk, item.tgl_selesai)}
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
    </ScrollView>
  );
}
