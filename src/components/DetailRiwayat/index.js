import { Button, Image, ImageBackground, StyleSheet, View } from "react-native";
import { COLORS, SIZES, STYLES } from "../../styles";
import Text from "../Text";
import {
  formatRupiah,
  formatTanggalIndonesia,
  renderSemester,
} from "../../services/utils/formatter";
import RowRiwayat from "../RowRiwayat";
import DATA from "../../services/cache";

export default function DetailRiwayat({ isDenda, data }) {
  const nim = data.nim;
  const nama = data.nama;
  const kd_ta = parseInt(data.kd_ta);
  const kd_smt = parseInt(data.kd_smt);
  const total_harga = parseInt(data.total_harga);
  const total_denda = parseInt(data.total_denda);
  const total_tagihan = total_harga + total_denda;
  const tgl_akhir_bayar = data.tgl_akhir_bayar;
  const tgl_mulai = data.tgl_mulai;
  const tgl_bayar = data.tgl_bayar;
  const status_bayar = data.status_bayar;
  const metode_pembayaran = data.metode_pembayaran;
  const [tanggal, waktu] = tgl_bayar.split(" ");

  let beasiswa;
  let jenisBeasiswa;

  if (DATA.dataBeasiswa.data[0]) {
    beasiswa = true;
    jenisBeasiswa = DATA.dataBeasiswa.data[0].jenis_beasiswa;
  } else {
    beasiswa = false;
  }

  return (
    <View
      style={[STYLE.frame, { borderWidth: 1.2, borderColor: COLORS.primary }]}>
      <RowRiwayat
        dataKey={"Semester"}
        dataValue={renderSemester(kd_ta, kd_smt)}
        color={COLORS.black}
      />
      {(total_denda > 0 || beasiswa) && (
        <RowRiwayat
          dataKey={"Tagihan"}
          dataValue={formatRupiah(total_harga)}
          color={COLORS.danger}
        />
      )}
      {beasiswa && (
        <RowRiwayat
          dataKey={"Beasiswa"}
          dataValue={jenisBeasiswa}
          color={COLORS.success}
        />
      )}
      {total_denda > 0 && !beasiswa && (
        <RowRiwayat
          dataKey={"Denda"}
          dataValue={formatRupiah(total_denda)}
          color={COLORS.danger}
        />
      )}
      <RowRiwayat
        dataKey={"Total Tagihan"}
        dataValue={formatRupiah(total_tagihan)}
        color={total_denda > 0 || beasiswa ? COLORS.black : COLORS.danger}
      />
      {!beasiswa && (
        <RowRiwayat
          dataKey={"Total Pembayaran"}
          dataValue={formatRupiah(total_tagihan)}
          color={COLORS.success}
        />
      )}
      {!beasiswa && (
        <View style={STYLE.row}>
          <Text
            bold
            fontsize={SIZES.smallText}
            color={COLORS.darkGray}
            style={{ marginTop: 30 }}>
            Tanggal Pembayaran
          </Text>
          <View style={[STYLE.frameTanggal, { marginTop: "6%" }]}>
            <Text bold center color={COLORS.white} fontsize={SIZES.smallText}>
              {formatTanggalIndonesia(tanggal)} {"\n"}
              {waktu} {"\n"}
              {metode_pembayaran}
            </Text>
          </View>
        </View>
      )}
    </View>
  );
}

const STYLE = StyleSheet.create({
  frameTanggal: {
    width: "50%",
    borderRadius: 10,
    alignSelf: "center",
    backgroundColor: COLORS.primary,
    marginLeft: "10%",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: -10,
  },
  frame: {
    width: SIZES.full,
    backgroundColor: COLORS.secondary,
    borderRadius: 20,
    padding: SIZES.padding2,
    marginTop: 20,
    marginBottom: 15,
  },
});
