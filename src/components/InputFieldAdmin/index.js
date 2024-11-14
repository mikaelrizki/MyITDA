import { TextInput, View } from "react-native";
import Text from "../Text";
import { COLORS, SIZES } from "../../styles";

export default function InputFieldAdmin({
  title,
  content,
  calendar,
  ...props
}) {
  return (
    <View style={{ marginTop: 10 }} {...props}>
      <Text semiBold fontsize={SIZES.mediumText}>
        {title}
      </Text>
      <TextInput
        keyboardType="text"
        placeholderTextColor={COLORS.primary}
        fontFamily={"semiBold"}
        multiline
        style={{
          color: COLORS.primary,
          fontSize: SIZES.smallText,
          padding: 9,
          fontFamily: "semiBold",
          width: SIZES.full,
          backgroundColor: COLORS.babyBlue,
          borderColor: COLORS.primary,
          borderWidth: 0.5,
          borderRadius: 10,
          textAlign: "auto",
          textAlignVertical: "center",
        }}
      />
    </View>
  );
}
