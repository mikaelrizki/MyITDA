import { Image, ImageBackground, View } from "react-native";
import IMAGES from "../../assets/images";
import { SIZES } from "../../styles";
import ItemDataInfoKTM from "../ItemDataInfoKTM";

export default function ItemKTM({
  nama,
  nim,
  fakultas, 
  jurusan,
}) {
  return (
      <View>
        <ImageBackground
          source={IMAGES.bgKTM}
          style={{
            width: SIZES.full,
            height: undefined,
            aspectRatio: 320 / 164,
            justifyContent: "center",
          }}
          resizeMode="cover"
        >
          <View
            style={{
              marginTop: 35,
            flexDirection: "row",
            paddingHorizontal: SIZES.padding,

            }}
          >
            <View
            style={{
              aspectRatio: 52 / 69,
              width: "18%",
              height: undefined,
              borderRadius: 5,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 5 },
              shadowOpacity: 0.35,
              shadowRadius: 5,
              elevation: 5,
            }}
          >
            <Image
              source={IMAGES.picKTM}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 5,
              }}
            />
          </View>


            <View style={{ flex: 1, justifyContent: "center", marginLeft: SIZES.padding }}>
              <ItemDataInfoKTM
              dataKey={"Nama"}
              dataValue={nama}/>

              <ItemDataInfoKTM
              dataKey={"NIM"}
              dataValue={nim}/>

              <ItemDataInfoKTM
              dataKey={"Fakultas"}
              dataValue={fakultas}/>

              <ItemDataInfoKTM
              dataKey={"Jurusan"}
              dataValue={jurusan}/>
            </View>

            <View
              style={{
                borderRadius: SIZES.radius,
              width: "21%",
              aspectRatio: 1,
              height: undefined,
              backgroundColor: "white",
              justifyContent: "center",
              alignItems: "center",
              }}
            >
              <Image source={IMAGES.qrCode} style={{ width: "85%", height: "85%" }} />
            </View>
          </View>
        </ImageBackground>
      </View>
  );
}
