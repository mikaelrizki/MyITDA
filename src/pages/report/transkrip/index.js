import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import React from "react";
import TableContainer from "../../../components/TableContainer";
import Text from "../../../components/Text";
import { COLORS, SIZES, STYLES } from "../../../styles";
import IMAGES from "../../../assets/images";
import SecondAppBar from "../../../components/SecondAppBar";
import { useSelector } from "react-redux";

export default function TranskripScreen({ navigation }) {
  const dataTranskrip = useSelector(
    (state) => state.dataTranskrip?.dataTranskrip || []
  );

  if (!dataTranskrip || !dataTranskrip.length) {
    return (
      <View style={{ flex: 1, backgroundColor: COLORS.secondary }}>
        <ImageBackground source={IMAGES.bgDefault} style={{ flex: 1 }}>
          <SecondAppBar label={"Transkrip"} navigation={navigation} />
          <View style={STYLES.container}>
            <Image
              source={IMAGES.logoKosongNilai}
              style={{ width: 150, height: 150 }}
              resizeMode="contain"
            />
            <Text color={COLORS.black} fontsize={SIZES.mediumText} bold center>
              Maaf, Data Transkrip Anda Tidak Tersedia!
            </Text>
          </View>
        </ImageBackground>
      </View>
    );
  }

  const totalSks =
    dataTranskrip?.reduce((total, item) => total + parseInt(item.sks_mk), 0) ||
    0;
  const totalKualitas =
    dataTranskrip?.reduce(
      (total, item) =>
        total + parseInt(item.bobot_nilai) * parseInt(item.sks_mk),
      0
    ) || 0;

  const ips = totalSks ? (totalKualitas / totalSks).toFixed(2) : 0;

  return (
    <ImageBackground source={IMAGES.bgDefault} style={{ flex: 1 }}>
      <SecondAppBar label={"Transkrip"} navigation={navigation} />
      <View style={LOKAL_STYLES.content}>
        <View style={LOKAL_STYLES.infoContainerSks}>
          <Text color={COLORS.white} bold fontsize={SIZES.smallText}>
            Total Sks
          </Text>
          <View style={LOKAL_STYLES.sksContainer}>
            <View style={LOKAL_STYLES.sksBadge}>
              <Text bold color={COLORS.primary} fontsize={SIZES.extraSmallText}>
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
              <Text bold color={COLORS.primary} fontsize={SIZES.extraSmallText}>
                {ips}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ paddingHorizontal: SIZES.padding2 }}
      >
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
      </ScrollView>
    </ImageBackground>
  );
}

const LOKAL_STYLES = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginVertical: "2%",
    paddingHorizontal: SIZES.padding2,
  },
  infoContainerSks: {
    paddingHorizontal: 8,
    backgroundColor: COLORS.primary,
    flexDirection: "row",
    borderRadius: 5,
    alignItems: "center",
  },
  infoContainerIpk: {
    paddingHorizontal: 8,
    backgroundColor: COLORS.primary,
    flexDirection: "row",
    borderRadius: 5,
    alignItems: "center",
    marginLeft: "1%",
  },
  sksContainer: {
    alignItems: "center",
    paddingVertical: 5,
    paddingLeft: 5,
  },
  sksBadge: {
    backgroundColor: COLORS.white,
    paddingHorizontal: 5,
    borderRadius: SIZES.radius,
  },
});
