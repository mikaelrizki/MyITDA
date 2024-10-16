import { Image, View } from "react-native";
import { SIZES } from "../../styles";
import Text from "../../components/Text";

export default function ItemSetting({
  icon,
  value,
}) {
  return (
    <View
      style={{
        flexDirection: "row",
        paddingHorizontal: 20,
        alignItems: "center",
      }}
    >
      <Image source={icon} style={{ width: 30, height: 29 }} />
      <Text bold fontsize={SIZES.smallText} style={{ paddingLeft: 20 }}>
        {value}
      </Text>
    </View>
  );
}
