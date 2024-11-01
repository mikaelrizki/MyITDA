import React, { useEffect, useState } from "react";
import { Image, ImageBackground } from "react-native";
import IMAGES from "../../assets/images";
import Text from "../../components/Text";
import { SIZES, STYLES } from "../../styles";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { resetDataAuth } from "../../stores/actions/actionAuth";

export default function SplashScreen({ navigation }) {
  const [isAuth, setIsAuth] = useState(false);
  const [dataMahasiswaAll, setDataMahasiswaAll] = useState([]);
  
  const dispatch = useDispatch();
  const dataAuth = useSelector((state) => state.dataAuth);
  console.log(dataAuth);

  const getAuth = async () => {
    try {
      const formData = new FormData();
      formData.append("username", dataAuth.dataLogin.nim);
      formData.append("password", dataAuth.dataLogin.password);

      const response = await axios.post(
        "https://perpustakaan.itda.ac.id/api/json_login.php",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setIsAuth(response.data["data"][0].result);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const getDataMahasiswa = async () => {
    try {
      const response = await axios.get(
        "https://perpustakaan.itda.ac.id/api/json_all_mhs.php"
      );
      setDataMahasiswaAll(response.data["data"]);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await getAuth();
      await getDataMahasiswa();
    };

    const timer = setTimeout(() => {
      fetchData();
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (dataMahasiswaAll.length > 0) {
      const loginAllowed =
        dataAuth.loginDate &&
        new Date() - new Date(dataAuth.loginDate) < 86400000;

      const mhsAvail = dataMahasiswaAll.find(
        (item) => item.nim === dataAuth.dataLogin.nim
      );

      if (loginAllowed && isAuth && mhsAvail) {
        const dataMhs = dataMahasiswaAll.filter(
          (item) => item.nim == dataAuth.dataLogin.nim
        );
        navigation.replace("Main", { dataMhs });
      } else {
        dispatch(resetDataAuth());
        navigation.replace("Auth", { dataMahasiswaAll });
      }
    }
  }, [dataMahasiswaAll, navigation]);

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
