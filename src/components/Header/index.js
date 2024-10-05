import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import Text from "../Text";
import { COLORS, SIZES } from "../../styles";
import ICONS from "../../assets/icons";

export default function Header({ onPress, title }) {
  return (
    <View style={LOCAL_STYLE.header}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={onPress}>
        <Image
          source={ICONS.logoKembali}
          style={{ width: 35, height: 35 }}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <Text color={"white"} bold fontsize={23} style={{ marginLeft: 15 }}>
        {title}
      </Text>
    </View>
  );
}

const LOCAL_STYLE = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: SIZES.padding2,
    backgroundColor: COLORS.primary,
    width: SIZES.full,
    height: "12%",
  },
});
