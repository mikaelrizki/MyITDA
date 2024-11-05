import React, { useEffect } from "react";
import { Image, ImageBackground } from "react-native";
import IMAGES from "../../assets/images";
import Text from "../../components/Text";
import { SIZES, STYLES } from "../../styles";
import { useDispatch, useSelector } from "react-redux";
import { resetDataAuth } from "../../stores/actions/actionAuth";
import adapter from "../../services/adapter";

export default function SplashScreen({ navigation }) {
  const dispatch = useDispatch();
  const dataAuth = useSelector((state) => state.dataAuth);
  console.log("[Redux] DataLogin Selector", dataAuth);

  useEffect(() => {
    const fetchData = async () => {
      const isAuth = await adapter.getAuth(
        dataAuth.dataLogin.nim,
        dataAuth.dataLogin.password
      );
      const dataMhsAll = await adapter.getDataMahasiswa();
      const loginAllowed =
        dataAuth.loginDate &&
        new Date() - new Date(dataAuth.loginDate) < 86400000;
      const mhsAvail = dataMhsAll.find(
        (item) => item.nim === dataAuth.dataLogin.nim
      );
      if (loginAllowed && isAuth && mhsAvail) {
        const dataMhs = dataMhsAll.filter(
          (item) => item.nim == dataAuth.dataLogin.nim
        );
        navigation.replace("Main", { dataMhs });
      } else {
        dispatch(resetDataAuth());
        navigation.replace("Auth", { dataMhsAll });
      }
    };

    const timer = setTimeout(() => {
      fetchData();
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ImageBackground source={IMAGES.bgSplash} style={STYLES.container}>
      <Image
        source={IMAGES.logoITDA}
        style={{ height: 140, marginBottom: 10 }}
        resizeMode="contain"
      />
      <Text center bold fontsize={SIZES.LargeText}>
        MyITDA
      </Text>
      <Text
        center
        regular
        fontsize={SIZES.smallText}
        padVertical={0}
        style={{ marginBottom: 120 }}
      >
        Student Portal Apps of{"\n"}Institut Teknologi Dirgantara Adisutjipto
      </Text>
      {/* <Button onPress={() => navigation.navigate("Auth")} title='Submit'></Button> */}
    </ImageBackground>
  );
}
