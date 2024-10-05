import React, { useEffect, useState } from "react";
import { Button, Image, ImageBackground } from "react-native";
import IMAGES from "../../assets/images";
import Text from "../../components/Text";
import { SIZES, STYLES } from "../../styles";
import axios from "axios";

export default function SplashScreen({ navigation }) {
  const [dataLoginAll, setDataLoginAll] = useState([]);
  const [dataMahasiswaAll, setDataMahasiswaAll] = useState([]);

  const getDataLogin = async () => {
    try {
      const response = await axios.get(
        "https://perpustakaan.itda.ac.id/api/json_login_mhs.php"
      );
      setDataLoginAll(response.data["data"]);
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
  }

  useEffect(() => {
    const fetchData = async () => {
      await getDataLogin();
      await getDataMahasiswa();
    };

    const timer = setTimeout(() => {
      fetchData();
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (dataLoginAll.length > 0 && dataMahasiswaAll.length > 0) {
      navigation.replace("Auth", { dataLoginAll, dataMahasiswaAll });
    }
  }, [dataLoginAll, dataMahasiswaAll, navigation]);

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
