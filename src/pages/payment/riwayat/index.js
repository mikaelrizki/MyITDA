import { View, ImageBackground, StyleSheet, FlatList } from "react-native";
import IMAGES from "../../../assets/images";
import { COLORS, SIZES, STYLES } from "../../../styles";
import DATA from "../../../services/cache";
import DetailRiwayat from "../../../components/DetailRiwayat";
import SecondAppBar from "../../../components/SecondAppBar";

export default function Riwayat({ navigation }) {
  return (
    <ImageBackground
      source={IMAGES.bgDefault}
      style={{ flex: 1}}>
      <SecondAppBar label={"Riwayat Pembayaran"} navigation={navigation} />
      <View
        style={{
          flex: 1,
          width: SIZES.full,
          flexdirection: "column",
          alignItems: "center",
          paddingHorizontal: SIZES.padding2,
        }}>
        <FlatList
          data={DATA.dataPembayaran.data}
          renderItem={({ item }) => <DetailRiwayat data={item} />}
          keyExtractor={(item, index) => index.toString()}
          style={{ width: SIZES.full }}
        />
      </View>
    </ImageBackground>
  );
}

const LOCAL_STYLE = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: SIZES.padding2,
    backgroundColor: COLORS.primary,
    width: SIZES.full,
    height: "12%",
  },
});
