import { View, StyleSheet, Image } from "react-native";
import React from "react";
import Text from "../Text";
import { COLORS, SIZES } from "../../styles";
import ICONS from "../../assets/icons";
import TableRow from "../TableRow";
import Chart from "../Chart";

export default function TableContainer({ title, displayOption, rightIcon}) {
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
                  <TableRow
                    semester={"Gasal 2021/2022"}
                    sks={"24"}
                    ip={2.789}
                  />
                  <TableRow
                    semester={"Genap 2021/2022"}
                    sks={"20"}
                    ip={3.876}
                  />
                  <TableRow
                    semester={"Gasal 2022/2023"}
                    sks={"24"}
                    ip={3.789}
                  />
                  <TableRow
                    semester={"Genap 2022/2023"}
                    sks={"21"}
                    ip={2.876}
                  />
                  <TableRow
                    semester={"Gasal 2023/2024"}
                    sks={"24"}
                    ip={3.789}
                  />
                  <TableRow semester={"Genap 2023/2024"} 
                  sks={"20"} 
                  ip={2.1} />
                </>
              );
            case "chart":
              return (
                <Chart
                  labels={[
                    "2021-1",
                    "2021-2",
                    "2022-1",
                    "2022-2",
                    "2023-1",
                    "2023-2",
                    "2024-1",
                    "2024-2",
                  ]}
                  ip={[2.789, 3.876, 3.789, 2.876, 3.789, 2.1]}
                />
              );
            case "khs":
              return <View/>;
            default:
              return <Text>Opsi tidak tersedia.</Text>;
          }
        })()}
        {/* {showTable ? (
          <>
            <TableRow semester={"Gasal 2021/2022"} sks={"24"} ip={2.789} />
            <TableRow semester={"Genap 2021/2022"} sks={"20"} ip={3.876} />
            <TableRow semester={"Gasal 2022/2023"} sks={"24"} ip={3.789} />
            <TableRow semester={"Genap 2022/2023"} sks={"21"} ip={2.876} />
            <TableRow semester={"Gasal 2023/2024"} sks={"24"} ip={3.789} />
            <TableRow semester={"Genap 2023/2024"} sks={"20"} ip={2.1} />
          </>
        ) : (
          <Chart
            labels={[
              "2021-1",
              "2021-2",
              "2022-1",
              "2022-2",
              "2023-1",
              "2023-2",
              "2024-1",
              "2024-2",
            ]}
            ip={[2.789, 3.876, 3.789, 2.876, 3.789, 2.1]}
          />
        )} */}
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
