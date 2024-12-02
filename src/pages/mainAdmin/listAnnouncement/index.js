import { Image, ImageBackground, ScrollView, View } from "react-native";
import ItemAnnouncement from "../../../components/ItemAnnouncement";
import { SIZES } from "../../../styles";
import { FlatList } from "react-native-gesture-handler";
import { useEffect, useState } from "react";
import adapter from "../../../services/adapter";

export default function ListAnnouncementScreen({ openDetailAnnouncement, setSelectedData }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const dataPengumuman = await adapter.getDataPengumuman();
      const reverseData = dataPengumuman.reverse();
      setData(reverseData);
      console.log(dataPengumuman);
    };
    fetchData();
  }, []);

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
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingBottom: 30 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
