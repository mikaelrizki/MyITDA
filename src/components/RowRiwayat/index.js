import { View } from "react-native";
import Text from "../Text";
import { COLORS, SIZES } from "../../styles";

export default function RowRiwayat({ dataKey, dataValue, color}) {

    return (
        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: -10 }}>
            <Text bold fontsize={SIZES.smallText} color={COLORS.darkGray}>
              {dataKey}
          </Text>
          <Text bold fontsize={SIZES.smallText} color={color} right>
              {dataValue}
          </Text>
        </View>
    );
}
