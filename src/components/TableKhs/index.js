import React from "react";
import { View } from "react-native";
import { COLORS, SIZES } from "../../styles";
import SksBadge from "../SksBadge";
import { useSelector } from "react-redux";
import Text from "../Text";

export default function TableKhs(dataYear) {
  const AllDataKHS = useSelector((state) => state.dataKHS?.dataKHS);
  const tableData = AllDataKHS[dataYear.data] || [];

  const calculateTotals = (data) => {
    if (!data || data.length === 0) return { totalSks: 0, totalKualitas: 0 };
    const totalSks = data?.reduce(
      (total, item) => total + (parseInt(item.sks) || 0),
      0
    );
    const totalKualitas = data?.reduce(
      (total, item) =>
        total + parseInt(item?.bobot_nilai || 0) * parseInt(item?.sks || 0),
      0
    );
    return { totalSks, totalKualitas };
  };

  const { totalSks, totalKualitas } = calculateTotals(tableData);
  const ips = totalSks ? (totalKualitas / totalSks).toFixed(2) : "0.00";

  if (!tableData || tableData.length === 0) {
    return (
      <View style={LOKAL_STYLES.emptyContainer}>
        <Text color={COLORS.primary} fontsize={SIZES.smallText}>
          Data KHS tidak tersedia.
        </Text>
      </View>
    );
  }

  return (
    <View>
      {/* Header */}
      <View style={LOKAL_STYLES.tableRow}>
        <Text
          bold
          color={COLORS.black}
          fontsize={SIZES.smallText}
          style={{ width: "17%" }}
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
          style={{ width: "12%" }}
        >
          NILAI
        </Text>
      </View>

      {tableData?.map((item, index) => (
        <View key={index}>
          {/* Data per Mata Kuliah */}
          <View style={LOKAL_STYLES.itemTableRow}>
            <Text
              color={COLORS.black}
              fontsize={SIZES.smallText}
              style={{ width: "17%" }}
            >
              {item?.kd_mk}
            </Text>
            <Text
              color={COLORS.black}
              fontsize={SIZES.smallText}
              style={{ flex: 1 }}
            >
              {item?.nm_mk}
            </Text>
            <Text
              color={COLORS.black}
              fontsize={SIZES.smallText}
              style={{ width: "10%" }}
            >
              {item?.sks || 0}
            </Text>
            <Text
              color={COLORS.black}
              fontsize={SIZES.smallText}
              style={{ width: "9%" }}
            >
              {item?.nilai || "E"}
            </Text>
          </View>

          {/* Bottom Section (Presensi, Tugas, UTS, UAS) */}
          <View style={LOKAL_STYLES.bottomTableRow}>
            <Text color={COLORS.black} fontsize={SIZES.smallText}>
              Presensi: {item?.presensi || 0}
            </Text>
            <Text color={COLORS.black} fontsize={SIZES.smallText}>
              Tugas: {item?.tugas || 0}
            </Text>
            <Text color={COLORS.black} fontsize={SIZES.smallText}>
              UTS: {item?.uts || 0}
            </Text>
            <Text color={COLORS.black} fontsize={SIZES.smallText}>
              UAS: {item?.uas || 0}
            </Text>
          </View>
        </View>
      ))}

      {/* TOTAL SELURUHNYA */}
      <View style={LOKAL_STYLES.itemTableTotal}>
        <Text
          color={COLORS.black}
          fontsize={SIZES.smallText}
          style={{ width: "25%", paddingLeft: SIZES.padding }}
        >
          Total SKS
        </Text>
        <SksBadge value={totalSks.toString()} />
        <Text
          color={COLORS.black}
          fontsize={SIZES.smallText}
          style={{ width: "40%", paddingLeft: SIZES.padding2 }}
        >
          Indeks Prestasi Semester
        </Text>
        <SksBadge value={ips} />
      </View>
    </View>
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
  itemTableTotal: {
    flexDirection: "row",
    gap: 10,
    paddingHorizontal: 15,
  },
  bottomTableRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 5,
    backgroundColor: COLORS.lightGray,
    borderBottomWidth: 2,
  },
  emptyContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: SIZES.padding,
  },
};
