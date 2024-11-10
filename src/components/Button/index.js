import { Image, TouchableOpacity } from "react-native";
import { COLORS, SIZES } from "../../styles";
import ICONS from "../../assets/icons";
import Text from "../Text";

export default function Button({
  title = "Submit",
  disable = false,
  isLoading = false,
  ...props
}) {
  return (
    <TouchableOpacity
      disabled={disable}
      activeOpacity={0.8}
      style={{
        height: 52,
        width: SIZES.full,
        backgroundColor: disable ? COLORS.white : COLORS.primary,
        borderWidth: disable ? 2 : 0,
        borderColor: disable ? COLORS.primary : COLORS.transparent,
        borderRadius: SIZES.bigRadius,
        marginTop: 24,
        paddingVertical: 4,
        justifyContent: "center",
        alignItems: "center",
      }}
      {...props}
    >
      {isLoading ? (
        <Image source={ICONS.loadingBar} style={{ width: 40, height: 20 }} />
      ) : (
        <Text
          center
          bold
          fontsize={SIZES.mediumText}
          color={disable ? COLORS.primary : COLORS.white}
          padVertical={0}
        >
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
}
