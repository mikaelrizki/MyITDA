import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { COLORS, SIZES, STYLES } from "../../styles";
import IMAGES from "../../assets/images";
import Text from "../../components/Text";
import TableContainer from "../../components/TableContainer";
import ICONS from "../../assets/icons";
import Header from "../../components/Header";

export default function KhsScreen({ navigation }) {
  const data = [
    { id: "1", title: "GASAL 2022/2023" },
    { id: "2", title: "GENAP 2022/2023" },
    { id: "3", title: "GASAL 2021/2022" },
    { id: "4", title: "GENAP 2021/2022" },
    { id: "5", title: "GASAL 2020/2021" },
  ];
  return (
    <View style={LOKAL_STYLES.container}>
      <Header onPress={() => navigation.navigate("Report")} title={"KHS/ Hasil Studi"}/>

      <ImageBackground source={IMAGES.bgDefault} style={[STYLES.container]}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <TableContainer
              title={item.title}
              displayOption={"khs"}
              rightIcon={<Image source={ICONS.down}  />}
            />
          )}
          keyExtractor={(item) => item.id}
          style={{ width: SIZES.full }}
        />
      </ImageBackground>
    </View>
  );
}

const LOKAL_STYLES = StyleSheet.create({
  container: { flex: 1 },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: SIZES.padding2,
    backgroundColor: COLORS.primary,
    width: SIZES.full,
    height: "12%",
    paddingTop: 30,
  },
});
