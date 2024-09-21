import { TouchableOpacity } from "react-native";
import Text from "../Text";
import { COLORS, SIZES } from "../../styles";

export default function Button() {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{
        width: SIZES.full,
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.bigRadius,
        marginTop: 24,
      }}
    >
      <Text
        center
        bold
        fontsize={SIZES.mediumText}
        color={COLORS.white}
        padVertical={SIZES.padding}
      >
        Login
      </Text>
    </TouchableOpacity>
  );
}
