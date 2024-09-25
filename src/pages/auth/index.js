import { useState } from "react";
import { Image, ImageBackground, TouchableOpacity, View } from "react-native";
import IMAGES from "../../assets/images";
import Text from "../../components/Text";
import Button from "../../components/Button";
import { COLORS, SIZES, STYLES } from "../../styles";
import InputField from "../../components/InputField";
import ICONS from "../../assets/icons";

export default function AuthScreen({ navigation }) {
  const [dataLogin, setDataLogin] = useState({
    nim: "",
    password: "",
  });

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
        onChangeText={(value) => setDataLogin({ ...dataLogin, nim: value })}
        leftIcon={
          <Image
            source={ICONS.iconNIM}
            style={{ width: 20, height: 14 }}
            resizeMode="contain"
          />
        }
      />
      <InputField
        placeholder={"Password"}
        isPassword
        onChangeText={(value) =>
          setDataLogin({ ...dataLogin, password: value })
        }
        leftIcon={
          <Image
            source={ICONS.iconKey}
            style={{ width: 18, height: 14 }}
            resizeMode="contain"
          />
        }
      />
      <Button
        title="Login"
        onPress={() => {
          if (dataLogin.nim === "1234" && dataLogin.password === "admin") {
            navigation.navigate("Home");
          }
        }}
        disable={dataLogin.nim === "" || dataLogin.password === ""}
      />
      <View style={{ flexDirection: "row", marginTop: 10 }}>
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
      </View>
    </ImageBackground>
  );
}
