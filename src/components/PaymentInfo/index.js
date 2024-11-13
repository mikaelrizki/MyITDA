import { Image, StyleSheet, View } from "react-native";
import IMAGES from "../../assets/images";
import Text from "../../components/Text";
import { COLORS, SIZES } from "../../styles";
import RowPayment from "../../components/RowPayment";

export default function PaymentInfo({
  kd_ta,
  kd_smt,
  total_harga,
  total_denda,
  total_tagihan,
  tgl_akhir_bayar,
  status_bayar,
  tgl_bayar,
  metode_pembayaran,
  beasiswa,
  jenis_beasiswa,
  isMasaPembayaran,
  dataKosong,
}) {
  const [tanggal, waktu] = tgl_bayar ? tgl_bayar.split(" ") : ["-", "-"];

  if (!isMasaPembayaran && status_bayar === "L") {
    return (
      <View style={LOCAL_STYLE.frame}>
        <Image
          source={
            !isMasaPembayaran && status_bayar === "L"
              ? IMAGES.logoTidakAda
              : status_bayar === "B" && !beasiswa
              ? IMAGES.logoBelumLunas
              : IMAGES.logoLunas
          }
          style={{ height: 100, alignSelf: "center", marginBottom: 30 }}
          resizeMode="contain"
        />
        <Text bold center fontsize={SIZES.mediumText} color={COLORS.black}>
          Anda Tidak Memiliki Tagihan {"\n"} Di Semester Ini
        </Text>
      </View>
    );
  } else if (dataKosong) {
    return (
      <View style={LOCAL_STYLE.frame}>
        <Image
          source={IMAGES.logoKosong}
          style={{ height: 100, alignSelf: "center", marginBottom: 30 }}
          resizeMode="contain"
        />
        <Text bold center fontsize={SIZES.mediumText} color={COLORS.black}>
          Anda Belum Memiliki Tagihan
        </Text>
      </View>
    );
  } else {
    return (
      <View style={LOCAL_STYLE.frame}>
        <Image
          source={
            status_bayar === "B" && !beasiswa
              ? IMAGES.logoBelumLunas
              : IMAGES.logoLunas
          }
          style={{ height: 100, alignSelf: "center", marginBottom: 30 }}
          resizeMode="contain"
        />
        {(total_denda > 0 || beasiswa) && (
          <RowPayment
            dataKey="Tagihan"
            dataValue={formatRupiah(total_harga)}
            color={COLORS.black}
          />
        )}

        {total_denda > 0 && !beasiswa && (
          <RowPayment
            dataKey="Denda"
            dataValue={formatRupiah(total_denda)}
            color={COLORS.danger}
          />
        )}
        {beasiswa && (
          <RowPayment
            dataKey="Beasiswa"
            dataValue={jenis_beasiswa}
            color={COLORS.success}
          />
        )}

        <RowPayment
          dataKey="Total Tagihan"
          dataValue={beasiswa ? formatRupiah(0) : formatRupiah(total_tagihan)}
          color={COLORS.black}
        />

        <RowPayment
          dataKey="Semester"
          dataValue={renderSemester(kd_ta, kd_smt)}
          color={COLORS.black}
        />
        {!beasiswa && status_bayar === "L" && (
          <Text bold center color={COLORS.black}>
            Tangal Pembayaran
          </Text>
        )}
        {!beasiswa && status_bayar === "B" && (
          <Text bold center color={COLORS.black}>
            Batas Akhir Pembayaran
          </Text>
        )}
        <View
          style={[
            LOCAL_STYLE.frameTanggal,
            {
              backgroundColor:
                status_bayar === "L" ? COLORS.success : COLORS.danger,
            },
          ]}>
          {!beasiswa && status_bayar === "L" && (
            <Text bold center color={COLORS.white}>
              {formatTanggalIndonesia(tanggal)} {"\n"}
              {waktu} {"\n"}
              {metode_pembayaran}
            </Text>
          )}
          {!beasiswa && status_bayar === "B" && (
            <Text bold center color={COLORS.white}>
              {formatTanggalIndonesia(tgl_akhir_bayar)}
            </Text>
          )}
        </View>
      </View>
    );
  }
}

const LOCAL_STYLE = StyleSheet.create({
  frame: {
    width: SIZES.full,
    backgroundColor: COLORS.secondary,
    borderRadius: 20,
    padding: SIZES.padding2,
    marginTop: 20,
    marginBottom: 15,
  },
  frameTanggal: {
    width: "70%",
    borderRadius: 10,
    alignSelf: "center",
  },
  viewStyle: {
    flex: 1,
    width: SIZES.full,
  },
});

const formatRupiah = (number) => {
  return `Rp ${number.toLocaleString("id-ID")}`;
};

const renderSemester = (tahun, semester) => {
  tahun = `${tahun}/${tahun + 1}`;
  semester = semester === 1 ? "Gasal" : "Genap";
  return `${semester} ${tahun}`;
};

const formatTanggalIndonesia = (tanggal) => {
  return new Date(tanggal).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};
