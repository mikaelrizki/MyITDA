import { View, Image, TouchableOpacity } from "react-native";
import { COLORS, SHADOWS, SIZES} from "../../styles";
import ICONS from "../../assets/icons";
import Text from "../../components/Text";

export default function ItemAnnouncement({
  announcementTitle,
  announcementDate,
  announcementContent,
  anouncementFileName,
  onPress
}) {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}
      style={[
        SHADOWS.shadowBox,
        {
          top: 15,
          width: "95%",
          height: 130,
          paddingTop: 16,
          padding: 18,
          shadowColor: "#9EB9CB",
          borderRadius: 10,
          backgroundColor: "white",
        },
      ]}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-end",
          width: SIZES.full,
        }}
      >
        <Text semiBold fontsize={SIZES.smallText} padVertical={0}>
          {announcementTitle}
        </Text>
        <Text medium fontsize={SIZES.extraSmallText} padVertical={0}>
          {announcementDate}
        </Text>
      </View>
      <Text
        medium
        fontsize={SIZES.extraSmallText}
        padVertical={12}
        style={{ color: COLORS.lightBlue }}
      >
        {announcementContent}
        {"... "}
      </Text>

      <View
        style={{
          flexDirection: "row",
          width: "47%",
          height: 28,
          borderColor: COLORS.lightBlue,
          borderWidth: 0.5,
          alignItems: "center",
          borderRadius: 50,
          paddingLeft: 10,
        }}
      >
        <Image
          source={ICONS.iconPDF}
          resizeMode="content"
          style={{ width: 15, height: 19, marginRight: 8 }}
        />
        <Text
          medium
          fontsize={SIZES.extraSmallText}
          padVertical={0}
          style={{ color: COLORS.lightBlue, marginRight: 8}}
        >
          {anouncementFileName}
          {"..."}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
