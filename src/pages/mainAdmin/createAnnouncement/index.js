import { Image, ScrollView, TouchableOpacity, View } from "react-native";
import { COLORS, SIZES } from "../../../styles";
import Text from "../../../components/Text";
import ICONS from "../../../assets/icons";
import InputFieldAdmin from "../../../components/InputFieldAdmin";
import { useState } from "react";
import * as DocumentPicker from "expo-document-picker";

export default function CreateAnnouncementScreen({
  openDatePickerRange,
  startDate,
  endDate,
}) {
  const [selectedDocument, setSelectedDocument] = useState(null);
  const [documentName, setDocumentName] = useState(null);
  const [documentType, setDocumentType] = useState(null);

  const pickDocument = async () => {
    const result = await DocumentPicker.getDocumentAsync({
      type: ["application/pdf", "image/jpg", "image/jpeg"],
    });

    if (result.canceled === false) {
      if (result.assets[0].size <= 10 * 1024 * 1024) {
        setDocumentName(result.assets[0].name);
        setSelectedDocument(result.assets[0].uri);
        if (result.assets[0].mimeType === "application/pdf") {
          setDocumentType(result.assets[0].mimeType);
        } else {
          setDocumentType(null);
        }
      } else {
        alert(
          "File yang dipilih terlalu besar. Silakan pilih file yang ukurannya kurang dari 10 MB."
        );
      }
    }

    console.log(result.assets[0].uri);
  };

  const submitForm = async () => {
    alert("Apakah Anda Yakin?");
  };
  return (
    <ScrollView
      persistentScrollbar={true}
      style={{
        flex: 1,
        width: SIZES.width - 10,
        paddingRight: 30,
        paddingLeft: 40,
        marginBottom: 50,
      }}
    >
      <InputFieldAdmin
        title={"Judul Pengumuman"}
        calendar={false}
        style={{ marginTop: 0 }}
      />
      <View style={{ marginTop: 10 }}>
        <Text semiBold fontsize={SIZES.mediumText}>
          Tanggal Pengumuman
        </Text>
        <TouchableOpacity
          onPress={openDatePickerRange}
          style={{
            height: 46,
            width: SIZES.full,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: COLORS.babyBlue,
            borderColor: COLORS.primary,
            borderWidth: 0.5,
            borderRadius: 10,
          }}
        >
          <Text
            semiBold
            fontsize={SIZES.smallText}
            style={{ flex: 1, padding: 9 }}
          >
            {startDate && `${startDate} - ${endDate}`}
          </Text>
          <Image
            source={ICONS.calendarAdmin}
            style={{ height: 24, width: 24, marginRight: 10 }}
          />
        </TouchableOpacity>
      </View>
      <InputFieldAdmin title={"Isi Pengumuman"} content />
      <View style={{ marginTop: 10 }}>
        <Text semiBold fontsize={SIZES.mediumText}>
          Unggah Lampiran
        </Text>
        <TouchableOpacity
          onPress={pickDocument}
          style={{
            width: SIZES.full,
            height: 140,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: COLORS.babyBlue,
            borderColor: COLORS.primary,
            borderStyle: "dashed",
            borderWidth: 1.2,
            borderRadius: 10,
          }}
        >
          {!selectedDocument && (
            <Image
              source={ICONS.uploadFile}
              style={{ width: 32, height: 32 }}
            />
          )}
          {!selectedDocument && (
            <Text
              bold
              fontsize={SIZES.smallText}
              padVertical={0}
              paddingTop={2}
            >
              Unggah File di Sini
            </Text>
          )}
          {selectedDocument && (
            <Image
              source={documentType ? ICONS.pdfFile : { uri: selectedDocument }}
              resizeMode="contain"
              style={{ width: 90, height: 90 }}
            />
          )}
          {selectedDocument && (
            <Text semiBold fontsize={11} padVertical={0} paddingTop={5}>
              {documentName}
            </Text>
          )}
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={submitForm}
        style={{
          width: SIZES.full,
          height: 46,
          backgroundColor: COLORS.primary,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 10,
          marginTop: 40,
          marginBottom: 10,
        }}
      >
        <Text bold fontsize={SIZES.mediumText} color={COLORS.white}>
          Submit
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
