import { useState } from "react";
import {
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";
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
import { setNilaiKHS, setYearnSmt } from "../../stores/actions/actionKHS";
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

  const handleLogin = async () => {
    if (
      dataLogin.nim === "963852741" ||
      dataLogin.password === "adminITDA@2024"
    ) {
      navigation.replace("MainAdmin");
      return;
    }
    setShowLoadingBar(true);
    const isAuth = await adapter.getAuth(dataLogin.nim, dataLogin.password);
    const dataBeasiswa = await adapter.getDataBeasiswa(dataLogin.nim);
    const dataPayment = await adapter.getDataPayment(dataLogin.nim);
    const dataYearnSmt = await adapter.getDataYearnSmt(dataLogin.nim);
    const dataTranskrip = await adapter.getDataTranskrip(dataLogin.nim);
    const dataMhs = await adapter.getDataMhsbyNIM(dataLogin.nim);
    const mhsAvail = dataMhs?.length > 0;
    console.log(mhsAvail);
    const allDataKHS = {};

    if (isAuth && dataMhs && mhsAvail) {
      dispatch(setDataAuth(dataLogin));
      dispatch(setDataMahasiswa(dataMhs));
      dispatch(setDataBeasiswa(dataBeasiswa));
      dispatch(setDataPayment(dataPayment));
      dispatch(setNilaiTranskrip(dataTranskrip));

      if (Array.isArray(dataYearnSmt)) {
        for (const item of dataYearnSmt) {
          const { year, semesters } = item;
          if (Array.isArray(semesters)) {
            for (const sem of semesters) {
              const dataKHS = await adapter.getDataKHS(
                dataLogin.nim,
                year,
                sem
              );
              allDataKHS[`${year}-${sem}`] = dataKHS;
            }
          }
        }
      }
      console.log("[AUTH]", allDataKHS);
      dispatch(setYearnSmt(dataYearnSmt));
      dispatch(setNilaiKHS(allDataKHS));
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
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
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
              value.length === 0
                ? setErrorPassword(true)
                : setErrorPassword(false);
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
        </ImageBackground>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}
