import { ImageBackground, View } from "react-native";
import Text from "../../components/Text";
import ListAnnouncementScreen from "./listAnnouncement";
import CreateAnnouncementScreen from "./createAnnouncement";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import { COLORS, SIZES } from "../../styles";
import IMAGES from "../../assets/images";
import { useState } from "react";
import ThirdAppBar from "../../components/ThirdAppBar";

export default function MainAdminScreen({ navigation }) {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "listAnnouncement", title: "ListAnnouncement" },
    { key: "createAnnouncement", title: "CreateAnnouncement" },
  ]);

  const generateListAnnouncement = () => (
    <ListAnnouncementScreen navigation={navigation} />
  );
  const generateCreateAnnouncement = () => (
    <CreateAnnouncementScreen navigation={navigation} />
  );

  function renderTabBar(props) {
    return (
      <TabBar
        {...props}
        style={{
          width: SIZES.width - 40,
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
        renderLabel={({ route, focused }) => (
          <View
            style={{
              backgroundColor: focused ? COLORS.primary : COLORS.white,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              bold
              color={focused ? COLORS.white : COLORS.primary}
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
      <ThirdAppBar
        navigation={navigation}
      />
      <TabView
        navigationState={{ index, routes }}
        renderScene={SceneMap({
          listAnnouncement: generateListAnnouncement,
          createAnnouncement: generateCreateAnnouncement,
        })}
        renderTabBar={renderTabBar}
        onIndexChange={setIndex}
        style={{ flex: 1, width: SIZES.full }}
      />
    </ImageBackground>
  );
}
