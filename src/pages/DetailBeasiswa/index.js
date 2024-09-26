import { Button, Image, ImageBackground, StyleSheet, View } from "react-native";
import IMAGES from "../../assets/images";
import Text from "../../components/Text";
import { COLORS, SIZES, STYLES } from "../../styles";
import { LOCAL_STYLE, formatRupiah, renderSemester, formatTanggalIndonesia } from "../../services/utils/formatter";
import DATA from "../../services/cache";
import RowRiwayat from "../../components/RowRiwayat";

export default function DetailBeasiswa({ isDenda, data }) {
  const tagihan = parseInt(data.total_harga);
  const tahun = parseInt(data.kd_ta);
  const semester = parseInt(data.kd_smt);
  const denda = parseInt(data.total_denda);
  const totalTagihan = tagihan + denda;
  const tanggal = "2024-09-21";
  let jenisBeasiswa;

  if (DATA.dataBeasiswa.data[0]) {
    jenisBeasiswa = DATA.dataBeasiswa.data[0].jenis_beasiswa;
  }

  return (
    <View style={[LOCAL_STYLE.frame, {borderWidth: 1.2, borderColor: COLORS.primary,}]}>
      <RowRiwayat dataKey={"Semester"} dataValue={renderSemester(tahun, semester)} color={COLORS.black}/>
      <RowRiwayat dataKey={"Tagihan"} dataValue={formatRupiah(tagihan)} color={COLORS.danger}/>
      <RowRiwayat dataKey={"Beasiswa"} dataValue={jenisBeasiswa} color={COLORS.success}/>
      <RowRiwayat dataKey={"Total Tagihan"} dataValue={formatRupiah(0)} color={COLORS.black}/>
    </View>
  );
}