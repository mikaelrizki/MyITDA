import { useState } from "react";
import { Image, ImageBackground, TouchableOpacity } from "react-native";
import IMAGES from "../../assets/images";
import Text from "../../components/Text";
import Button from "../../components/Button";
import { COLORS, SIZES, STYLES } from "../../styles";
import InputField from "../../components/InputField";
import ICONS from "../../assets/icons";
import { useDispatch } from "react-redux";
import { setDataAuth } from "../../stores/actions/actionAuth";
import adapter from "../../services/adapter";
import { setDataBeasiswa } from "../../stores/actions/actionBeasiswa";
import { setDataPayment } from "../../stores/actions/actionPayment";
import { setYearnSmt } from "../../stores/actions/actionKHS";
import { setNilaiTranskrip } from "../../stores/actions/actionTranskrip";
import { setDataMahasiswa } from "../../stores/actions/actionMahasiswa";

export default function AuthScreen({ navigation, route }) {
  const dispatch = useDispatch();

  const [dataLogin, setDataLogin] = useState({
    nim: "",
    password: "",
  });
  const [showLoadingBar, setShowLoadingBar] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errorSubmit, setErrorSubmit] = useState(false);
  const [errorNim, setErrorNim] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);

  const { dataMahasiswaAll } = route.params || {};

  const handleLogin = async () => {
    setShowLoadingBar(true);
    const isAuth = await adapter.getAuth(dataLogin.nim, dataLogin.password);
    const dataMhsAll = dataMahasiswaAll || (await adapter.getDataMahasiswa());
    const mhsAvail = dataMhsAll.find((item) => item.nim === dataLogin.nim);
    const dataBeasiswa = await adapter.getDataBeasiswa(dataLogin.nim);
    const dataPayment = await adapter.getDataPayment(dataLogin.nim);
    const dataYearnSmt = await adapter.getDataYearnSmt(dataLogin.nim);
    const dataTranskrip = await adapter.getDataTranskrip(dataLogin.nim);
    if (isAuth && mhsAvail) {
      const dataMhs = dataMhsAll.filter((item) => item.nim == dataLogin.nim);
      dispatch(setDataAuth(dataLogin));
      dispatch(setDataMahasiswa(dataMhs));
      dispatch(setDataBeasiswa(dataBeasiswa));
      dispatch(setDataPayment(dataPayment));
      dispatch(setNilaiTranskrip(dataTranskrip));
      dispatch(setYearnSmt(dataYearnSmt));
      navigation.replace("Main");
    } else {
      setErrorNim(true);
      setErrorPassword(true);
      setErrorSubmit(true);
      setDataLogin({ nim: "", password: "" });
    }
    setShowLoadingBar(false);
  };

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
        isLoading={showLoadingBar}
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
