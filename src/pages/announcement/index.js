import { FlatList, ImageBackground } from "react-native";
import ItemAnnouncement from "../../components/ItemAnnouncement";
import IMAGES from "../../assets/images";
import SecondAppBar from "../../components/SecondAppBar";
import { useEffect, useState } from "react";
import DetailAnnouncement from "../../components/DetailAnnouncement";
import adapter from "../../services/adapter";

export default function AnnouncementScreen({ navigation }) {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState([]);
  const [selectedData, setSelectedData] = useState({});

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

  const onClosed = () => {
    setShowModal(false);
  };
  return (
    <ImageBackground source={IMAGES.bgDefault} style={{ flex: 1 }}>
      <SecondAppBar label={"Pengumuman"} navigation={navigation} />
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <ItemAnnouncement
            announcementTitle={item.judul}
            announcementDate={formatDate(item.tgl_masuk, item.tgl_selesai)}
            announcementContent={item.isi}
            announcementFileName={item.nama_lampiran}
            announcementFileType={item.nama_lampiran.split('.').pop()}
            onPress={() => {
              setShowModal(true);
              setSelectedData(item);
            }}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        style={{ flex: 1, paddingHorizontal: 20 }}
        contentContainerStyle={{ paddingBottom: 30 }}
        showsVerticalScrollIndicator={false}
      />
      <DetailAnnouncement
        showModal={showModal}
        onClosed={onClosed}
        title={selectedData.judul}
        date={selectedData.tgl_masuk}
        content={selectedData.isi}
        imageFile={`https://mahasiswa.itda.ac.id/assets/uploads/berita/${selectedData.nama_lampiran}`}
        fileName={"coba-coba.jpg"}
      />
    </ImageBackground>
  );
}
