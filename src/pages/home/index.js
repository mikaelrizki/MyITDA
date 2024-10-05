import { StyleSheet, View } from "react-native";
import { COLORS, SIZES, STYLES } from "../../styles";
import SectionTitle from "../../components/SectionTitle";
import ItemKTM from "../../components/ItemKTM";
import ItemDataInfoMhs from "../../components/ItemDataInfoMhs";
import { ScrollView } from "react-native-gesture-handler";
import { formatTanggalIndonesia } from "../../services/utils/formatter";

export default function Home({ navigation, data }) {
  console.log("datameme", data);
  return (
    <ScrollView
      style={STYLES.containerTabView}
      showsVerticalScrollIndicator={false}
    >
      <SectionTitle title={"Kartu Tanda Mahasiswa"} />

      <ItemKTM
        nama={data[0].nama}
        nim={data[0].nim}
        fakultas={data[0].nm_fak}
        jurusan={data[0].nm_prodi}
      />

      <SectionTitle title={"Biodata"} />

      <View style={LOCAL_STYLE.containerStyle}>
        <ItemDataInfoMhs
          dataKey={"Tempat Lahir"}
          dataValue={data[0].tmp_lahir}
        />
        <ItemDataInfoMhs
          dataKey={"Tanggal Lahir"}
          dataValue={formatTanggalIndonesia(data[0].tgl_lahir)}
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
    </ScrollView>
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
