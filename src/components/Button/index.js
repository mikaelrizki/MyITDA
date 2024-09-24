import { TouchableOpacity } from "react-native";
import Text from "../Text";
import { COLORS, SIZES } from "../../styles";

export default function Button({
  title = "Submit",
  disable = false,
  ...props
}) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{
        width: SIZES.full,
        backgroundColor: disable ? COLORS.white : COLORS.primary,
        borderWidth: disable ? 2 : 0,
        borderColor: disable ? COLORS.primary : COLORS.transparent,
        borderRadius: SIZES.bigRadius,
        marginTop: 24,
        paddingVertical: 4,
      }}
      {...props}
    >
      <Text
        center
        bold
        fontsize={SIZES.mediumText}
        color={disable ? COLORS.primary : COLORS.white}
        padVertical={SIZES.padding}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}
