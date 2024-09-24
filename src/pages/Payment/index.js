import { Button, Image, ImageBackground, StyleSheet, View } from "react-native";
import IMAGES from "../../assets/images";
import Text from "../../components/Text";
import { COLORS, SIZES, STYLES } from "../../styles";
import BelumLunas from "../BelumLunas";
import BelumLunasDenda from "../BelumLunasDenda";
import Lunas from "../Lunas";
import LunasDenda from "../LunasDenda";
import Beasiswa from "../Beasiswa";
import BukanMasaPembayaran from "../BukanMasaPembayaran";
import ButtonPembayaran from "../../components/ButtonPembayaran";
import ICONS from "../../assets/icons";
import DATA from "../../services/cache";
import Tutorial from "../Tutorial";
import { useState } from "react";

export default function Payment({ navigation }) {

    // data API nanti disini
    const jumlahArray = DATA.dataPembayaran.data.length - 1;
    const tagihan = parseInt(DATA.dataPembayaran.data[jumlahArray].total_harga);
    const tahun = parseInt(DATA.dataPembayaran.data[jumlahArray].kd_ta);
    const semester = parseInt(DATA.dataPembayaran.data[jumlahArray].kd_smt);
    const tanggal = "2024-09-21";
    let beasiswa;
    const denda = parseInt(DATA.dataPembayaran.data[jumlahArray].total_denda);
    const totalTagihan = tagihan + denda;
    const status = DATA.dataPembayaran.data[jumlahArray].status_bayar;
    const isMasaPembayaran = true;

    if (DATA.dataBeasiswa.data[0]) {
        const jenisBeasiswa = DATA.dataBeasiswa.data[0].jenis_beasiswa;
    }
  

    if (DATA.dataBeasiswa.data[0]) {
        beasiswa = true;
    }else{
        beasiswa = false;
    }

    let render;
    if (isMasaPembayaran) {
        if (beasiswa) {
            render = <Beasiswa />
        } else {
            if (status === "L") {
                if (denda > 0) {
                    render = <LunasDenda />
                } else {
                    render = <Lunas />
                }
            } else if (status === "B") {
                if (denda > 0) {
                    render = <BelumLunasDenda />
                } else {
                    render = <BelumLunas />
                }
            }
        }
    } else {
        if (status === "B") {
            render = <BelumLunasDenda />
        } else {
            render = <BukanMasaPembayaran />
        }
    }

    const [isModalVisible, setIsModalVisible] = useState(false);

    const toggleModal = () => {
        setIsModalVisible(!isModalVisible);
    };
    

    return (
    <ImageBackground source={IMAGES.bgDefault} style={[STYLES.container]}>
        <Text bold fontsize={16} style={{ marginLeft: "-60%" }}>Tagihan Anda</Text>
            
        {render}

        <ButtonPembayaran 
            title="Lihat Riwayat Pembayaran" 
            navigation={() => navigation.navigate("Riwayat")}
            rightIcon={
                <Image
                  source={IMAGES.logoRiwayat}
                  style={{ width: 32, height: 32, }}
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

        {isModalVisible && <Tutorial isVisible={isModalVisible} onClose={toggleModal} />}

        <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
        <Button title="Go to Report" onPress={() => navigation.navigate("Report")} />
        <Button title="Go to Payment" onPress={() => navigation.navigate("Payment")} />
    </ImageBackground>
  );
}

const LOCAL_STYLE = StyleSheet.create({
  frame: {
    width: 298,
    backgroundColor: COLORS.secondary,
    borderRadius: 20,
    padding: SIZES.padding2,
    marginTop: 20,
    marginBottom: 15,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: -10,
  },
  frameTanggal: {
    width: 192,
    borderRadius: 10,
    alignSelf: "center"
  },
});

const formatRupiah = (number) => {
    return `Rp ${number.toLocaleString('id-ID')}`;
};

const renderSemester = (tahun, semester) => {
    tahun = `${tahun}/${tahun+1}`
    semester = semester === 1 ? "Gasal" : "Genap"  
    return `${semester} ${tahun}`;
};

const formatTanggalIndonesia = (tanggal) => {
    return new Date(tanggal).toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
};

export {LOCAL_STYLE, formatRupiah, renderSemester, formatTanggalIndonesia}