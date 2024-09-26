import { Button, Image, ImageBackground, StyleSheet, View } from "react-native";
import IMAGES from "../../assets/images";
import Text from "../../components/Text";
import { COLORS, SIZES, STYLES } from "../../styles";
import { LOCAL_STYLE, formatRupiah, renderSemester, formatTanggalIndonesia } from "../../services/utils/formatter";
import DATA from "../../services/cache";
import SectionTitleBig from "../../components/SectionTitleBig";
import RowPayment from "../../components/RowPayment";

export default function Beasiswa() {

    // data API nanti disini
    const jumlahArray = DATA.dataPembayaran.data.length - 1;
    const tagihan = parseInt(DATA.dataPembayaran.data[jumlahArray].total_harga);
    const tahun = parseInt(DATA.dataPembayaran.data[jumlahArray].kd_ta);
    const semester = parseInt(DATA.dataPembayaran.data[jumlahArray].kd_smt);
    const tanggal = "2024-09-21";
    let beasiswa;
    let jenisBeasiswa = DATA.dataBeasiswa.data[0].jenis_beasiswa;
    const denda = parseInt(DATA.dataPembayaran.data[jumlahArray].total_denda);
    const totalTagihan = tagihan + denda;
    const status = DATA.dataPembayaran.data[jumlahArray].status_bayar;
    const isMasaPembayaran = true;

    if (DATA.dataBeasiswa.data[0]) {
      jenisBeasiswa = DATA.dataBeasiswa.data[0].jenis_beasiswa;
    }

    return (
      
      <View style={LOCAL_STYLE.frame}>
        <Image
          source={IMAGES.logoLunas}
          style={{ height: 100, alignSelf: "center", marginBottom: 30, }}
          resizeMode="contain"
        />
        <RowPayment dataKey="Tagihan" dataValue={formatRupiah(tagihan)} color={COLORS.black}/>
        <RowPayment dataKey="Beasiswa" dataValue={jenisBeasiswa} color={COLORS.success}/>
        <RowPayment dataKey="Total Tagihan" dataValue={formatRupiah(0)} color={COLORS.black}/>
        <RowPayment dataKey="Semester" dataValue={renderSemester(tahun, semester)} color={COLORS.black}/>
      </View>
  );
}