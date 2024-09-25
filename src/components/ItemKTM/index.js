import { Image, ImageBackground, View } from "react-native";
import IMAGES from "../../assets/images";
import { SIZES } from "../../styles";
import ItemDataInfoKTM from "../ItemDataInfoKTM";

export default function ItemKTM({}) {
  return (
      <View>
        <ImageBackground
          source={IMAGES.bgKTM}
          style={{
            width: SIZES.full,
            height: undefined,
            aspectRatio: 320 / 164,
          }}
          resizeMode="cover"
        >
          <View
            style={{
              flexDirection: "row",
              left: 12,
              width: "93%",
              marginTop: 164 / 2.25,
            }}
          >
            <Image
              source={IMAGES.picKTM}
              style={{
                width: 54,
                height: 72,
                borderRadius: 5,
              }}
            />

            <View style={{ flex: 1, justifyContent: "center", left: 8 }}>
              <ItemDataInfoKTM
              dataKey={"Nama"}
              dataValue={"Melisa Wijaya"}/>

              <ItemDataInfoKTM
              dataKey={"NIM"}
              dataValue={"71210714"}/>

              <ItemDataInfoKTM
              dataKey={"Fakultas"}
              dataValue={"Teknologi Informasi"}/>

              <ItemDataInfoKTM
              dataKey={"Jurusan"}
              dataValue={"Informatika"}/>
            </View>

            <View
              style={{
                borderRadius: 5,
                borderColor: "white",
                borderWidth: 5,
                height: 64.9,
              }}
            >
              <Image source={IMAGES.qrCode} style={{ width: 55, height: 55 }} />
            </View>
          </View>
        </ImageBackground>
      </View>
  );
}
