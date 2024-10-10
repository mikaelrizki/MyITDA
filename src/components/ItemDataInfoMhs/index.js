import { View } from "react-native";
import Text from "../Text";
import { SIZES } from "../../styles";

export default function ItemDataInfoMhs({ dataKey, dataValue, capitalize = true }) {
  return (
    <View style={{ flexDirection: "row", flex: 1 }}>
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          width: 105,
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
        style={{ textTransform: capitalize ? "capitalize" : '', flex: 1, paddingRight: 15 }}
      >
        {dataValue}
      </Text>
    </View>
  );
}
