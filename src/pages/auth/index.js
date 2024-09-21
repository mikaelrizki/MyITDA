import { Button, Image, ImageBackground } from "react-native";
import IMAGES from "../../assets/images";
import Text from "../../components/Text";
// import Button from "../../components/Button";
import { COLORS, SIZES, STYLES } from "../../styles";
import InputField from "../../components/InputField";
import ICONS from "../../assets/icons";

export default function AuthScreen({ navigation }) {
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
        leftIcon={
          <Image
            source={ICONS.iconKey}
            style={{ width: 18, height: 14 }}
            resizeMode="contain"
          />
        }
        rightIcon={
          <Image
            source={ICONS.iconKey}
            style={{ width: 18, height: 14 }}
            resizeMode="contain"
          />
        }
      />
      {/* <Button /> */}
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Go to Report" onPress={() => navigation.navigate("Report")} />
      <Button title="Go to Payment" onPress={() => navigation.navigate("Payment")} />
    </ImageBackground>
  );
}
