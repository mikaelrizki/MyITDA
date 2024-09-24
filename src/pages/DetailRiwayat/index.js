import { Button, Image, ImageBackground, StyleSheet, View } from "react-native";
import IMAGES from "../../assets/images";
import Text from "../../components/Text";
import { COLORS, SIZES, STYLES } from "../../styles";
import { formatRupiah, renderSemester, formatTanggalIndonesia } from "../Payment";
import DATA from "../../services/cache";

export default function DetailRiwayat({ isDenda, data }) {
    const tagihan = parseInt(data.total_harga);
    const tahun = parseInt(data.kd_ta);
    const semester = parseInt(data.kd_smt);
    const denda = parseInt(data.total_denda);
    const totalTagihan = tagihan + denda;
    const tanggal = "2024-09-21"; 

    return (
      <View style={LOCAL_STYLE.frame}>
        <View style={LOCAL_STYLE.row}>
          <Text bold fontsize={SIZES.smallText} color={COLORS.darkGray}>
            Semester
          </Text>
          <Text bold fontsize={SIZES.smallText} color={COLORS.black} right>
            {renderSemester(tahun, semester)}
          </Text>
        </View>
        {isDenda && (
            <View>
                <View style={LOCAL_STYLE.row}>
                    <Text bold fontsize={SIZES.smallText} color={COLORS.darkGray}>
                        Tagihan
                    </Text>
                    <Text bold fontsize={SIZES.smallText} color={COLORS.danger} right>
                        {formatRupiah(tagihan)}
                    </Text>
                </View>
                <View style={LOCAL_STYLE.row}>
                    <Text bold fontsize={SIZES.smallText} color={COLORS.darkGray}>
                        Denda
                    </Text>
                    <Text bold fontsize={SIZES.smallText} color={COLORS.danger} right>
                        {formatRupiah(denda)}
                    </Text>
                </View>
            </View>
        )}
        <View style={LOCAL_STYLE.row}>
          <Text bold fontsize={SIZES.smallText} color={COLORS.darkGray}>
            Total Tagihan
          </Text>
          <Text bold fontsize={SIZES.smallText} color={COLORS.danger} right>
            {formatRupiah(totalTagihan)}
          </Text>
        </View>
        <View style={LOCAL_STYLE.row}>
          <Text bold fontsize={SIZES.smallText} color={COLORS.darkGray}>
            Total Pembayaran
          </Text>
          <Text bold fontsize={SIZES.smallText} color={COLORS.success} right>
            {formatRupiah(totalTagihan)}
          </Text>
        </View>
        <View style={LOCAL_STYLE.row}>
          <Text bold fontsize={SIZES.smallText} color={COLORS.darkGray} style={{ marginTop: 30 }}>
            Tanggal Pembayaran
          </Text>
          <View style={[LOCAL_STYLE.frameTanggal, {marginTop: 15}]}>
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


const LOCAL_STYLE = StyleSheet.create({
  frame: {
    width: 320,
    backgroundColor: COLORS.secondary,
    borderRadius: 20,
    padding: SIZES.padding2,
    marginTop: 20,
    marginBottom: 15,
    borderColor: COLORS.primary,
    borderWidth: 1,
  },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: -10,
    },
    frameTanggal: {
      width: 128,
      borderRadius: 10,
      alignSelf: "center",
      backgroundColor: COLORS.primary,
    },
  });