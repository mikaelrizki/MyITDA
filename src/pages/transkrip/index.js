import {
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { COLORS, SIZES, STYLES } from "../../styles";
import IMAGES from "../../assets/images";
import Text from "../../components/Text";
import TableContainer from "../../components/TableContainer";
import Header from "../../components/Header";

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
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: SIZES.padding2,
    backgroundColor: COLORS.primary,
    width: SIZES.full,
    height: "12%",
    paddingTop: 30,
  },
  infoContainerSks: {
    width: "37%",
    paddingLeft: SIZES.padding,
    backgroundColor: COLORS.primary,
    flexDirection: "row",
    borderRadius: 5,
    alignItems: "center",
    marginRight: 10,
  },
  infoContainerKualitas: {
    width: "62%",
    paddingLeft: SIZES.padding,
    backgroundColor: COLORS.primary,
    flexDirection: "row",
    borderRadius: 5,
    alignItems: 'center',
  },
  infoContainerIpk: {
    width: "66%",
    paddingLeft: SIZES.padding,
    backgroundColor: COLORS.primary,
    flexDirection: "row",
    borderRadius: 5,
    alignItems: "center",
    // alignSelf: "flex-start",
  },
  sksContainer: {
    alignItems: "flex-start",
    paddingVertical: 5,
    width: 35,
    height: 45,
    resizeMode: "contain",
    marginLeft: 14,
  },
  sksBadge: {
    backgroundColor: COLORS.white,
    paddingHorizontal: 4,
    borderRadius: SIZES.radius,
  },
});
