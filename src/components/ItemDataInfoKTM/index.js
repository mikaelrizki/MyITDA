import { View } from "react-native";
import Text from "../Text";
import { SIZES } from "../../styles";

export default function ItemDataInfoKTM({ dataKey, dataValue }) {
  return (
    <View style={{ flexDirection: "row", flex: 1 }}>
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
        style={{ textTransform: "capitalize", flex: 1, paddingRight: 5 }}
        numberOfLines={1}
      >
        {dataValue}
      </Text>
    </View>
  );
}
