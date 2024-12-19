import { Alert, Dimensions, ImageBackground, View } from "react-native";
import Text from "../../components/Text";
import ListAnnouncementScreen from "./listAnnouncement";
import CreateAnnouncementScreen from "./createAnnouncement";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import { COLORS, SIZES } from "../../styles";
import IMAGES from "../../assets/images";
import { useEffect, useState } from "react";
import ThirdAppBar from "../../components/ThirdAppBar";
import DatePicker from "react-native-neat-date-picker";
import DetailAnnouncement from "../../components/DetailAnnouncement";
import adapter from "../../services/adapter";
import * as FileSystem from "expo-file-system";
import { formatDateAnnouncement } from "../../services/utils/formatter";

export default function MainAdminScreen({ navigation }) {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "listAnnouncement", title: "ListAnnouncement" },
    { key: "createAnnouncement", title: "CreateAnnouncement" },
  ]);

  const [dataPengumuman, setDataPengumuman] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const fetchData = async () => {
    try {
      setIsRefreshing(true);
      const dataPengumuman = await adapter.getDataPengumuman();
      const reverseData = dataPengumuman.reverse();
      setDataPengumuman(reverseData);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsRefreshing(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [dataSubmit, setDataSubmit] = useState({
    judul: "",
    tgl_masuk: "",
    tgl_selesai: "",
    isi: "",
    img: "",
    fileName: "",
    type: "",
  });

  const [showDetailAnnouncement, setShowDetailAnnouncement] = useState(false);
  const [selectedData, setSelectedData] = useState({});

  const openDetailAnnouncement = () => {
    setShowDetailAnnouncement(true);
  };

  const onClosedDetailAnnouncement = () => {
    setShowDetailAnnouncement(false);
  };

  const generateListAnnouncement = () => (
    <ListAnnouncementScreen
      openDetailAnnouncement={openDetailAnnouncement}
      setSelectedData={setSelectedData}
      dataPengumuman={dataPengumuman}
      onRefresh={fetchData}
      isRefreshing={isRefreshing}
    />
  );

  const [showDatePickerRange, setShowDatePickerRange] = useState(false);

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const openDatePickerRange = (data) => {
    setShowDatePickerRange(true);
    setDataSubmit({
      ...dataSubmit,
      judul: data.judul,
      isi: data.isi,
      img: data.img,
      fileName: data.fileName,
      type: data.type,
    });
  };

  const onCancel = () => {
    setShowDatePickerRange(false);
  };

  const onConfirm = (output) => {
    setShowDatePickerRange(false);
    const [yearStart, monthStart, dayStart] = output.startDateString.split("-");
    const [yearEnd, monthEnd, dayEnd] = output.endDateString.split("-");
    setStartDate(`${dayStart}/${monthStart}/${yearStart}`);
    setEndDate(`${dayEnd}/${monthEnd}/${yearEnd}`);
  };

  const generateCreateAnnouncement = () => (
    <CreateAnnouncementScreen
      navigation={navigation}
      openDatePickerRange={(data) => openDatePickerRange(data)}
      startDate={startDate}
      endDate={endDate}
      data={dataSubmit}
      handleSubmit={(data) => handleSubmit(data)}
    />
  );

  const handleSubmit = async (data) => {
    const [day, month, year] = data.tgl_masuk.split("/");
    data.tgl_masuk = `${year}-${month}-${day}`;

    const [dayEnd, monthEnd, yearEnd] = data.tgl_selesai.split("/");
    data.tgl_selesai = `${yearEnd}-${monthEnd}-${dayEnd}`;

    const fileUri = FileSystem.documentDirectory + data.fileName;
    console.log("INI FILE URI", fileUri);

    const response = await adapter.postPengumuman(
      data.judul,
      data.tgl_masuk,
      data.tgl_selesai,
      data.isi,
      data.img,
      data.type
    );
    console.log(response);

    if (response) {
      Alert.alert("Pemberitahuan", "Pengumuman berhasil ditambahkan");
      setStartDate("");
      setEndDate("");
      setDataSubmit({
        judul: "",
        tgl_masuk: "",
        tgl_selesai: "",
        isi: "",
        img: "",
        fileName: "",
        type: "",
      });
    } else {
      Alert.alert("Pemberitahuan", "Pengumuman gagal ditambahkan");
    }
  };

  function renderTabBar(props) {
    return (
      <TabBar
        {...props}
        style={{
          width: SIZES.width - 40,
          top: 15,
          borderRadius: 12,
          alignSelf: "center",
          backgroundColor: COLORS.primary,
          borderColor: COLORS.primary,
          borderWidth: 1,
          marginBottom: 25,
        }}
        indicatorStyle={{ backgroundColor: COLORS.transparent }}
        pressColor="transparent"
        tabStyle={{ padding: 0 }}
        renderLabel={({ route, focused }) => (
          <View
            style={{
              backgroundColor: !focused ? COLORS.primary : COLORS.white,
              height: 40,
              marginVertical: 5,
              marginRight: route.title === "CreateAnnouncement" ? 5 : 0,
              width: SIZES.width / 2.3,
              borderRadius: 8,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              bold
              color={!focused ? COLORS.white : COLORS.primary}
              fontsize={SIZES.mediumText}
              padVertical={0}
            >
              {route.title === "ListAnnouncement"
                ? "Daftar Pengumuman"
                : "Buat Pengumuman"}
            </Text>
          </View>
        )}
      />
    );
  }

  return (
    <ImageBackground source={IMAGES.bgDefault} style={{ flex: 1 }}>
      <ThirdAppBar navigation={navigation} />
      <Text
        bold
        color={COLORS.primary}
        fontsize={SIZES.h1}
        padVertical={5}
        style={{
          marginHorizontal: 30,
          marginTop: 20,
          marginBottom: 15,
        }}
      >
        Pengumuman
      </Text>
      <ListAnnouncementScreen
        openDetailAnnouncement={openDetailAnnouncement}
        setSelectedData={setSelectedData}
        dataPengumuman={dataPengumuman}
        onRefresh={fetchData}
        isRefreshing={isRefreshing}
      />
      {/* <TabView
        swipeEnabled={false}
        navigationState={{ index, routes }}
        renderScene={SceneMap({
          listAnnouncement: generateListAnnouncement,
          createAnnouncement: generateCreateAnnouncement,
        })}
        renderTabBar={renderTabBar}
        onIndexChange={(index) => setIndex(index)}
        style={{ flex: 1, width: SIZES.full }}
      />
      <DatePicker
        isVisible={showDatePickerRange}
        mode={"range"}
        onCancel={onCancel}
        onConfirm={onConfirm}
        colorOptions={{
          headerColor: COLORS.primary,
          dateTextColor: COLORS.black,
          weekDaysColor: COLORS.primary,
          selectedDateBackgroundColor: COLORS.primary,
          confirmButtonColor: COLORS.primary,
        }}
        modalStyles={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          padding: 20,
          margin: 0,
          position: "absolute",
          width: Dimensions.get("screen").width,
          height: Dimensions.get("screen").height,
        }}
      /> */}
      {selectedData.tgl_masuk && selectedData.tgl_selesai && (
        <DetailAnnouncement
          showModal={showDetailAnnouncement}
          onClosed={onClosedDetailAnnouncement}
          title={selectedData.judul}
          date={formatDateAnnouncement(
            selectedData.tgl_masuk,
            selectedData.tgl_selesai
          )}
          content={selectedData.isi}
          imageFile={`https://mahasiswa.itda.ac.id/assets/uploads/berita/${selectedData.nama_lampiran}`}
          fileName={selectedData.nama_lampiran}
        />
      )}
    </ImageBackground>
  );
}
