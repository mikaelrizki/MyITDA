import { ImageBackground, View } from "react-native";
import IMAGES from "../../assets/images";
import { COLORS, SIZES, STYLES } from "../../styles";
import AppBar from "../../components/AppBar";
import ICONS from "../../assets/icons";
import { useState } from "react";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import Text from "../../components/Text";

export default function MainScreen({ navigation }) {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "home", title: "Home" },
    { key: "report", title: "Report" },
    { key: "payment", title: "Payment" },
  ]);

  const generateHome = () => (
    <View style={{ flex: 1}}>
      <Text>jhghjh</Text>
    </View>
  );

  function renderTabBar(props) {
    return (
      <TabBar
        {...props}
        style={{
          bottom: 20,
          width: 200,
          left: SIZES.width / 2 -120,
          position: "absolute",
          backgroundColor: COLORS.primary,
          borderRadius: SIZES.bigRadius,
        }}
        indicatorStyle={{ backgroundColor: COLORS.transparent }}
        renderLabel={({ route, focused, color }) => (
          <View
            style={{
              width: 36,
              height: 36,
              backgroundColor: focused ? COLORS.white : COLORS.primary,
              borderRadius: SIZES.bigRadius,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {route.title ==='Home' ? <Text
              bold
              color={focused ? COLORS.primary : COLORS.white}
              fontsize={20}
              padVertical={0}
            >
              A
            </Text> : <Text
              bold
              color={focused ? COLORS.primary : COLORS.white}
              fontsize={20}
              padVertical={0}
            >
              P
            </Text>}
          </View>
        )}
      />
    );
  }

  return (
    <ImageBackground source={IMAGES.bgDefault} style={STYLES.container}>
      <AppBar
        username={"Melisa Wijaya"}
        bgColorBell={COLORS.softBlue}
        bellIcon={ICONS.iconBellBlue}
        navigation={navigation}
      />
      <TabView
        navigationState={{ index, routes }}
        renderScene={SceneMap({
          home: generateHome,
          report: generateHome,
          payment: generateHome,
        })}
        renderTabBar={renderTabBar}
        onIndexChange={setIndex}
        style={{ flex: 1, width: SIZES.full }}
      />
    </ImageBackground>
  );
}
