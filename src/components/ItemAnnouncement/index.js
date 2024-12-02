import { View, Image, TouchableOpacity } from "react-native";
import { COLORS, SHADOWS, SIZES } from "../../styles";
import ICONS from "../../assets/icons";
import Text from "../../components/Text";

export default function ItemAnnouncement({
  lastList,
  announcementTitle,
  announcementDate,
  announcementContent,
  announcementFileName,
  announcementFileType,
  onPress,
  onAdmin = false,
  onPressDelete,
}) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
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
          marginBottom: lastList ? 40 : 20,
          marginLeft: 9,
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
        <Text
          semiBold
          fontsize={SIZES.smallText}
          padVertical={0}
          numberOfLines={1}
          style={{ flex: 1, marginRight: 15 }}
        >
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
        numberOfLines={2}
      >
        {announcementContent}
      </Text>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
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
            paddingRight: 15,
          }}
        >
          <Image
            source={
              announcementFileType == "pdf" ? ICONS.iconPDF : ICONS.imgFile
            }
            resizeMode="center"
            style={{
              width: announcementFileType == "pdf" ? 19 : 14,
              height: 19,
              marginRight: 6,
            }}
          />
          <Text
            medium
            fontsize={SIZES.extraSmallText}
            padVertical={0}
            style={{ color: COLORS.lightBlue, flex: 1 }}
            numberOfLines={1}
          >
            {announcementFileName}
          </Text>
        </View>
        {onAdmin && <TouchableOpacity
          onPress={onPressDelete}
          style={{
            flexDirection: "row",
            height: 28,
            backgroundColor: COLORS.warning,
            alignItems: "center",
            borderRadius: 50,
            paddingHorizontal: 15,
            zIndex: 100,
          }}
        >
          <Text
            semiBold
            fontsize={SIZES.extraSmallText}
            padVertical={0}
            color={COLORS.white}
            numberOfLines={1}
          >
            Hapus
          </Text>
        </TouchableOpacity>}
      </View>
    </TouchableOpacity>
  );
}
