import { ImageBackground, ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import TableContainer from "../../../components/TableContainer";
import Text from "../../../components/Text";
import { COLORS, SIZES, STYLES } from "../../../styles";
import IMAGES from "../../../assets/images";
import SecondAppBar from "../../../components/SecondAppBar";
import { useSelector } from "react-redux";

export default function TranskripScreen({ navigation }) {

  const dataTranskrip = useSelector((state)=> state.dataTranskrip.dataTranskrip || []);

  const totalSks =
    dataTranskrip.reduce((total, item) => total + parseInt(item.sks_mk), 0) || 0;
  const totalKualitas =
    dataTranskrip.reduce(
      (total, item) => total + parseInt(item.bobot_nilai) * parseInt(item.sks_mk),
      0
    ) || 0;

  const ips = totalSks ? (totalKualitas / totalSks).toFixed(2) : 0;

  if (!dataTranskrip.length){
    return <Text>No data available</Text>; // Menampilkan pesan jika data tidak ada
  }

  return (
    <ScrollView showsHorizontalScrollIndicator={false} style={{ flex: 1 }}>
      <ImageBackground source={IMAGES.bgDefault} style={(flex = 1)}>
        <SecondAppBar label={"Transkrip"} navigation={navigation} />
        <View style={STYLES.container}>
          <View style={LOKAL_STYLES.content}>
            <View style={LOKAL_STYLES.infoContainerSks}>
              <Text color={COLORS.white} bold fontsize={SIZES.smallText}>
                Total Sks
              </Text>
              <View style={LOKAL_STYLES.sksContainer}>
                <View style={LOKAL_STYLES.sksBadge}>
                  <Text
                    bold
                    color={COLORS.primary}
                    fontsize={SIZES.extraSmallText}
                  >
                    {totalSks}
                  </Text>
                </View>
              </View>
            </View>

            <View style={LOKAL_STYLES.infoContainerKualitas}>
              <Text color={COLORS.white} bold fontsize={SIZES.smallText}>
                Total Angka Kualitas
              </Text>
              <View style={LOKAL_STYLES.sksContainer}>
                <View style={LOKAL_STYLES.sksBadge}>
                  <Text
                    bold
                    color={COLORS.primary}
                    fontsize={SIZES.extraSmallText}
                  >
                    {totalKualitas}
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View style={LOKAL_STYLES.infoContainerIpk}>
            <Text color={COLORS.white} bold fontsize={SIZES.smallText}>
              Indeks Prestasi Kumulatif
            </Text>
            <View style={LOKAL_STYLES.sksContainer}>
              <View style={LOKAL_STYLES.sksBadge}>
                <Text
                  bold
                  color={COLORS.primary}
                  fontsize={SIZES.extraSmallText}
                >
                  {ips}
                </Text>
              </View>
            </View>
          </View>

          <TableContainer
            title={"MATAKULIAH WAJIB"}
            displayOption={"transkrip"}
            transkrip={"wajib"}
          />
          <TableContainer
            title={"MATAKULIAH PILIHAN"}
            displayOption={"transkrip"}
            transkrip={"pilihan"}
          />
        </View>
      </ImageBackground>
    </ScrollView>
  );
}

const LOKAL_STYLES = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    flex: 1,
  },
  infoContainerSks: {
    paddingHorizontal: SIZES.padding,
    backgroundColor: COLORS.primary,
    flexDirection: "row",
    borderRadius: 5,
    alignItems: "center",
    marginRight: "2%",
  },
  infoContainerKualitas: {
    paddingHorizontal: SIZES.padding,
    backgroundColor: COLORS.primary,
    flexDirection: "row",
    borderRadius: 5,
    alignItems: "center",
  },
  infoContainerIpk: {
    paddingHorizontal: SIZES.padding,
    backgroundColor: COLORS.primary,
    flexDirection: "row",
    borderRadius: 5,
    alignItems: "center",
    marginLeft: "5%",
  },
  sksContainer: {
    alignItems: "center",
    paddingVertical: 4,
    paddingHorizontal: SIZES.padding,
  },
  sksBadge: {
    backgroundColor: COLORS.white,
    paddingHorizontal: 4,
    borderRadius: SIZES.radius,
    alignSelf: "flex-end",
  },
});
