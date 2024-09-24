import { TouchableOpacity, Image } from "react-native";
import Text from "../Text";
import { COLORS, SIZES } from "../../styles";
import ICONS from "../../assets/icons";

export default function Button({
  value = "Login",
  backgroundColor = false,
  color = false,
  next = false,
  space = false,
  margin = false,
}) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[
        {
          width: SIZES.full,
          backgroundColor: backgroundColor ? COLORS.secondary : COLORS.primary,
          borderRadius: SIZES.bigRadius,
          marginTop: 24,
          flexDirection: "row",
          justifyContent: space ? "space-between" : "center",
          alignItems: "center",
        },
        margin && { paddingHorizontal: 20 },
      ]}
    >
      <Text
        center
        bold
        fontsize={SIZES.mediumText}
        padVertical={SIZES.padding}
        style={{
          color: color ? COLORS.primary : COLORS.white,
        }}
      >
        {value}
      </Text>
      {next && (
        <Image
          source={ICONS.next}
          style={{ width: 24, height: 24, marginLeft: 10 }}
        />
      )}
    </TouchableOpacity>
  );
}
