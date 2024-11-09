import React from "react";
import { View, Text } from "react-native";
import { COLORS, SIZES } from "../../styles";
import SksBadge from "../SksBadge";
import { useSelector } from "react-redux";

export default function TableKhs() {
  const khsData = useSelector((state) => state.dataKHS.dataKHS);
  console.log("[Table KHS : ", khsData);

  const totalSks =
    khsData.reduce((total, item) => total + parseInt(item.sks), 0) || 0;
  const totalKualitas =
    khsData.reduce(
      (total, item) => total + parseInt(item.bobot_nilai) * parseInt(item.sks),
      0
    ) || 0;

  const ips = totalSks ? (totalKualitas / totalSks).toFixed(2) : 0;

  if (!khsData || khsData.length === 0) {
    return <Text>No data available</Text>; // Menampilkan pesan jika data tidak ada
  }

  return (
    <>
      {/* Header */}
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

      {khsData.map((item, index) => (
        <React.Fragment key={index}>
          {/* Data per Mata Kuliah */}
          <View style={LOKAL_STYLES.itemTableRow}>
            <Text
              color={COLORS.black}
              fontsize={SIZES.smallText}
              style={{ width: "12%" }}
            >
              {item.kd_mk}
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
              {item.sks}
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
              {item.bobot_nilai}
            </Text>
          </View>

          {/* Bottom Section (Presensi, Tugas, UTS, UAS) */}
          <View style={LOKAL_STYLES.bottomTableRow}>
            <Text color={COLORS.black} fontsize={SIZES.smallText}>
              Presensi: {item.presensi}
            </Text>
            <Text color={COLORS.black} fontsize={SIZES.smallText}>
              Tugas: {item.tugas}
            </Text>
            <Text color={COLORS.black} fontsize={SIZES.smallText}>
              UTS: {item.uts}
            </Text>
            <Text color={COLORS.black} fontsize={SIZES.smallText}>
              UAS: {item.uas}
            </Text>
          </View>
        </React.Fragment>
      ))}

      {/* TOTAL SELURUHNYA */}
      <View style={LOKAL_STYLES.itemTableRow}>
        <Text
          color={COLORS.black}
          fontsize={SIZES.smallText}
          style={{ width: "8%" }}
        >
          SKS
        </Text>
        <SksBadge value={totalSks.toString()} />
        <Text
          color={COLORS.black}
          fontsize={SIZES.smallText}
          style={{ width: "18%" }}
        >
          KUALITAS
        </Text>
        <SksBadge value={totalKualitas.toString()} />
        <Text
          color={COLORS.black}
          fontsize={SIZES.smallText}
          style={{ width: "6%" }}
        >
          IPS
        </Text>
        <SksBadge value={ips} />
      </View>
    </>
  );
}

const LOKAL_STYLES = {
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
};
