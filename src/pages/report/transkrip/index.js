import {
  Image,
  ImageBackground,
  StyleSheet,
  View,
} from "react-native";
import React from "react";
import TableContainer from "../../../components/TableContainer";
import Header from "../../../components/Header";
import Text from "../../../components/Text";
import { COLORS, SIZES, STYLES } from "../../../styles";
import IMAGES from "../../../assets/images";

export default function TranskripScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <Header onPress={() => navigation.navigate("Report")} title={"Daftar Nilai"}/>

      <ImageBackground source={IMAGES.bgDefault} style={[STYLES.container]}>
        <View style={LOKAL_STYLES.content}>
          <View style={LOKAL_STYLES.infoContainerSks}>
            <Text color={COLORS.white} bold fontsize={SIZES.mediumText}>
              Total Sks
            </Text>
            <View style={LOKAL_STYLES.sksContainer}>
              <View style={LOKAL_STYLES.sksBadge}>
                <Text
                  bold
                  color={COLORS.primary}
                  fontsize={SIZES.smallText}
                >
                  120
                </Text>
              </View>
            </View>
          </View>

          <View style={LOKAL_STYLES.infoContainerKualitas}>
            <Text color={COLORS.white} bold fontsize={SIZES.mediumText}>
              Total Angka Kualitas
            </Text>
            <View style={LOKAL_STYLES.sksContainer}>
              <View style={LOKAL_STYLES.sksBadge}>
                <Text
                  bold
                  color={COLORS.primary}
                  fontsize={SIZES.smallText}
                >
                  54.0
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={LOKAL_STYLES.infoContainerIpk}>
            <Text color={COLORS.white} bold fontsize={SIZES.mediumText}>
            Indeks Prestasi Kumulatif
            </Text>
            <View style={LOKAL_STYLES.sksContainer}>
              <View style={LOKAL_STYLES.sksBadge}>
                <Text
                  bold
                  color={COLORS.primary}
                  fontsize={SIZES.smallText}
                >
                  36.2
                </Text>
              </View>
            </View>
          </View>

          <TableContainer title={"MATAKULIAH WAJIB"} displayOption={"transkrip"} transkrip={"wajib"}/>
          <TableContainer title={"MATAKULIAH PILIHAN"} displayOption={"transkrip"} transkrip={"pilihan"}/>
      </ImageBackground>
    </View>
  );
}

const LOKAL_STYLES = StyleSheet.create({
  container: {
    flex: 1
  },
  content:{
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15
  },
  infoContainerSks: {
    width: "36%",
    paddingHorizontal: SIZES.padding,
    backgroundColor: COLORS.primary,
    flexDirection: "row",
    borderRadius: 5,
    alignItems: "center",
    marginRight: 10,
  },
  infoContainerKualitas: {
    width: "62%",
    paddingHorizontal: SIZES.padding,
    backgroundColor: COLORS.primary,
    flexDirection: "row",
    borderRadius: 5,
    alignItems: 'center',
  },
  infoContainerIpk: {
    width: "65%",
    alignSelf: "flex-start",
    marginLeft: 12,
    paddingHorizontal: SIZES.padding,
    backgroundColor: COLORS.primary,
    flexDirection: "row",
    borderRadius: 5,
    alignItems: "center",
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
  },
});
