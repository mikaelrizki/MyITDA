import { StyleSheet, View } from "react-native";
import { COLORS, SIZES } from "../../styles";
import Text from "../Text";
import {
  formatRupiah,
  formatTanggalIndonesia,
  renderSemester,
} from "../../services/utils/formatter";
import RowRiwayat from "../RowRiwayat";
import DATA from "../../services/cache";
import { useSelector } from "react-redux";

export default function DetailRiwayat({ isDenda, data }) {
  const dataBeasiswa = useSelector((state) => state.dataBeasiswa.dataBeasiswa);

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
  const [tanggal, waktu] = tgl_bayar ? tgl_bayar.split(" ") : ["-", "-"];
  

  const beasiswa = dataBeasiswa.data.length > 0 ? true : false;
  let jenisBeasiswa;

  if (beasiswa) {
    jenisBeasiswa = dataBeasiswa.data[0].jenis_beasiswa;
  }
  
  if (status_bayar !== "L" && status_bayar) {
    return null;
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
          color={COLORS.black}
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
        dataValue={beasiswa ? "Rp 0" : formatRupiah(total_tagihan)}
        color={COLORS.black}
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
