import { View, Button, ImageBackground, StyleSheet, TouchableOpacity, Image, FlatList } from "react-native";
import Text from "../../components/Text";
import { COLORS, SIZES, STYLES } from "../../styles";
import IMAGES from "../../assets/images";
import DetailRiwayat from "../DetailRiwayat";
import DATA from "../../services/cache";
import DetailBeasiswa from "../DetailBeasiswa";

export default function Riwayat({ navigation }) {
  let beasiswa;

  // Tentukan apakah ada beasiswa
  if (DATA.dataBeasiswa.data[0]) {
    beasiswa = true;
  } else {
    beasiswa = false;
  }

  // Function untuk merender item
  const renderItem = ({ item }) => {
    const denda = parseInt(item.total_denda);

    if (item.status_bayar === "B") {
      return null;
    }

    return beasiswa ? (
      <DetailBeasiswa 
        isDenda={denda > 0} 
        data={item}
      />
    ) : (
      <DetailRiwayat 
        isDenda={denda > 0} 
        data={item}
      />
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={LOCAL_STYLE.header}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate("Payment")}
        >
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
          renderItem={renderItem}
          keyExtractor={(a, index) => index.toString()}
          style={{ width: SIZES.full }}
        />
      </ImageBackground>
    </View>
  );
}

const LOCAL_STYLE = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: SIZES.padding2,
    backgroundColor: COLORS.primary,
    width: SIZES.full,
    height: "12%",
  }
});
