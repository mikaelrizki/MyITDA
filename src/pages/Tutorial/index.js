import React from 'react';
import { View, StyleSheet, ScrollView, Button } from 'react-native';
import Modal from 'react-native-modal';
import { PanGestureHandler, GestureHandlerRootView } from 'react-native-gesture-handler';
import Text from '../../components/Text';
import { COLORS, SIZES } from '../../styles';

export default function Tutorial({ isVisible, onClose }) {
  const handleGesture = (event) => {
    const { translationY } = event.nativeEvent;
    if (translationY > 100) {
      onClose();
    }
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Modal
        isVisible={isVisible}
        onBackdropPress={onClose}
        style={LOCAL_STYLE.modal}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        swipeDirection="down"
        onSwipeComplete={onClose}
        swipeThreshold={100}
      >
        <PanGestureHandler onGestureEvent={handleGesture}>
          <View style={LOCAL_STYLE.modalContent}>
            <View style={LOCAL_STYLE.closeBar}></View>
            <Text bold center fontsize={SIZES.LargeText} color={COLORS.black}>Cara Pembayaran SPP</Text>
              <View style={{ marginTop: 5, }}>
                <View>
                  <Text bold color={COLORS.primary} fontsize={SIZES.mediumText}>BANK BNI</Text>
                </View>
                   <View style={LOCAL_STYLE.bulletItem}>
                      <View style={LOCAL_STYLE.bulletPoint}></View>
                      <Text bold color={COLORS.black} fontsize={SIZES.smallText} style={LOCAL_STYLE.text}>
                        Student Payment Center (SPC) BNI (ATM, Teller, Mobile Banking) dengan menyebutkan NIM
                      </Text>
                    </View>
                    <View style={LOCAL_STYLE.bulletItem}>
                      <View style={LOCAL_STYLE.bulletPoint}></View>
                      <Text bold color={COLORS.black} fontsize={SIZES.smallText} style={LOCAL_STYLE.text}>
                        Virtual Account BNI dengan Nomor Virtual Account : 9887891271210681
                      </Text>
                    </View> 
              </View>
              <View style={{ marginTop: 5, }}>
                <View>
                  <Text bold color={COLORS.primary} fontsize={SIZES.mediumText}>BANK BRI</Text>
                </View>
                   <View style={LOCAL_STYLE.bulletItem}>
                      <View style={LOCAL_STYLE.bulletPoint}></View>
                      <Text bold color={COLORS.black} fontsize={SIZES.smallText} style={LOCAL_STYLE.text}>
                        Melalui Teller dengan menyebutkan NIM
                      </Text>
                    </View>
                    <View style={LOCAL_STYLE.bulletItem}>
                      <View style={LOCAL_STYLE.bulletPoint}></View>
                      <Text bold color={COLORS.black} fontsize={SIZES.smallText} style={LOCAL_STYLE.text}>
                        Melalui Nomor Virtual Account 135150271210681
                      </Text>
                    </View> 
              </View>
              <View style={{ marginTop: 5, }}>
                <View>
                  <Text bold color={COLORS.primary} fontsize={SIZES.mediumText}>BANK BPD-DIY</Text>
                </View>
                   <View style={LOCAL_STYLE.bulletItem}>
                      <View style={LOCAL_STYLE.bulletPoint}></View>
                      <Text bold color={COLORS.black} fontsize={SIZES.smallText} style={LOCAL_STYLE.text}>
                        Melalui ATM, Teller dan Mobile Banking - di seluruh kantor layanan dan ATM BANK BPD DIY dengan menyebutkan NIM
                      </Text>
                    </View>
              </View>   
              <View style={{ marginTop: 5, }}>
                <View>
                  <Text bold color={COLORS.primary} fontsize={SIZES.mediumText}>BANK MANDIRI</Text>
                </View>
                   <View style={LOCAL_STYLE.bulletItem}>
                      <View style={LOCAL_STYLE.bulletPoint}></View>
                      <Text bold color={COLORS.black} fontsize={SIZES.smallText} style={LOCAL_STYLE.text}>
                        Melalui Nomor Virtual Account 8889000271210681
                      </Text>
                    </View>
              </View>         
          </View>
        </PanGestureHandler>
      </Modal>
    </GestureHandlerRootView>
  );
}

const LOCAL_STYLE = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContent: {
    backgroundColor: COLORS.secondary,
    borderRadius: 20,
    padding: 25,
  },
  closeBar: {
      backgroundColor: COLORS.lightGray,
      width: 40,
      height: 5,
      borderRadius: 20,
      alignSelf: "center",
      marginTop: -8
  },
  bulletItem: {
    flexDirection: "row",
    alignItems: "flex-start"
  },
  bulletPoint: {
    width: 5,
    height: 5,
    borderRadius: 4,
    backgroundColor: COLORS.black,
    marginRight: 7,
    marginTop: 10,
  },
  text:{
    marginTop: -7,
    textAlign: "justify"
  },
});
