import { StyleSheet, View } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../../styles";
import Text from "../Text";
import SksBadge from "../SksBadge";
import { useSelector } from "react-redux";

export default function TableTranskrip({ judul }) {
  let displayedJudul;

  if (judul == "wajib") {
    displayedJudul = "Total WAJIB";
  } else if (judul == "pilihan") {
    displayedJudul = "Total PILIHAN";
  } else {
    displayedJudul = "tidak ada judul";
  }

  const dataTranskrip = useSelector(
    (state) => state.dataTranskrip.dataTranskrip
  );

  const filteredData = dataTranskrip.filter((item) => {
    return judul === "wajib" ? item.jenis_mk === "W" : item.jenis_mk === "P";
  });

  const totalSKS = filteredData.reduce(
    (sum, item) => sum + parseInt(item.sks_mk, 10),
    0
  );
  const totalKualitas = filteredData.reduce(
    (sum, item) =>
      sum + parseInt(item.bobot_nilai, 10) * parseInt(item.sks_mk, 10),
    0
  );

  return (
    <>
      <View style={LOKAL_STYLES.tableRow}>
        <Text
          bold
          color={COLORS.black}
          fontsize={SIZES.smallText}
          style={{ width: "12%" }}
        >
          SEM PKT
        </Text>
        <Text
          bold
          color={COLORS.black}
          fontsize={SIZES.smallText}
          style={{ flex: 1 }}
        >
          MATA KULIAH
        </Text>
        <Text
          bold
          color={COLORS.black}
          fontsize={SIZES.smallText}
          style={{ width: "10%" }}
        >
          SKS
        </Text>
        <Text
          bold
          color={COLORS.black}
          fontsize={SIZES.smallText}
          style={{ width: "10%" }}
        >
          NILAI
        </Text>
        <Text
          bold
          color={COLORS.black}
          fontsize={SIZES.smallText}
          style={{ width: "20%" }}
        >
          KUALITAS
        </Text>
      </View>

      {filteredData.map((item, index) => (
        <View key={index} style={LOKAL_STYLES.itemTableRow}>
          <Text
            color={COLORS.black}
            fontsize={SIZES.smallText}
            style={{ width: "12%" }}
          >
            {item.semester_paket}
          </Text>
          <Text
            color={COLORS.black}
            fontsize={SIZES.smallText}
            style={{ flex: 1 }}
          >
            {item.nm_mk}
          </Text>
          <Text
            color={COLORS.black}
            fontsize={SIZES.smallText}
            style={{ width: "10%" }}
          >
            {item.sks_mk}
          </Text>
          <Text
            color={COLORS.black}
            fontsize={SIZES.smallText}
            style={{ width: "10%" }}
          >
            {item.nilai}
          </Text>
          <Text
            color={COLORS.black}
            fontsize={SIZES.smallText}
            style={{ width: "20%" }}
          >
            {parseInt(item.bobot_nilai, 0) * parseInt(item.sks_mk, 10)}
          </Text>
        </View>
      ))}

      {/* TOTAL SELURUHNYA */}
      <View style={LOKAL_STYLES.itemTableRow}>
        <View style={LOKAL_STYLES.sksContainer}>
          <View style={LOKAL_STYLES.sksBadge}>
            <Text color={COLORS.white} fontsize={SIZES.smallText}>
              {displayedJudul}
            </Text>
          </View>
        </View>
        <View style={LOKAL_STYLES.BottomTableRow}>
          <SksBadge value={totalSKS.toString()}/>
        </View>
        <View style={LOKAL_STYLES.BottomTableRow}>
          <SksBadge value={totalKualitas.toString()} />
        </View>
      </View>
    </>
  );
}

const LOKAL_STYLES = StyleSheet.create({
  tableRow: {
    flexDirection: "row",
    gap: 15,
    paddingHorizontal: 5,
    backgroundColor: COLORS.lightGray,
    borderBottomWidth: 2,
    borderTopWidth: 2,
  },
  itemTableRow: {
    flexDirection: "row",
    gap: 15,
    paddingHorizontal: 5,
    borderBottomWidth: 1,
  },
  BottomTableRow: {
    width: "25%",
    flexDirection: "row",
  },
  sksContainer: {
    alignItems: "center",
    paddingVertical: 5,
    width: "40%",
    resizeMode: "contain",
  },
  sksBadge: {
    backgroundColor: COLORS.gray,
    paddingHorizontal: 4,
    borderRadius: SIZES.radius,
  },
});
