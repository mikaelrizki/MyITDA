import {
  View,
  Button,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import Text from "../../../components/Text";
import IMAGES from "../../../assets/images";
import { COLORS, SIZES, STYLES } from "../../../styles";
import DATA from "../../../services/cache";
import DetailRiwayat from "../../../components/DetailRiwayat";

export default function Riwayat({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <View style={LOCAL_STYLE.header}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate("Payment")}>
          <Image
            source={IMAGES.logoKembali}
            style={{ width: 35, height: 35 }}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text color={"white"} bold fontsize={23} style={{ marginLeft: 15 }}>
          Riwayat Pembayaran
        </Text>
      </View>

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
