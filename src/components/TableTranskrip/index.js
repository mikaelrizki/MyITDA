import { StyleSheet, View } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../../styles";
import Text from "../Text";
import SksBadge from "../SksBadge";
import { useSelector } from "react-redux";

export default function TableTranskrip({ judul }) {
  let displayedJudul;

  if (judul == "wajib") {
    displayedJudul = "Total SKS WAJIB";
  } else if (judul == "pilihan") {
    displayedJudul = "Total SKS PILIHAN";
  } else {
    displayedJudul = "tidak ada judul";
  }

  const dataTranskrip = useSelector(
    (state) => state.dataTranskrip?.dataTranskrip || null
  );

  const filteredData = dataTranskrip.filter((item) => {
    return judul === "wajib" ? item?.jenis_mk === "W" : item?.jenis_mk === "P";
  });

  const totalSKS = filteredData.reduce(
    (sum, item) => sum + parseInt(item?.sks_mk || 0, 10),
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
            style={{ width: "12%" }}
          >
            {item.sks_mk}
          </Text>
          <Text
            color={COLORS.black}
            fontsize={SIZES.smallText}
            style={{ width: "7%" }}
          >
            {item.nilai}
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
          <SksBadge value={totalSKS.toString()} />
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
    width: "70%",
    resizeMode: "contain",
  },
  sksBadge: {
    backgroundColor: COLORS.gray,
    paddingHorizontal: 4,
    borderRadius: SIZES.radius,
  },
});
