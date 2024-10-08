import { View } from "react-native";
import Text from "../Text";
import { SIZES } from "../../styles";

export default function ItemDataInfoMhs({ dataKey, dataValue }) {
  return (
    <View style={{ flexDirection: "row" }}>
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          width: 115,
        }}
      >
        <Text regular fontsize={SIZES.smallText} padVertical={3}>
          {dataKey}
        </Text>
        <Text regular fontsize={SIZES.smallText} padVertical={3}>
          :
        </Text>
      </View>
      <Text
        regular
        fontsize={SIZES.smallText}
        padVertical={3}
        paddingLeft={3}
        style={{textTransform: "capitalize"}}
      >
        {dataValue}
      </Text>
    </View>
  );
}
