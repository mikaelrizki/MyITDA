import {
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  View,
} from "react-native";
import ModalBox from "react-native-modalbox";
import IMAGES from "../../assets/images";
import { COLORS, SIZES } from "../../styles";
import Text from "../Text";
import ICONS from "../../assets/icons";

export default function DetailAnnouncement({
  showModal,
  onClosed,
  title,
  date,
  content,
  imageFile,
  fileName,
}) {
  return (
    <View
      style={{
        flex: 1,
        position: "absolute",
        width: Dimensions.get("screen").width,
        height: Dimensions.get("screen").height,
        justifyContent: "center",
        alignItems: "center",
        margin: 0,
      }}
    >
      <ModalBox
        backdropOpacity={0.6}
        swipeToClose={true}
        isOpen={showModal}
        onClosed={onClosed}
        entry={"bottom"}
        style={{ height: "70%", width: SIZES.width - 60, borderRadius: 35 }}
      >
        <ImageBackground
          resizeMode="content"
          source={IMAGES.bgDefault}
          imageStyle={{ borderRadius: 35 }}
          style={{
            flex: 1,
            width: "100%",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
            alignSelf: "center",
          }}
        >
          <View
            style={{
              width: "100%",
              height: ((SIZES.width - 60) / 318) * 184,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={IMAGES.imageDetailAnnouncement}
              style={{
                position: "absolute",
                borderTopLeftRadius: 35,
                borderTopRightRadius: 35,
                top: 0,
                left: 0,
                width: "100%",
                height: undefined,
                aspectRatio: 318 / 184,
              }}
              resizeMode="cover"
            />
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              paddingTop: 10,
              paddingHorizontal: 20,
            }}
          >
            <Text bold fontsize={16}>
              {title}
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingBottom: 12,
              }}
            >
              <Image
                source={ICONS.calendarIcon}
                style={{ width: 19, height: 19, marginRight: 10 }}
              />
              <Text medium fontsize={SIZES.smallText} padVertical={0}>
                {date}
              </Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={true} style={{ flex: 1 }}>
              <Text
                regular
                fontsize={SIZES.smallText}
                padVertical={0}
                style={{ paddingRight: 5 }}
              >
                {content}
              </Text>
            </ScrollView>
            <View
              style={{
                marginTop: 10,
                width: 125,
                height: 81,
                backgroundColor: COLORS.softGray,
                borderRadius: 5,
                borderColor: COLORS.lightGray,
                borderWidth: 3,
                marginBottom: 30,
              }}
            >
              <Image
                source={{ uri: imageFile }}
                style={{
                  width: SIZES.full,
                  height: 81 - 21,
                  borderTopLeftRadius: 3,
                  borderTopRightRadius: 3,
                }}
              />
              <Text
                medium
                fontsize={9}
                padVertical={0}
                style={{ marginTop: 1, marginLeft: 5 }}
              >
                {fileName}
              </Text>
            </View>
          </View>
        </ImageBackground>
      </ModalBox>
    </View>
  );
}
