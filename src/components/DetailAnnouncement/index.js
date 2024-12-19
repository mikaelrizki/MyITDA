import {
  ActivityIndicator,
  Alert,
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  View,
} from "react-native";
import { COLORS, SIZES } from "../../styles";
import { TouchableOpacity } from "react-native";
import { useState } from "react";
import ModalBox from "react-native-modalbox";
import IMAGES from "../../assets/images";
import Text from "../Text";
import ICONS from "../../assets/icons";
import * as FileSystem from "expo-file-system";
import * as Sharing from "expo-sharing";

export default function DetailAnnouncement({
  showModal,
  onClosed,
  title,
  date,
  content,
  imageFile,
  fileName,
}) {
  const [loading, setLoading] = useState(false);
  const fileExtension = imageFile.split(".").pop();

  const downloadAndHandleFile = async (fileUrl) => {
    setLoading(true);
    try {
      // Get file path
      const fileUri = `${FileSystem.documentDirectory}${fileUrl
        .split("/")
        .pop()}`;

      // Download file
      const { uri } = await FileSystem.downloadAsync(fileUrl, fileUri);

      // Open the image in the system's default viewer
      if (!(await Sharing.isAvailableAsync())) {
        Alert.alert("Error", "Opsi bagikan tidak tersedia di perangkat Anda.");
        return;
      }
      await Sharing.shareAsync(uri);
    } catch (error) {
      console.error("Error handling file:", error);
      Alert.alert("Error", "Gagal menangani file. Silakan coba lagi.");
    } finally {
      setLoading(false);
    }
  };

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
        swipeToClose={false}
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
              width: SIZES.full,
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
            <ScrollView
              showsVerticalScrollIndicator={true}
              overScrollMode={"never"}
              style={{ flex: 1 }}
            >
              <Text
                regular
                fontsize={SIZES.smallText}
                padVertical={0}
                style={{ paddingRight: 5, marginTop: 8 }}
              >
                {content}
              </Text>
            </ScrollView>
            <TouchableOpacity
              onPress={() => {
                downloadAndHandleFile(imageFile);
              }}
              style={{
                marginTop: 15,
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
                source={
                  fileExtension == "pdf" ? ICONS.iconPDF : { uri: imageFile }
                }
                style={{
                  width: SIZES.full,
                  height: fileExtension == "pdf" ? 40 : 81 - 21,
                  borderTopLeftRadius: 3,
                  borderTopRightRadius: 3,
                  marginVertical: fileExtension == "pdf" ? 10 : 0,
                  resizeMode: fileExtension == "pdf" ? "contain" : "cover",
                }}
              />
              <Text
                medium
                numberOfLines={1}
                fontsize={9}
                padVertical={0}
                style={{ marginTop: 1, marginLeft: 5 }}
              >
                {fileName}
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </ModalBox>
      {loading && (
        <ActivityIndicator
          color={COLORS.white}
          size="large"
          style={{
            flex: 1,
            width: SIZES.full,
            zIndex: 999,
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        />
      )}
    </View>
  );
}
