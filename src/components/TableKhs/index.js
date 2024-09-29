import { StyleSheet, View } from "react-native";
import React from "react";
import Text from "../Text";
import { COLORS, SIZES } from "../../styles";
import SksBadge from "../SksBadge";

export default function TableKhs() {
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
      <View style={LOKAL_STYLES.bottomTableRow}>
        <Text color={COLORS.black} fontsize={SIZES.smallText}>
          Presensi: 80
        </Text>
        <Text color={COLORS.black} fontsize={SIZES.smallText}>
          Tugas: 20
        </Text>
        <Text color={COLORS.black} fontsize={SIZES.smallText}>
          UTS: 90
        </Text>
        <Text color={COLORS.black} fontsize={SIZES.smallText}>
          UAS: 100
        </Text>
      </View>

      <View style={LOKAL_STYLES.itemTableRow}>
        <Text
          color={COLORS.black}
          fontsize={SIZES.smallText}
          style={{ width: "12%" }}
        >
          IF117
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
          2
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
      <View style={LOKAL_STYLES.bottomTableRow}>
        <Text color={COLORS.black} fontsize={SIZES.smallText}>
          Presensi: 80
        </Text>
        <Text color={COLORS.black} fontsize={SIZES.smallText}>
          Tugas: 20
        </Text>
        <Text color={COLORS.black} fontsize={SIZES.smallText}>
          UTS: 90
        </Text>
        <Text color={COLORS.black} fontsize={SIZES.smallText}>
          UAS: 100
        </Text>
      </View>

      {/* TOTAL SELURUHNYA */}
      <View style={LOKAL_STYLES.itemTableRow}>
        <Text
          color={COLORS.black}
          fontsize={SIZES.smallText}
          style={{ width: "12%" }}
        >
          GENAP 2023/2024
        </Text>
        <SksBadge value={"5"}/>
        <SksBadge value={"35.7"} />
        <Text
          color={COLORS.black}
          fontsize={SIZES.smallText}
          style={{ width: "10%" }}
        >
          IPS
        </Text>
        <SksBadge value={"3.96"} />
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
  },
  bottomTableRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 15,
    paddingHorizontal: 5,
    backgroundColor: COLORS.lightGray,
    borderBottomWidth: 2,
  },
});
