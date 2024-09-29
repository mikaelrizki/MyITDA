import { Button, Image, ImageBackground, StyleSheet, View } from "react-native";
import IMAGES from "../../assets/images";
import Text from "../../components/Text";
import { COLORS, SIZES, STYLES } from "../../styles";
import { LOCAL_STYLE, formatRupiah, renderSemester, formatTanggalIndonesia } from "../../services/utils/formatter";
import RowRiwayat from "../../components/RowRiwayat";

export default function DetailRiwayat({ isDenda, data }) {
    const tagihan = parseInt(data.total_harga);
    const tahun = parseInt(data.kd_ta);
    const semester = parseInt(data.kd_smt);
    const denda = parseInt(data.total_denda);
    const totalTagihan = tagihan + denda;
    const tanggal = "2024-09-21"; 

    return (
      <View style={[LOCAL_STYLE.frame, {borderWidth: 1.2, borderColor: COLORS.primary,}]}>
        <RowRiwayat dataKey={"Semester"} dataValue={renderSemester(tahun, semester)} color={COLORS.black}/>
        {isDenda && (
          <View>
              <RowRiwayat dataKey={"Tagihan"} dataValue={formatRupiah(tagihan)} color={COLORS.danger}/>
              <RowRiwayat dataKey={"Denda"} dataValue={formatRupiah(denda)} color={COLORS.danger}/>
            </View>
        )}
        <View style={STYLE.row}>
          <Text bold fontsize={SIZES.smallText} color={COLORS.darkGray}>
            Total Tagihan
          </Text>
          {isDenda ? (
            <Text bold fontsize={SIZES.smallText} color={COLORS.black} right>
              {formatRupiah(totalTagihan)}
            </Text>
          ) : (
            <Text bold fontsize={SIZES.smallText} color={COLORS.danger} right>
              {formatRupiah(totalTagihan)}
            </Text>
          )}
        </View>
        <RowRiwayat dataKey={"Total Pembayaran"} dataValue={formatRupiah(totalTagihan)} color={COLORS.success}/>
        <View style={STYLE.row}>
          <Text bold fontsize={SIZES.smallText} color={COLORS.darkGray} style={{ marginTop: 30 }}>
            Tanggal Pembayaran
          </Text>
          <View style={[STYLE.frameTanggal, {marginTop: 15}]}>
            <Text bold center color={COLORS.white} fontsize={SIZES.smallText}>
                {formatTanggalIndonesia(tanggal)} {"\n"}
                10:49:15 {"\n"}
                BNI
            </Text>
          </View>
        </View>
      </View>
    );
}


const STYLE = StyleSheet.create({
    frameTanggal: {
      width: "45%",
      borderRadius: 10,
      alignSelf: "center",
      backgroundColor: COLORS.primary,
      marginLeft: "15%",
    },
    row: {
      flexDirection: "row", 
      justifyContent: "space-between", 
      marginTop: -10
    }
});