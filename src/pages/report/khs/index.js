import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  View,
} from "react-native";
import React, { useState } from "react";
import { COLORS, SIZES } from "../../../styles";
import IMAGES from "../../../assets/images";
import ICONS from "../../../assets/icons";
import SecondAppBar from "../../../components/SecondAppBar";
import { useDispatch, useSelector } from "react-redux";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Text from "../../../components/Text";
import adapter from "../../../services/adapter";
import TableKhs from "../../../components/TableKhs";
import { setNilaiKHS } from "../../../stores/actions/actionKHS";

export default function KhsScreen({ navigation }) {
  const [selectedData, setSelectedData] = useState(null);
  const dispatch = useDispatch();
  const dataAuth = useSelector((state) => state.dataAuth);
  console.log("[KHS] data login : ", dataAuth);

  const data2 = useSelector((state) => state.dataKHS);
  const dataYearnSmt = useSelector((state) => state.dataKHS.dataYearnSmt);
  console.log("[KHS PAGE] DATA KHS : ", data2);

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

  // Fungsi untuk menangani event tekan
  const handlePress = async (id) => {
    try {
      setSelectedData(id);
      const [year, sem] = id.split("-");

      // Panggil fungsi getDataKHS secara async
      const dataKHS = await adapter.getDataKHS(
        dataAuth.dataLogin.nim,
        year,
        sem
      );
      dispatch(setNilaiKHS(dataKHS));
      console.log("[KHS PAGE] handler : ", dataKHS);
    } catch (error) {
      console.error("Error fetching data KHS:", error);
    }
  };

  const data = processDataTahun(dataYearnSmt);
  return (
    <ScrollView>
      <ImageBackground source={IMAGES.bgDefault} style={{ flex: 1 }}>
        <SecondAppBar label={"KHS/ Hasil Studi"} navigation={navigation} />
        <View style={LOKAL_STYLES.container}>
          <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => handlePress(item.id)}
                style={[
                  { opacity: selectedData === item.id ? 1 : 2 }, // Set opacity based on selectedData state
                ]}
              >
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
                      {item.title}
                    </Text>
                    <Image source={ICONS.down} style={LOKAL_STYLES.inputIcon} />
                  </View>

                  {selectedData === item.id && (
                    <View style={LOKAL_STYLES.container}>
                      <TableKhs />
                    </View>
                  )}
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </ImageBackground>
    </ScrollView>
  );
}

const LOKAL_STYLES = StyleSheet.create({
  container: {
    flex: 1,
    padding: SIZES.padding,
  },
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
    marginLeft: "32%",
    height: 35,
    resizeMode: "contain",
  },
});
