import { Dimensions, ImageBackground, View } from "react-native";
import Text from "../../components/Text";
import ListAnnouncementScreen from "./listAnnouncement";
import CreateAnnouncementScreen from "./createAnnouncement";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import { COLORS, SIZES } from "../../styles";
import IMAGES from "../../assets/images";
import { useState } from "react";
import ThirdAppBar from "../../components/ThirdAppBar";
import DatePicker from "react-native-neat-date-picker";
import DetailAnnouncement from "../../components/DetailAnnouncement";

export default function MainAdminScreen({ navigation }) {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "listAnnouncement", title: "ListAnnouncement" },
    { key: "createAnnouncement", title: "CreateAnnouncement" },
  ]);

  const [showDetailAnnouncement, setShowDetailAnnouncement] = useState(false);

  const openDetailAnnouncement = () => {
    setShowDetailAnnouncement(true);
  };

  const onClosedDetailAnnouncement = () => {
    setShowDetailAnnouncement(false);
  };

  const generateListAnnouncement = () => (
    <ListAnnouncementScreen
      openDetailAnnouncement={openDetailAnnouncement}
    />
  );

  const [showDatePickerRange, setShowDatePickerRange] = useState(false);

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const openDatePickerRange = () => {
    setShowDatePickerRange(true);
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

  const handleDataDate = (index) => {
    setIndex(index);
    if (index == 0) {
      setStartDate("");
      setEndDate("");
    }
  };
  const generateCreateAnnouncement = () => (
    <CreateAnnouncementScreen
      navigation={navigation}
      openDatePickerRange={openDatePickerRange}
      startDate={startDate}
      endDate={endDate}
    />
  );

  function renderTabBar(props) {
    return (
      <TabBar
        {...props}
        style={{
          width: SIZES.width - 40,
          height: 50,
          top: 15,
          borderRadius: 10,
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
              width: SIZES.width / 2.4,
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
      <TabView
        navigationState={{ index, routes }}
        renderScene={SceneMap({
          listAnnouncement: generateListAnnouncement,
          createAnnouncement: generateCreateAnnouncement,
        })}
        renderTabBar={renderTabBar}
        onIndexChange={handleDataDate}
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
      />
      <DetailAnnouncement
        showModal={showDetailAnnouncement}
        onClosed={onClosedDetailAnnouncement}
        title={"Informatika Registrasi Sem.Gasal 2024/2025"}
        date={"13 Mar - 14 Apr 2024"}
        content={
          "Teman-teman silakan untuk melakukan registrasi Sem. Gasal 2024/2025. Registrasi kelas ini online, jadi hari ini bisa diakses hingga pukul 23.59 WIB. Kelas yang ditawarkan sudah tidak ada tambahan, kecuali ada pemberitahuan dari Prodi. Bagi yang belum mendapatkan kelas, silakan untuk di cek secara berkala atau bisa diatur jadwalnya. Terima Kasih"
        }
        imageFile={
          "file:///data/user/0/host.exp.exponent/cache/DocumentPicker/731d3d08-ac79-4bd8-bfd5-da4bfe209adf.jpg"
        }
        fileName={"coba-coba.jpg"}
      />
    </ImageBackground>
  );
}
