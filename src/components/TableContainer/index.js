import { View, StyleSheet, Image } from "react-native";
import React from "react";
import Text from "../Text";
import { COLORS, SIZES } from "../../styles";
import ICONS from "../../assets/icons";
import TableRow from "../TableRow";
import Chart from "../Chart";
import TableTranskrip from "../TableTranskrip";
import { useSelector } from "react-redux";

export default function TableContainer({
  title,
  displayOption,
  rightIcon,
  transkrip,
}) {
  const dataTranskrip = useSelector(
    (state) => state.dataTranskrip.dataTranskrip
  );
  const dataYearnSmt = useSelector((state) => state.dataKHS.dataYearnSmt);
  if (!dataTranskrip || dataTranskrip.length === 0) {
    return <Text>No Data Available</Text>;
  }

  const getSemesterName = (kdSmt, tahun) => {
    const semesterNames = ["GASAL", "GENAP"];
    const semesterType = kdSmt % 2 === 1 ? semesterNames[0] : semesterNames[1];
    const startYear = parseInt(tahun, 10);
    const endYear = startYear + 1;
    return `${semesterType} ${startYear}/${endYear}`;
  };

  const processTranscriptData = (dataTranskrip) => {
    if (!dataTranskrip || !Array.isArray(dataTranskrip)) {
      console.error("Invalid dataTranskrip:", dataTranskrip);
      return [];
    }
    const semesterData = {};
    dataTranskrip.forEach((entry) => {
      const year = entry.kd_ta;
      const semester = entry.kd_smt;
      const semesterKey = `${year}-${semester}`;
      if (!semesterData[semesterKey]) {
        semesterData[semesterKey] = {
          totalCredits: 0,
          totalPoints: 0,
        };
      }
      const sks = parseInt(entry.sks_mk, 10);
      const grade = parseFloat(entry.bobot_nilai);
      semesterData[semesterKey].totalCredits += sks;
      semesterData[semesterKey].totalPoints += sks * grade;
    });
    return Object.keys(semesterData)
      .map((semesterKey) => {
        const [year, kdSmt] = semesterKey.split("-");
        const semesterTitle = getSemesterName(parseInt(kdSmt, 10), year);
        return {
          semester: semesterTitle,
          sks: semesterData[semesterKey].totalCredits,
          ip: (
            semesterData[semesterKey].totalPoints /
            semesterData[semesterKey].totalCredits
          ).toFixed(2),
        };
      })
      .sort((a, b) => a.kd_ta - b.kd_ta || a.kd_smt - b.kd_smt)
      .map(({ kd_ta, kd_smt, ...rest }) => rest);
  };

  const sortTranscriptData = (transcriptData) => {
    return transcriptData.sort((a, b) => {
      const [aSemesterType, aYearRange] = a.semester.split(" ");
      const [bSemesterType, bYearRange] = b.semester.split(" ");

      const aStartYear = parseInt(aYearRange.split("/")[0], 10);
      const bStartYear = parseInt(bYearRange.split("/")[0], 10);

      if (aStartYear !== bStartYear) {
        return aStartYear - bStartYear;
      }
      return aSemesterType === "GASAL" ? -1 : 1;
    });
  };

  const processDataTahun = (dataYearnSmt) => {
    const result = [];
    if (Array.isArray(dataYearnSmt)) {
      dataYearnSmt.forEach((item) => {
        const { year, semesters } = item;

        if (Array.isArray(semesters)) {
          semesters.forEach((semester) => {
            const title = `${semester === "1" ? "GASAL" : "GENAP"} ${year}/${
              parseInt(year) + 1
            }`;
            result.push({ id: `${year}-${semester}`, title });
          });
        }
      });
    }
    result.sort((a, b) => {
      const [yearA, semesterA] = a.id.split("-").map(Number);
      const [yearB, semesterB] = b.id.split("-").map(Number);
      if (yearA === yearB) {
        return semesterA - semesterB;
      }
      return yearA - yearB;
    });

    return result;
  };

  const data = processTranscriptData(dataTranskrip);
  const databaru = sortTranscriptData(data);
  const dataYear = processDataTahun(dataYearnSmt);
  const dataLabels = dataYear.map((item) => item.id);
  const dataIP = databaru.map((item) => item.ip);

  return (
    <View style={LOKAL_STYLES.tableCons}>
      <View style={LOKAL_STYLES.titleCons}>
        <Image
          source={ICONS.bookmark}
          style={{ width: 27, height: 27 }}
          resizeMode="contain"
        />
        <Text
          fontsize={SIZES.mediumText}
          color={COLORS.white}
          paddingHorizontal={SIZES.padding2}
        >
          {title}
        </Text>
        {rightIcon && <View style={LOKAL_STYLES.inputIcon}>{rightIcon}</View>}
      </View>

      <View style={LOKAL_STYLES.container}>
        {(() => {
          switch (displayOption) {
            case "table":
              return (
                <>
                  {databaru.map((item, index) => (
                    <TableRow
                      key={index}
                      semester={item.semester}
                      sks={item.sks}
                      ip={item.ip}
                    />
                  ))}
                </>
              );
            case "chart":
              return <Chart labels={dataLabels} ip={dataIP} />;
            case "transkrip":
              return <TableTranskrip judul={transkrip} />;
            default:
              return null;
          }
        })()}
      </View>
    </View>
  );
}

const LOKAL_STYLES = StyleSheet.create({
  tableCons: {
    width: SIZES.full,
    borderWidth: 1,
    borderRadius: SIZES.radius,
    borderColor: COLORS.primary,
    backgroundColor: COLORS.secondary,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 24,
    overflow: "hidden",
  },
  titleCons: {
    width: SIZES.full,
    paddingLeft: SIZES.padding2,
    backgroundColor: COLORS.primary,
    paddingVertical: "5",
    borderRadius: SIZES.radius,
    flexDirection: "row",
    alignItems: "center",
  },
  container: {
    width: SIZES.full,
    padding: SIZES.padding,
    backgroundColor: COLORS.secondary,
  },
  inputIcon: {
    flex: 1,
    marginLeft: 80,
    height: SIZES.full,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
