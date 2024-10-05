import { View, ImageBackground, ScrollView, Button } from "react-native";
import React from "react";
import { SIZES, STYLES } from "../../styles";
import ButtonNilai from "../../components/ButtonNilai";
import TableContainer from "../../components/TableContainer";
import SectionTitleBig from "../../components/SectionTitleBig";

export default function ReportScreen({ navigation }) {
  return (
    
      <ScrollView style={STYLES.containerTabView}>
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
            onPress={() => {
              navigation.navigate("KHS");
            }}
          />
          <ButtonNilai
            value="Daftar Nilai"
            next
            backgroundColor
            color
            space
            marginTop
            onPress={() => {
              navigation.navigate("Transkrip");
            }}
          />

          <TableContainer
            title={"PERKEMBANGAN IP & SKS SEMSTER"}
            displayOption={"table"}
          />
          <TableContainer
            title={"PERKEMBANGAN GRAFIK IP"}
            displayOption={"chart"}
          />
        </View>
      </ScrollView>
  );
}
