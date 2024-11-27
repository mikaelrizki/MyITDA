import { ImageBackground } from "react-native";
import IMAGES from "../../assets/images";
import { COLORS, SIZES } from "../../styles";
import AppBar from "../../components/AppBar";
import ICONS from "../../assets/icons";
import { useState } from "react";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import Home from "../home";
import Payment from "../payment";
import ReportScreen from "../report";
import { useSelector } from "react-redux";
import HomeMenu from "../../assets/icons/homeMenu";
import ReportMenu from "../../assets/icons/reportMenu";
import PaymentMenu from "../../assets/icons/paymentMenu";

export default function MainScreen({ navigation, route }) {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "home", title: "Home" },
    { key: "report", title: "Report" },
    { key: "payment", title: "Payment" },
  ]);

  const dataMhs = useSelector(
    (state) => state.dataMahasiswa.dataMahasiswaSelected[0]
  );

  const nama = dataMhs !== undefined ? dataMhs.nama : null;
  const jenisKelamin = dataMhs !== undefined ? dataMhs.jenis_kelamin : null;
  const profilePic =
    dataMhs !== undefined
      ? "https://mahasiswa.itda.ac.id/perpus/img/" + dataMhs.path_foto
      : null;

  const generateHome = () => <Home />;

  const generateReport = () => <ReportScreen navigation={navigation} />;

  const generatePayment = () => <Payment navigation={navigation} />;

  function renderTabBar(props) {
    return (
      <TabBar
        {...props}
        style={{
          bottom: 30,
          width: 280,
          paddingVertical: 4,
          left: SIZES.width / 2 - 140,
          position: "absolute",
          backgroundColor: COLORS.primary,
          borderRadius: SIZES.bigRadius,
        }}
        indicatorStyle={{ backgroundColor: COLORS.transparent }}
        pressColor="transparent"
        renderLabel={({ route, focused }) =>
          route.title === "Home" ? <HomeMenu
            circleColor={focused ? COLORS.white : COLORS.primary}
            pathColor={focused ? COLORS.primary : COLORS.white}
          /> : route.title === "Report" ? <ReportMenu 
            circleColor={focused ? COLORS.white : COLORS.primary}
            pathColor={focused ? COLORS.primary : COLORS.white}
          /> : <PaymentMenu 
            circleColor={focused ? COLORS.white : COLORS.primary}
            pathColor={focused ? COLORS.primary : COLORS.white}
          />
        }
      />
    );
  }

  return (
    <ImageBackground source={IMAGES.bgDefault} style={{ flex: 1 }}>
      <AppBar
        username={nama}
        bgColorBell={COLORS.softBlue}
        bellIcon={ICONS.iconBellBlue}
        navigation={navigation}
        profilePicture={profilePic}
        jenisKelamin={jenisKelamin}
      />
      <TabView
        navigationState={{ index, routes }}
        renderScene={SceneMap({
          home: generateHome,
          report: generateReport,
          payment: generatePayment,
        })}
        renderTabBar={renderTabBar}
        onIndexChange={setIndex}
        style={{ flex: 1, width: SIZES.full }}
      />
    </ImageBackground>
  );
}