import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  View,
} from "react-native";
import React, { useState } from "react";
import { COLORS, SIZES, STYLES } from "../../../styles";
import IMAGES from "../../../assets/images";
import ICONS from "../../../assets/icons";
import SecondAppBar from "../../../components/SecondAppBar";
import { useDispatch, useSelector } from "react-redux";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Text from "../../../components/Text";
import TableKhs from "../../../components/TableKhs";

export default function KhsScreen({ navigation }) {
  const [selectedData, setSelectedData] = useState(null);
  const dataYearnSmt = useSelector(
    (state) => state.dataKHS?.dataYearnSmt || []
  );
  const allDataKHS = useSelector((state) => state.dataKHS || {});

  const processDataTahun = (dataYearnSmt) => {
    const result = [];
    if (Array.isArray(dataYearnSmt)) {
      dataYearnSmt.forEach((item) => {
        const { year, semesters } = item;

        if (Array.isArray(semesters)) {
          semesters.forEach((semester) => {
            const title = `${
              semester === "1" ? "GASAL" : semester === "2" ? "GENAP" : "PENDEK"
            } ${year}/${parseInt(year) + 1}`;
            result.push({ id: `${year}-${semester}`, title });
          });
        }
      });
    }
    result.sort((a, b) => a.id.localeCompare(b.id));
    return result;
  };

  const data = processDataTahun(dataYearnSmt);
  console.log("[KHS PAGE]", data);
  console.log("[KHS PAGE]", JSON.stringify(allDataKHS, null, 2));

  if (!data || !data.length) {
    return (
      <View style={{ flex: 1, backgroundColor: COLORS.secondary }}>
        <ImageBackground source={IMAGES.bgDefault} style={{ flex: 1 }}>
          <SecondAppBar label={"KHS/ Hasil Studi"} navigation={navigation} />
          <Text color={COLORS.primary} fontsize={SIZES.mediumText} bold center>
            Maaf, Data KHS Anda Tidak Tersedia
          </Text>
        </ImageBackground>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.secondary }}>
      <ImageBackground source={IMAGES.bgDefault} style={{ flex: 1 }}>
        <SecondAppBar label={"KHS/ Hasil Studi"} navigation={navigation} />
        <ScrollView showsHorizontalScrollIndicator={false}>
          <View style={STYLES.containerTabView}>
            <FlatList
              data={data}
              keyExtractor={(item) => item?.id}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => setSelectedData(item?.id)}
                  activeOpacity={1}
                  style={[{ opacity: selectedData === item.id ? 1 : 2 }]}
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
                        {item?.title || null}
                      </Text>
                      <Image
                        source={ICONS.arrowDown}
                        style={LOKAL_STYLES.inputIcon}
                      />
                    </View>

                    {selectedData === item?.id && (
                      <View style={LOKAL_STYLES.container}>
                        <TableKhs data={item?.id} />
                      </View>
                    )}
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
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
