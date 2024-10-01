import {
  View,
  ImageBackground,
  StyleSheet,
  FlatList,
} from "react-native";
import IMAGES from "../../../assets/images";
import { COLORS, SIZES, STYLES } from "../../../styles";
import DATA from "../../../services/cache";
import DetailRiwayat from "../../../components/DetailRiwayat";
import Header from "../../../components/Header";

export default function Riwayat({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <Header onPress={() => navigation.navigate("Payment")} title={"Riwayat Pembayaran"}/>

      <ImageBackground source={IMAGES.bgDefault} style={[STYLES.container]}>
        <FlatList
          data={DATA.dataPembayaran.data}
          renderItem={({ item }) => (
            <DetailRiwayat data={item} />
          )}
          keyExtractor={(item, index) => index.toString()}
          style={{ width: SIZES.full }}
        />
      </ImageBackground>
      
    </View>
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
