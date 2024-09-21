import { Button, Image, ImageBackground } from "react-native";
import IMAGES from "../../assets/images";
import Text from "../../components/Text";
import { COLORS, SIZES } from "../../styles";
import InputField from "../../components/InputField";
import ICONS from "../../assets/icons";

export default function AuthScreen({ navigation }) {
  return (
    <ImageBackground
      source={IMAGES.bgDefault}
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
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
      <InputField placeholder={"NIM"} icon={ICONS.iconNIM} />
      <InputField placeholder={"Password"} isPassword icon={ICONS.iconKey} />
      {/* <Button
        title="Go to Home"
        onPress={() => navigation.navigate("Splash")}
      /> */}
    </ImageBackground>
  );
}
