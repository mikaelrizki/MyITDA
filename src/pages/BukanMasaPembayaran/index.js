import { Button, Image, ImageBackground, StyleSheet, View } from "react-native";
import IMAGES from "../../assets/images";
import Text from "../../components/Text";
import { COLORS, SIZES, STYLES } from "../../styles";
import { LOCAL_STYLE, formatRupiah, renderSemester, formatTanggalIndonesia } from "../Payment";
import DATA from "../../services/cache";

export default function BukanMasaPembayaran() {

    return (
      
      <View style={LOCAL_STYLE.frame}>
        <Image
          source={IMAGES.logoTidakAda}
          style={{ height: 100, alignSelf: "center", marginBottom: 30, }}
          resizeMode="contain"
        />
        <Text
            bold
            center
            fontsize={SIZES.mediumText}
            color={COLORS.black}
          >
            Anda Tidak Memiliki Tagihan {"\n"} Di Semester Ini
          </Text>
      </View>
  );
}