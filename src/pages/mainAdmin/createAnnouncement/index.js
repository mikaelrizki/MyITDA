import { View } from "react-native";
import ItemAnnouncement from "../../../components/ItemAnnouncement";
import { SIZES } from "../../../styles";
import Text from "../../../components/Text";

export default function CreateAnnouncementScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        width: SIZES.full,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text bold>HAIIIII</Text>
    </View>
  );
}
