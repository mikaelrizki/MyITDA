import { View, ImageBackground, StyleSheet, FlatList } from "react-native";
import IMAGES from "../../../assets/images";
import { SIZES} from "../../../styles";
import DATA from "../../../services/cache";
import DetailRiwayat from "../../../components/DetailRiwayat";
import SecondAppBar from "../../../components/SecondAppBar";
import { useSelector } from "react-redux";

export default function Riwayat({ navigation }) {
  const dataPayment = useSelector((state) => state.dataPayment.dataPayment);
  return (
    <ImageBackground
      source={IMAGES.bgDefault}
      style={{ flex: 1}}>
      <SecondAppBar label={"Riwayat Pembayaran"} navigation={navigation} />
      <View
        style={{
          flex: 1,
          width: SIZES.full,
          flexdirection: "column",
          alignItems: "center",
          paddingHorizontal: SIZES.padding2,
        }}>
        <FlatList
          data={dataPayment.data}
          renderItem={({ item }) => <DetailRiwayat data={item} />}
          keyExtractor={(item, index) => index.toString()}
          style={{ width: SIZES.full }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </ImageBackground>
  );
}