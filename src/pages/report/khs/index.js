import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  View,
} from "react-native";
import React from "react";
import { SIZES, STYLES } from "../../../styles";
import IMAGES from "../../../assets/images";
import TableContainer from "../../../components/TableContainer";
import ICONS from "../../../assets/icons";
import SecondAppBar from "../../../components/SecondAppBar";

export default function KhsScreen({ navigation }) {
  const data = [
    { id: "1", title: "GASAL 2022/2023" },
    { id: "2", title: "GENAP 2022/2023" },
    { id: "3", title: "GASAL 2021/2022" },
    { id: "4", title: "GENAP 2021/2022" },
    { id: "5", title: "GASAL 2020/2021" },
  ];
  return (
    <ImageBackground source={IMAGES.bgDefault} style={{ flex: 1 }}>
      <SecondAppBar label={"KHS/ Hasil Studi"} navigation={navigation} />
      <View style={STYLES.container}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <TableContainer
              title={item.title}
              displayOption={"khs"}
              rightIcon={<Image source={ICONS.down} />}
            />
          )}
          keyExtractor={(item) => item.id}
          style={{ width: SIZES.full }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </ImageBackground>
  );
}

const LOKAL_STYLES = StyleSheet.create({
  container: { flex: 1 },
});
