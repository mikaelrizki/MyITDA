import { Image, View } from "react-native";
import { SIZES } from "../../styles";
import Text from "../../components/Text";

export default function ItemSetting({ icon, value }) {

  const words = value ? value.split(" ") : ["-", "-"];
  let formattedValue = value;

  if (words.length > 2) {
    const firstTwoWords = words.slice(0, 2).join(" ");
    const remainingInitials = words
      .slice(2)
      .map((word) => word[0].toUpperCase())
      .join(" ");

    formattedValue = `${firstTwoWords} ${remainingInitials}`;
  }

  return (
    <View
      style={{
        flexDirection: "row",
        paddingHorizontal: 20,
        alignItems: "center",
      }}>
      <Image source={icon} style={{ width: 30, height: 29 }} />
      <Text bold fontsize={SIZES.smallText} style={{ paddingLeft: 20, paddingRight: 40, }}>
        {formattedValue}
      </Text>
    </View>
  );
}
