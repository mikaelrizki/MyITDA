import { Image, TextInput, View } from "react-native";
import { COLORS, SIZES } from "../../styles";

export default function InputField({
  placeholder,
  keyboardType = "text",
  isPassword = false,
  icon
}) {
  return (
    <View
      style={{
        width: 350,
        backgroundColor: COLORS.secondary,
        paddingVertical: SIZES.padding,
        paddingHorizontal: 24,
        borderRadius: SIZES.bigRadius,
        marginTop: 24,
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Image
        source={icon}
        style={{ width: 20, height: 14, marginRight: 20, marginVertical: 0 }}
        resizeMode="contain"
      />
      <TextInput
        keyboardType={keyboardType}
        secureTextEntry={isPassword}
        placeholder={placeholder}
        placeholderTextColor={COLORS.primary}
        style={{
          flex: 1,
          color: COLORS.primary,
          fontSize: SIZES.mediumText,
          fontFamily: "semiBold",
        }}
      />
    </View>
  );
}
