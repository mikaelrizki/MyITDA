import { useState } from "react";
import { Image, ImageBackground, TouchableOpacity } from "react-native";
import IMAGES from "../../assets/images";
import Text from "../../components/Text";
import Button from "../../components/Button";
import { COLORS, SIZES, STYLES } from "../../styles";
import InputField from "../../components/InputField";
import ICONS from "../../assets/icons";
import md5 from "md5";
import { useDispatch } from "react-redux";
import { setDataAuth } from "../../stores/actions/actionAuth";
import axios from "axios";

export default function AuthScreen({ navigation, route }) {
  const dispatch = useDispatch();

  const [dataLogin, setDataLogin] = useState({
    nim: "",
    password: "",
  });
  const [isAuth, setIsAuth] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errorSubmit, setErrorSubmit] = useState(false);
  const [errorNim, setErrorNim] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);

  const { dataMahasiswaAll } = route.params;

  const getAuth = async () => {
    try {
      const formData = new FormData();
      formData.append("username", dataLogin.nim);
      formData.append("password", dataLogin.password);

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

  const handleLogin = async () => {
    await getAuth();
    const mhsAvail = dataMahasiswaAll.find(
      (item) => item.nim === dataLogin.nim
    );
    if (isAuth && mhsAvail) {
      const dataMhs = dataMahasiswaAll.filter(
        (item) => item.nim == dataLogin.nim
      );
      dispatch(setDataAuth(dataLogin));
      navigation.replace("Main", { dataMhs });
    } else {
      setErrorNim(true);
      setErrorPassword(true);
      setErrorSubmit(true);
      setDataLogin({ nim: "", password: "" });
    }
  }

  return (
    <ImageBackground
      source={IMAGES.bgDefault}
      style={[STYLES.container, { paddingHorizontal: 40 }]}
    >
      <Image
        source={IMAGES.logoITDA}
        style={{ height: 100, marginBottom: 10 }}
        resizeMode="contain"
      />
      <Text center bold fontsize={SIZES.LargeText}>
        Selamat Datang!
      </Text>
      <Text
        medium
        center
        fontsize={SIZES.mediumText}
        color={COLORS.gray}
        padVertical={0}
      >
        Silahkan login untuk masuk ke aplikasi
      </Text>
      <InputField
        placeholder={"NIM"}
        keyboardType={"number-pad"}
        value={dataLogin.nim}
        onChangeText={(value) => {
          value = value.replace(/\s/g, "");
          value.length === 0 ? setErrorNim(true) : setErrorNim(false);
          setDataLogin({ ...dataLogin, nim: value });
          setErrorSubmit(false);
        }}
        error={errorNim}
        leftIcon={
          <Image
            source={errorNim ? ICONS.warningNIM : ICONS.iconNIM}
            style={{ width: 20, height: 14 }}
            resizeMode="contain"
          />
        }
      />
      {errorNim && !errorSubmit && (
        <Text
          semiBold
          center
          color={COLORS.warning}
          padVertical={0}
          style={{ marginTop: 16, marginBottom: -8 }}
        >
          NIM harus diisi.
        </Text>
      )}
      <InputField
        placeholder={"Password"}
        isPassword={!showPassword}
        value={dataLogin.password}
        onChangeText={(value) => {
          value.length === 0 ? setErrorPassword(true) : setErrorPassword(false);
          setDataLogin({ ...dataLogin, password: value });
          setErrorSubmit(false);
        }}
        error={errorPassword}
        leftIcon={
          <Image
            source={errorPassword ? ICONS.warningKey : ICONS.iconKey}
            style={{ width: 18, height: 14 }}
            resizeMode="contain"
          />
        }
        rightIcon={
          <TouchableOpacity
            onPress={() => {
              setShowPassword(!showPassword);
              console.log(showPassword);
            }}
          >
            <Image
              source={
                showPassword && errorPassword
                  ? ICONS.warningClosedEye
                  : !showPassword && errorPassword
                  ? ICONS.warningOpenEye
                  : showPassword && !errorPassword
                  ? ICONS.iconClosedEye
                  : ICONS.iconOpenEye
              }
              style={{ width: 18, height: 14 }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        }
      />
      {(errorPassword || errorSubmit) && (
        <Text
          semiBold
          center
          color={COLORS.warning}
          padVertical={0}
          style={{ marginTop: 16, marginBottom: -8 }}
        >
          {errorSubmit
            ? "NIM atau Password tidak sesuai."
            : "Password harus diisi."}
        </Text>
      )}
      <Button
        title="Login"
        onPress={handleLogin}
        disable={dataLogin.nim === "" || dataLogin.password === ""}
      />
      {/* <View style={{ flexDirection: "row", marginTop: 10 }}>
        <Text medium center color={COLORS.gray}>
          Lupa Password? {""}
        </Text>
        <TouchableOpacity onPress={() => console.log("ResetScreen")}>
          <Text medium center underline color={COLORS.primary}>
            Reset
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row", gap: 5 }}>
        <Text medium center color={COLORS.gray}>
          Move Page?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Text medium center underline color={COLORS.primary}>
            Home
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Report")}>
          <Text medium center underline color={COLORS.primary}>
            Nilai
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Payment")}>
          <Text medium center underline color={COLORS.primary}>
            Pembayaran
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Main")}>
          <Text medium center underline color={COLORS.warning}>
            Main
          </Text>
        </TouchableOpacity>
      </View> */}
    </ImageBackground>
  );
}
