import { ImageBackground, View } from "react-native";
import IMAGES from "../../assets/images";
import { COLORS, SIZES } from "../../styles";
import AppBar from "../../components/AppBar";
import ICONS from "../../assets/icons";
import { useState } from "react";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import Text from "../../components/Text";
import Home from "../home";
import Payment from "../payment";
import ReportScreen from "../report";

export default function MainScreen({ navigation, route }) {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "home", title: "Home" },
    { key: "report", title: "Report" },
    { key: "payment", title: "Payment" },
  ]);

  const { dataMhs } = route.params;

  const generateHome = () => <Home data={dataMhs}/>;

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
        renderLabel={({ route, focused, color }) => (
          <View
            style={{
              width: 35,
              height: 35,
              marginLeft: route.title === "Home" ? 28 : 0,
              marginRight: route.title === "Payment" ? 28 : 0,
              backgroundColor: focused ? COLORS.white : COLORS.primary,
              borderRadius: SIZES.bigRadius,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              bold
              color={focused ? COLORS.primary : COLORS.white}
              fontsize={SIZES.LargeText}
              padVertical={0}
            >
              A
            </Text>
          </View>
        )}
      />
    );
  }

  return (
    <ImageBackground source={IMAGES.bgDefault} style={{ flex: 1 }}>
      <AppBar
        username={dataMhs[0].nama}
        bgColorBell={COLORS.softBlue}
        bellIcon={ICONS.iconBellBlue}
        navigation={navigation}
        profilePicture={"https://mahasiswa.itda.ac.id/perpus/img/" + dataMhs[0].path_foto}
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
