import { StyleSheet, View } from "react-native";
import { COLORS, SIZES, STYLES } from "../../styles";
import SectionTitle from "../../components/SectionTitle";
import ItemKTM from "../../components/ItemKTM";
import ItemDataInfoMhs from "../../components/ItemDataInfoMhs";
import { ScrollView } from "react-native-gesture-handler";
import { formatTanggalIndonesia } from "../../services/utils/formatter";
import { useSelector } from "react-redux";

export default function Home({ navigation }) {
  const dataMahasiswa = useSelector(
    (state) => state.dataMahasiswa.dataMahasiswaSelected[0] || null
  );
  const namaFakultas =
    dataMahasiswa !== undefined
      ? dataMahasiswa?.nm_fak.replace("Fakultas ", "")
      : null;
  const alamat =
    dataMahasiswa !== undefined
      ? dataMahasiswa?.alamat_mhs.replace(/\r?\n|\r/g, "")
      : null;
  const profilePic =
    dataMahasiswa !== undefined
      ? "https://mahasiswa.itda.ac.id/perpus/img/" + dataMahasiswa?.path_foto
      : null;
  const nama = dataMahasiswa !== undefined ? dataMahasiswa?.nama : null;
  const nim = dataMahasiswa !== undefined ? dataMahasiswa?.nim : null;
  const gol_darah =
    dataMahasiswa !== undefined ? dataMahasiswa?.gol_darah : null;
  const email_mhs =
    dataMahasiswa !== undefined ? dataMahasiswa?.email_mhs : null;
  const jurusan = dataMahasiswa !== undefined ? dataMahasiswa?.nm_prodi : null;
  const jenis_kelamin =
    dataMahasiswa !== undefined ? dataMahasiswa?.jenis_kelamin : null;
  const tgl_lahir =
    dataMahasiswa !== undefined ? dataMahasiswa?.tgl_lahir : null;
  const agama = dataMahasiswa !== undefined ? dataMahasiswa?.agama : null;
  const hp_mhs = dataMahasiswa !== undefined ? dataMahasiswa?.hp_mhs : null;
  const status_mhs =
    dataMahasiswa !== undefined ? dataMahasiswa?.status_mhs : null;
  const ipk = dataMahasiswa !== undefined ? dataMahasiswa?.ipk : null;
  const sks_kum = dataMahasiswa !== undefined ? dataMahasiswa?.sks_kum : null;
  const nm_dosen_dpa =
    dataMahasiswa !== undefined ? dataMahasiswa?.nm_dosen_dpa : null;
  const tmp_lahir =
    dataMahasiswa !== undefined ? dataMahasiswa?.tmp_lahir : null;

  return (
    <ScrollView
      style={[STYLES.containerTabView, { marginTop: 15 }]}
      showsVerticalScrollIndicator={false}>
      <SectionTitle title={"Kartu Tanda Mahasiswa"} first />

      <ItemKTM
        profilePic={profilePic}
        nama={nama}
        nim={nim}
        fakultas={namaFakultas}
        jurusan={jurusan}
        jenisKelamin={jenis_kelamin}
      />

      <SectionTitle title={"Biodata"} />

      <View style={LOCAL_STYLE.containerStyle}>
        <ItemDataInfoMhs dataKey={"Tempat Lahir"} dataValue={tmp_lahir} />
        <ItemDataInfoMhs
          dataKey={"Tanggal Lahir"}
          dataValue={formatTanggalIndonesia(tgl_lahir)}
        />
        <ItemDataInfoMhs
          dataKey={"Alamat"}
          dataValue={alamat ? alamat.trim() : null}
        />
        <ItemDataInfoMhs
          dataKey={"Jenis Kelamin"}
          dataValue={jenis_kelamin === "L" ? "Laki-Laki" : "Perempuan"}
        />
        <ItemDataInfoMhs dataKey={"Agama"} dataValue={agama} />
        <ItemDataInfoMhs dataKey={"Golongan Darah"} dataValue={gol_darah} />
        <ItemDataInfoMhs dataKey={"Telepon"} dataValue={hp_mhs} />
        <ItemDataInfoMhs
          dataKey={"Email"}
          dataValue={email_mhs}
          capitalize={false}
        />
      </View>

      <SectionTitle title={"Informasi Akademik"} />

      <View style={LOCAL_STYLE.containerStyle}>
        <ItemDataInfoMhs
          dataKey={"Status Mahasiswa"}
          dataValue={status_mhs === "A" ? "Aktif" : "Tidak Aktif"}
        />
        <ItemDataInfoMhs dataKey={"IP Kumulatif"} dataValue={ipk || "-"} />
        <ItemDataInfoMhs dataKey={"Total SKS"} dataValue={sks_kum || "-"} />
        <ItemDataInfoMhs dataKey={"Dosen Wali"} dataValue={nm_dosen_dpa} />
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
