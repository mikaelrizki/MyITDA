import { ImageBackground, StyleSheet, View } from "react-native";
import IMAGES from "../../assets/images";
import { COLORS, SIZES, STYLES } from "../../styles";
import AppBar from "../../components/AppBar";
import SectionTitle from "../../components/SectionTitle";
import ItemKTM from "../../components/ItemKTM";
import ItemDataInfoMhs from "../../components/ItemDataInfoMhs";

export default function Home({ navigation }) {
  return (
    <ImageBackground source={IMAGES.bgDefault} style={STYLES.container}>
      <View
        style={{
          flex: 1,
          width: SIZES.full,
          flexdirection: "column",
        }}
      >
        <AppBar username={"Melisa Wijaya"} />

        <SectionTitle title={"Kartu Tanda Mahasiswa"} />

        <ItemKTM />

        <SectionTitle title={"Biodata"} />

        <View style={LOCAL_STYLE.containerStyle}>
          <ItemDataInfoMhs dataKey={"Tempat Lahir"} dataValue={"Semarang"} />
          <ItemDataInfoMhs
            dataKey={"Tanggal Lahir"}
            dataValue={"21 Desember 2003"}
          />
          <ItemDataInfoMhs
            dataKey={"Alamat"}
            dataValue={"Jl. Gedongkiwo 1082C"}
          />
          <ItemDataInfoMhs dataKey={"Jenis Kelamin"} dataValue={"Perempuan"} />
          <ItemDataInfoMhs dataKey={"Agama"} dataValue={"Katolik"} />
          <ItemDataInfoMhs dataKey={"Golongan Darah"} dataValue={"O"} />
          <ItemDataInfoMhs dataKey={"Telepon"} dataValue={"089671467070"} />
          <ItemDataInfoMhs
            dataKey={"Email"}
            dataValue={"melisa.wijaya@ti.ukdw.ac.id"}
          />
        </View>

        <SectionTitle title={"Informasi Akademik"} />

        <View style={LOCAL_STYLE.containerStyle}>
          <ItemDataInfoMhs dataKey={"Status Mahasiswa"} dataValue={"Aktif"} />
          <ItemDataInfoMhs dataKey={"IP Kumulatif"} dataValue={"4.00"} />
          <ItemDataInfoMhs dataKey={"Total SKS"} dataValue={"126"} />
          <ItemDataInfoMhs
            dataKey={"Dosen Wali"}
            dataValue={"Gloria Virginia, S.Kom.,MAI, Ph.D"}
          />
        </View>
      </View>
    </ImageBackground>
  );
}

const LOCAL_STYLE = StyleSheet.create({
  containerStyle: {
    borderColor: COLORS.primary,
    borderWidth: 1,
    borderRadius: 5,
    width: SIZES.full,
    height: undefined,
    padding: 15,
    paddingRight: 0,
  },
});
