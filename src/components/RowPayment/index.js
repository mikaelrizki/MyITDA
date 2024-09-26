import { View } from "react-native";
import Text from "../Text";
import { COLORS, SIZES } from "../../styles";

export default function RowPayment({ dataKey, dataValue, color}) {

    return (
        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: -10 }}>
            <Text
                bold
                fontsize={SIZES.mediumText}
                color={color}
            >
                {dataKey}
            </Text>
            <Text
                bold
                fontsize={SIZES.mediumText}
                color={color}
                right
            >
                {dataValue}
            </Text>
        </View>
    );
}
