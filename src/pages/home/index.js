import { StyleSheet, View } from "react-native";
import { COLORS, SIZES, STYLES } from "../../styles";
import SectionTitle from "../../components/SectionTitle";
import ItemKTM from "../../components/ItemKTM";
import ItemDataInfoMhs from "../../components/ItemDataInfoMhs";
import { ScrollView } from "react-native-gesture-handler";
import { formatTanggalIndonesia } from "../../services/utils/formatter";

export default function Home({ navigation, data }) {
  const namaFakultas = data[0].nm_fak.replace("Fakultas ", "");
  const alamat = data[0].alamat_mhs.replace(/\r?\n|\r/g, "");
  return (
    <ScrollView
      style={[STYLES.containerTabView, { marginTop: 15 }]}
      showsVerticalScrollIndicator={false}
    >
      <SectionTitle title={"Kartu Tanda Mahasiswa"} first />

      <ItemKTM
        profilePic={
          "https://mahasiswa.itda.ac.id/perpus/img/" + data[0].path_foto
        }
        nama={data[0].nama}
        nim={data[0].nim}
        fakultas={namaFakultas}
        jurusan={data[0].nm_prodi}
        jenisKelamin={data[0].jenis_kelamin}
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
        <ItemDataInfoMhs dataKey={"Alamat"} dataValue={alamat.trim()} />
        <ItemDataInfoMhs
          dataKey={"Jenis Kelamin"}
          dataValue={data[0].jenis_kelamin === "L" ? "Laki-Laki" : "Perempuan"}
        />
        <ItemDataInfoMhs dataKey={"Agama"} dataValue={data[0].agama} />
        <ItemDataInfoMhs
          dataKey={"Golongan Darah"}
          dataValue={data[0].gol_darah}
        />
        <ItemDataInfoMhs dataKey={"Telepon"} dataValue={data[0].hp_mhs} />
        <ItemDataInfoMhs
          dataKey={"Email"}
          dataValue={data[0].email_mhs}
          capitalize={false}
        />
      </View>

      <SectionTitle title={"Informasi Akademik"} />

      <View style={LOCAL_STYLE.containerStyle}>
        <ItemDataInfoMhs
          dataKey={"Status Mahasiswa"}
          dataValue={data[0].status_mhs === "A" ? "Aktif" : "Tidak Aktif"}
        />
        <ItemDataInfoMhs
          dataKey={"IP Kumulatif"}
          dataValue={data[0].ipk || "-"}
        />
        <ItemDataInfoMhs
          dataKey={"Total SKS"}
          dataValue={data[0].sks_kum || "-"}
        />
        <ItemDataInfoMhs
          dataKey={"Dosen Wali"}
          dataValue={data[0].nm_dosen_dpa}
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
