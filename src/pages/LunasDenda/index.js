import { Button, Image, ImageBackground, StyleSheet, View } from "react-native";
import IMAGES from "../../assets/images";
import Text from "../../components/Text";
import { COLORS, SIZES, STYLES } from "../../styles";
import { LOCAL_STYLE, formatRupiah, renderSemester, formatTanggalIndonesia } from "../Payment";
import DATA from "../../services/cache";

export default function LunasDenda() {

    // data API nanti disini
    const jumlahArray = DATA.dataPembayaran.data.length - 1;
    const tagihan = parseInt(DATA.dataPembayaran.data[jumlahArray].total_harga);
    const tahun = parseInt(DATA.dataPembayaran.data[jumlahArray].kd_ta);
    const semester = parseInt(DATA.dataPembayaran.data[jumlahArray].kd_smt);
    const tanggal = "2024-09-21";
    const denda = parseInt(DATA.dataPembayaran.data[jumlahArray].total_denda);
    const totalTagihan = tagihan + denda;

    return (
      
      <View style={LOCAL_STYLE.frame}>
        <Image
          source={IMAGES.logoLunas}
          style={{ height: 100, alignSelf: "center", marginBottom: 30, }}
          resizeMode="contain"
        />
        <View style={LOCAL_STYLE.row}>
            <Text
            bold
            fontsize={SIZES.mediumText}
            color={COLORS.black}
            >
            Tagihan
            </Text>
            <Text
            bold
            fontsize={SIZES.mediumText}
            color={COLORS.black}
            right
            >
            {formatRupiah(tagihan)}
            </Text>
        </View>
        <View style={LOCAL_STYLE.row}>
            <Text
            bold
            fontsize={SIZES.mediumText}
            color={COLORS.danger}
            >
            Denda
            </Text>
            <Text
            bold
            fontsize={SIZES.mediumText}
            color={COLORS.danger}
            right
            >
            {formatRupiah(denda)}
            </Text>
        </View>
        <View style={LOCAL_STYLE.row}>
          <Text
            bold
            fontsize={SIZES.mediumText}
            color={COLORS.black}
          >
            Total Tagihan
          </Text>
          <Text
            bold
            fontsize={SIZES.mediumText}
            color={COLORS.black}
            right
          >
            {formatRupiah(totalTagihan)}
          </Text>
        </View>
        <View style={LOCAL_STYLE.row}>
          <Text
            bold
            fontsize={SIZES.mediumText}
            color={COLORS.black}
          >
            Semester
          </Text>
          <Text
            bold
            fontsize={SIZES.mediumText}
            color={COLORS.black}
            right
          >
            {renderSemester(tahun, semester)}
          </Text>
        </View>
        <Text bold center color={COLORS.black}>Tangal Pembayaran</Text>
        <View style={[LOCAL_STYLE.frameTanggal, {backgroundColor: COLORS.success}]}>
            <Text bold center color={COLORS.white}>
                {formatTanggalIndonesia(tanggal)} {"\n"}
                10:49:15 {"\n"}
                BNI
            </Text>
        </View>
      </View>
  );
}