import { Button, Image, ImageBackground, StyleSheet, View } from "react-native";
import IMAGES from "../../assets/images";
import Text from "../../components/Text";
import { COLORS, SIZES, STYLES } from "../../styles";
import ButtonPembayaran from "../../components/ButtonPembayaran";
import ICONS from "../../assets/icons";
import DATA from "../../services/cache";
import Tutorial from "../Tutorial";
import { useState } from "react";
import AppBar from "../../components/AppBar";
import SectionTitleBig from "../../components/SectionTitleBig";
import { useRef } from "react";
import PaymentInfo from "../../components/PaymentInfo";

export default function Payment({ navigation }) {
  // data API nanti disini
  const jumlahArray = DATA.dataPembayaran.data.length - 1;
  const nim = DATA.dataPembayaran.data[jumlahArray].nim;
  const nama = DATA.dataPembayaran.data[jumlahArray].nama;
  const kd_ta = parseInt(DATA.dataPembayaran.data[jumlahArray].kd_ta);
  const kd_smt = parseInt(DATA.dataPembayaran.data[jumlahArray].kd_smt);
  const total_harga = parseInt(
    DATA.dataPembayaran.data[jumlahArray].total_harga
  );
  const total_denda = parseInt(
    DATA.dataPembayaran.data[jumlahArray].total_denda
  );
  const total_tagihan = (total_harga + total_denda);
  const tgl_akhir_bayar = DATA.dataPembayaran.data[jumlahArray].tgl_akhir_bayar;
  const tgl_mulai = DATA.dataPembayaran.data[jumlahArray].tgl_mulai;
  const tgl_bayar = DATA.dataPembayaran.data[jumlahArray].tgl_bayar;
  const status_bayar = DATA.dataPembayaran.data[jumlahArray].status_bayar;
  const metode_pembayaran =
    DATA.dataPembayaran.data[jumlahArray].metode_pembayaran;

  const isMasaPembayaran = true;
  const beasiswa = DATA.dataBeasiswa.data[0] ? true : false;

  let jenis_beasiswa = "";
  if (beasiswa) {
      jenis_beasiswa = DATA.dataBeasiswa.data[0].jenis_beasiswa;
  }

  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <ImageBackground source={IMAGES.bgDefault} style={[STYLES.container]}>
      <AppBar
        username={"Melisa Wijaya"}
        bgColorBell={COLORS.softBlue}
        bellIcon={ICONS.iconBellBlue}
        navigation={navigation}
      />
      <View style={LOCAL_STYLE.viewStyle}>
        <View style={[LOCAL_STYLE.viewStyle, { marginTop: 12 }]}>
          <SectionTitleBig title={"Tagihan Anda"} />

          <PaymentInfo
            kd_ta = {kd_ta}
            kd_smt = {kd_smt}
            total_harga = {total_harga}
            total_denda = {total_denda}
            total_tagihan = {total_tagihan}
            tgl_akhir_bayar = {tgl_akhir_bayar}
            tgl_mulai = {tgl_mulai}
            status_bayar = {status_bayar}
            tgl_bayar = {tgl_bayar}
            metode_pembayaran = {metode_pembayaran}
            beasiswa = {beasiswa}
            jenis_beasiswa = {jenis_beasiswa}
            isMasaPembayaran = {isMasaPembayaran}
          />

          <ButtonPembayaran
            title="Lihat Riwayat Pembayaran"
            navigation={() => navigation.navigate("Riwayat")}
            rightIcon={
              <Image
                source={IMAGES.logoRiwayat}
                style={{ width: 32, height: 32 }}
                resizeMode="contain"
              />
            }
          />
          <ButtonPembayaran
            title="Lihat Tutorial Pembayaran"
            navigation={toggleModal}
            rightIcon={
              <Image
                source={IMAGES.logoTutorial}
                style={{ width: 27, height: 27, marginTop: 3, marginRight: 2 }}
                resizeMode="contain"
              />
            }
          />

          {isModalVisible && (
            <Tutorial isVisible={isModalVisible} onClose={toggleModal} />
          )}
        </View>
      </View>
    </ImageBackground>
  );
}

const LOCAL_STYLE = StyleSheet.create({
  viewStyle: {
    flex: 1,
    width: SIZES.full,
  },
});
