import { View, ImageBackground, ScrollView } from "react-native";
import React from "react";
import IMAGES from "../../assets/images";
import { COLORS, SIZES, STYLES } from "../../styles";
import AppBar from "../../components/AppBar";
import ButtonNilai from "../../components/ButtonNilai";
import TableContainer from "../../components/TableContainer";
import SectionTitleBig from "../../components/SectionTitleBig";
import ICONS from "../../assets/icons";

export default function ResetScreen(navigation) {
  return (
    <ImageBackground source={IMAGES.bgDefault} style={STYLES.container}>
      <AppBar username={"Melisa Wijaya"} bgColorBell={COLORS.softBlue} bellIcon={ICONS.iconBellBlue} navigation={navigation} />
      <ScrollView>
        <View
          style={{
            flex: 1,
            width: SIZES.full,
            flexDirection: "column",
          }}
        >
          <SectionTitleBig title={"Data Akademik"} />
          <ButtonNilai
            value="KHS/ Hasil Studi"
            next
            backgroundColor
            color
            space
          />
          <ButtonNilai
            value="Daftar Nilai"
            next
            backgroundColor
            color
            space
            marginTop
          />

          <TableContainer
            title={"PERKEMBANGAN IP & SKS SEMSTER"}
            showTable={true}
          />
          <TableContainer title={"PERKEMBANGAN GRAFIK IP"} />
        </View>
      </ScrollView>
    </ImageBackground>
  );
}
