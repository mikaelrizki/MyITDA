import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../styles";

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
      width: SIZES.full
    }
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