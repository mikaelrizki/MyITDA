import { TextInput, View } from "react-native";
import Text from "../Text";
import { COLORS, SIZES } from "../../styles";

export default function InputFieldAdmin({
  title,
  content,
  calendar,
  styles,
  ...props
}) {
  return (
    <View style={[{ marginTop: 10 }, styles]}>
      <Text semiBold fontsize={SIZES.mediumText}>
        {title}
      </Text>
      <TextInput
        selectionColor={COLORS.primary}
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
        {...props}
      />
    </View>
  );
}
