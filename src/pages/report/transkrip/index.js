import { ImageBackground, ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import TableContainer from "../../../components/TableContainer";
import Text from "../../../components/Text";
import { COLORS, SIZES, STYLES } from "../../../styles";
import IMAGES from "../../../assets/images";
import SecondAppBar from "../../../components/SecondAppBar";
import { useSelector } from "react-redux";

export default function TranskripScreen({ navigation }) {
  const dataTranskrip = useSelector(
    (state) => state.dataTranskrip.dataTranskrip || []
  );

  const totalSks =
    dataTranskrip.reduce((total, item) => total + parseInt(item.sks_mk), 0) ||
    0;
  const totalKualitas =
    dataTranskrip.reduce(
      (total, item) =>
        total + parseInt(item.bobot_nilai) * parseInt(item.sks_mk),
      0
    ) || 0;

  const ips = totalSks ? (totalKualitas / totalSks).toFixed(2) : 0;

  if (!dataTranskrip || !dataTranskrip.length) {
    return (
      <View style={{ flex: 1, backgroundColor: COLORS.secondary }}>
        <SecondAppBar label={"Transkrip"} navigation={navigation} />
        <ImageBackground
          source={IMAGES.bgDefault}
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text color={COLORS.primary} fontsize={SIZES.mediumText} bold>
            Maaf, Data Transkrip Anda Tidak Tersedia
          </Text>
        </ImageBackground>
      </View>
    );
  }

  return (
    <View style={{ backgroundColor: COLORS.secondary }}>
      <SecondAppBar label={"Transkrip"} navigation={navigation} />
      <ScrollView showsHorizontalScrollIndicator={false}>
        <ImageBackground source={IMAGES.bgDefault} style={(flex = 1)}>
          <View style={STYLES.containerTabView}>
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
    </View>
  );
}

const LOKAL_STYLES = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: SIZES.padding,
    flex: 1,
  },
  infoContainerSks: {
    paddingHorizontal: SIZES.padding,
    backgroundColor: COLORS.primary,
    flexDirection: "row",
    borderRadius: 5,
    alignItems: "center",
    marginLeft: 0,
  },
  infoContainerIpk: {
    paddingHorizontal: SIZES.padding,
    backgroundColor: COLORS.primary,
    flexDirection: "row",
    borderRadius: 5,
    alignItems: "center",
    marginLeft: "1%",
  },
  sksContainer: {
    alignItems: "center",
    paddingVertical: 5,
    paddingLeft: SIZES.padding2,
  },
  sksBadge: {
    backgroundColor: COLORS.white,
    paddingHorizontal: 5,
    borderRadius: SIZES.radius,
  },
});
