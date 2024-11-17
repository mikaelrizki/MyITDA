import { StyleSheet, View } from "react-native";
import { COLORS, SIZES, STYLES } from "../../styles";
import SectionTitle from "../../components/SectionTitle";
import ItemKTM from "../../components/ItemKTM";
import ItemDataInfoMhs from "../../components/ItemDataInfoMhs";
import { ScrollView } from "react-native-gesture-handler";
import { formatTanggalIndonesia } from "../../services/utils/formatter";
import { useSelector } from "react-redux";

export default function Home({ navigation }) {
  const dataMahasiswa = useSelector((state) => state.dataMahasiswa.dataMahasiswaSelected[0]);
  const namaFakultas = dataMahasiswa.nm_fak.replace("Fakultas ", "");
  const alamat = dataMahasiswa.alamat_mhs.replace(/\r?\n|\r/g, "");
  return (
    <ScrollView
      style={[STYLES.containerTabView, { marginTop: 15 }]}
      showsVerticalScrollIndicator={false}
    >
      <SectionTitle title={"Kartu Tanda Mahasiswa"} first />

      <ItemKTM
        profilePic={
          "https://mahasiswa.itda.ac.id/perpus/img/" + dataMahasiswa.path_foto
        }
        nama={dataMahasiswa.nama}
        nim={dataMahasiswa.nim}
        fakultas={namaFakultas}
        jurusan={dataMahasiswa.nm_prodi}
        jenisKelamin={dataMahasiswa.jenis_kelamin}
      />

      <SectionTitle title={"Biodata"} />

      <View style={LOCAL_STYLE.containerStyle}>
        <ItemDataInfoMhs
          dataKey={"Tempat Lahir"}
          dataValue={dataMahasiswa.tmp_lahir}
        />
        <ItemDataInfoMhs
          dataKey={"Tanggal Lahir"}
          dataValue={formatTanggalIndonesia(dataMahasiswa.tgl_lahir)}
        />
        <ItemDataInfoMhs dataKey={"Alamat"} dataValue={alamat.trim()} />
        <ItemDataInfoMhs
          dataKey={"Jenis Kelamin"}
          dataValue={dataMahasiswa.jenis_kelamin === "L" ? "Laki-Laki" : "Perempuan"}
        />
        <ItemDataInfoMhs dataKey={"Agama"} dataValue={dataMahasiswa.agama} />
        <ItemDataInfoMhs
          dataKey={"Golongan Darah"}
          dataValue={dataMahasiswa.gol_darah}
        />
        <ItemDataInfoMhs dataKey={"Telepon"} dataValue={dataMahasiswa.hp_mhs} />
        <ItemDataInfoMhs
          dataKey={"Email"}
          dataValue={dataMahasiswa.email_mhs}
          capitalize={false}
        />
      </View>

      <SectionTitle title={"Informasi Akademik"} />

      <View style={LOCAL_STYLE.containerStyle}>
        <ItemDataInfoMhs
          dataKey={"Status Mahasiswa"}
          dataValue={dataMahasiswa.status_mhs === "A" ? "Aktif" : "Tidak Aktif"}
        />
        <ItemDataInfoMhs
          dataKey={"IP Kumulatif"}
          dataValue={dataMahasiswa.ipk || "-"}
        />
        <ItemDataInfoMhs
          dataKey={"Total SKS"}
          dataValue={dataMahasiswa.sks_kum || "-"}
        />
        <ItemDataInfoMhs
          dataKey={"Dosen Wali"}
          dataValue={dataMahasiswa.nm_dosen_dpa}
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
