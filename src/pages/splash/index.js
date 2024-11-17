import React, { useEffect } from "react";
import { Image, ImageBackground } from "react-native";
import IMAGES from "../../assets/images";
import Text from "../../components/Text";
import { SIZES, STYLES } from "../../styles";
import { useDispatch, useSelector } from "react-redux";
import { resetDataAuth } from "../../stores/actions/actionAuth";
import adapter from "../../services/adapter";
import { resetNilaiKHS, setYearnSmt } from "../../stores/actions/actionKHS";
import {
  resetNilaiTranskrip,
  setNilaiTranskrip,
} from "../../stores/actions/actionTranskrip";
import {
  resetDataPayment,
  setDataPayment,
} from "../../stores/actions/actionPayment";
import {
  resetDataMahasiswa,
  setDataMahasiswa,
} from "./../../stores/actions/actionMahasiswa/index";
import {
  resetDataBeasiswa,
  setDataBeasiswa,
} from "../../stores/actions/actionBeasiswa";

export default function SplashScreen({ navigation }) {
  const dispatch = useDispatch();
  const dataAuth = useSelector((state) => state.dataAuth);
  const dataMahasiswa = useSelector((state) => state.dataMahasiswa);
  console.log("[Redux] DataLogin Selector", dataAuth);
  console.log("[Redux] DataMahasiswa Selector", dataMahasiswa);

  useEffect(() => {
    const fetchData = async () => {
      const nim = dataAuth.dataLogin.nim;
      const password = dataAuth.dataLogin.password;

      const isAuth = await adapter.getAuth(nim, password);
      const dataMhsAll = await adapter.getDataMahasiswa();

      const dataTranskrip = await adapter.getDataTranskrip(nim);
      const dataYear = await adapter.getDataYearnSmt(nim);
      const dataPayment = await adapter.getDataPayment(nim);
      const dataBeasiswa = await adapter.getDataBeasiswa(nim);

      const loginAllowed =
        dataAuth.loginDate &&
        new Date() - new Date(dataAuth.loginDate) < 86400000;
      const mhsAvail = dataMhsAll.find((item) => item.nim === nim);
      if (loginAllowed && isAuth && mhsAvail) {
        const dataMhs = dataMhsAll.filter((item) => item.nim == nim);
        console.log("DATA MHS SELECTED", dataMhs);
        dispatch(setDataMahasiswa(dataMhs));
        dispatch(setNilaiTranskrip(dataTranskrip));
        dispatch(setYearnSmt(dataYear));
        dispatch(setDataPayment(dataPayment));
        dispatch(setDataBeasiswa(dataBeasiswa));
        navigation.replace("Main");
      } else {
        dispatch(resetDataAuth());
        dispatch(resetDataMahasiswa());
        dispatch(resetDataPayment());
        dispatch(resetDataBeasiswa());
        navigation.replace("Auth", dataMhsAll);
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
