import { Button, Image, ImageBackground, StyleSheet, View } from "react-native";
import IMAGES from "../../assets/images";
import Text from "../../components/Text";
import { COLORS, SIZES, STYLES } from "../../styles";
import { LOCAL_STYLE, formatRupiah, renderSemester, formatTanggalIndonesia } from "../../services/utils/formatter";
import DATA from "../../services/cache";
import RowPayment from "../../components/RowPayment";

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
        <RowPayment dataKey="Tagihan" dataValue={formatRupiah(tagihan)} color={COLORS.black}/>
        <RowPayment dataKey="Denda" dataValue={formatRupiah(denda)} color={COLORS.danger}/>
        <RowPayment dataKey="Total Tagihan" dataValue={formatRupiah(totalTagihan)} color={COLORS.black}/>
        <RowPayment dataKey="Semester" dataValue={renderSemester(tahun, semester)} color={COLORS.black}/>
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