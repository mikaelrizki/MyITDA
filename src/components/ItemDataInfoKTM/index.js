import { View } from "react-native";
import Text from "../Text";
import { SIZES } from "../../styles";

export default function ItemDataInfoKTM({ dataKey, dataValue }) {
  return (
    <View style={{ flexDirection: "row" }}>
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          width: 46,
        }}
      >
        <Text medium fontsize={SIZES.extraSmallText} padVertical={1}>
          {dataKey}
        </Text>
        <Text medium fontsize={SIZES.extraSmallText} padVertical={1}>
          :
        </Text>
      </View>
      <Text
        medium
        fontsize={SIZES.extraSmallText}
        padVertical={1}
        paddingLeft={3}
        style={{textTransform: "capitalize"}}
      >
        {dataValue}
      </Text>
    </View>
  );
}
