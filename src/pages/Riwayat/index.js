import { View, Button, ImageBackground, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";
import Text from "../../components/Text";
import { COLORS, SIZES, STYLES } from "../../styles";
import IMAGES from "../../assets/images";
import DetailRiwayat from "../DetailRiwayat";
import DATA from "../../services/cache";
import DetailBeasiswa from "../DetailBeasiswa";

export default function Riwayat({ navigation }) {
  // data API nanti disini
  let beasiswa;
  let renderDetails;

  if (DATA.dataBeasiswa.data[0]) {
    beasiswa = true;
  }else{
      beasiswa = false;
  }

  // Array untuk menyimpan render detail
  if (beasiswa) {
    renderDetails = DATA.dataPembayaran.data.map((item, index) => {
      const denda = parseInt(item.total_denda);

      if (item.status_bayar === "B") {
        return null;
      }

      return (
        <DetailBeasiswa 
          key={index} 
          isDenda={denda > 0} 
          data={item}
        />
      );
    });
  } else {
    renderDetails = DATA.dataPembayaran.data.map((item, index) => {
      const denda = parseInt(item.total_denda);

      if (item.status_bayar === "B") {
        return null;
      }
      
      return (
        <DetailRiwayat 
          key={index} 
          isDenda={denda > 0} 
          data={item}
        />
      );
    });
  }

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
        <Text color={"white"} bold fontsize={23} style={{ marginRight: 40 }}>
          Riwayat Pembayaran
        </Text>
      </View>

      <ImageBackground source={IMAGES.bgDefault} style={[STYLES.container]}>
        <ScrollView>
          {renderDetails}
        </ScrollView>
        
        <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
        <Button title="Go to Report" onPress={() => navigation.navigate("Report")} />
        <Button title="Go to Payment" onPress={() => navigation.navigate("Payment")} />
      </ImageBackground>
    </View>
  );
}

const LOCAL_STYLE = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: SIZES.padding2,
    backgroundColor: COLORS.primary,
    width: SIZES.full,
    height: "12%",
  }
});
