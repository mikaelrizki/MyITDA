import { StyleSheet, View } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../../styles";
import Text from "../Text";
import SksBadge from "../SksBadge";

export default function TableTranskrip({ judul }) {
    let displayedJudul;

  if (judul == "wajib") {
    displayedJudul = "Total WAJIB";
  } else if(judul == "pilihan") {
    displayedJudul = "Total PILIHAN";
  }else {
    displayedJudul = "tidak ada judul"
  }
  return (
    <>
      <View style={LOKAL_STYLES.tableRow}>
        <Text
          bold
          color={COLORS.black}
          fontsize={SIZES.smallText}
          style={{ width: "12%" }}
        >
          KODE
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

      <View style={LOKAL_STYLES.itemTableRow}>
        <Text
          color={COLORS.black}
          fontsize={SIZES.smallText}
          style={{ width: "12%" }}
        >
          IF001
        </Text>
        <Text
          color={COLORS.black}
          fontsize={SIZES.smallText}
          style={{ flex: 1 }}
        >
          LOGIKA MATEMATIKA
        </Text>
        <Text
          color={COLORS.black}
          fontsize={SIZES.smallText}
          style={{ width: "10%" }}
        >
          3
        </Text>
        <Text
          color={COLORS.black}
          fontsize={SIZES.smallText}
          style={{ width: "10%" }}
        >
          A
        </Text>
        <Text
          color={COLORS.black}
          fontsize={SIZES.smallText}
          style={{ width: "20%" }}
        >
          12
        </Text>
      </View>
      <View style={LOKAL_STYLES.itemTableRow}>
        <Text
          color={COLORS.black}
          fontsize={SIZES.smallText}
          style={{ width: "12%" }}
        >
          IF002
        </Text>
        <Text
          color={COLORS.black}
          fontsize={SIZES.smallText}
          style={{ flex: 1 }}
        >
          SISTEM PAKAR
        </Text>
        <Text
          color={COLORS.black}
          fontsize={SIZES.smallText}
          style={{ width: "10%" }}
        >
          3
        </Text>
        <Text
          color={COLORS.black}
          fontsize={SIZES.smallText}
          style={{ width: "10%" }}
        >
          B
        </Text>
        <Text
          color={COLORS.black}
          fontsize={SIZES.smallText}
          style={{ width: "20%" }}
        >
          9
        </Text>
      </View>

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
          <SksBadge value={"6"} />
        </View>
        <View style={LOKAL_STYLES.BottomTableRow}>
          <SksBadge value={"21"} />
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
    borderBottomWidth: 2,
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
