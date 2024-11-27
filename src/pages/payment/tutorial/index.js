import React from 'react';
import { View, StyleSheet} from 'react-native';
import { COLORS, SIZES } from '../../../styles';
import Text from '../../../components/Text';

export default function Tutorial({ isVisible, onClose }) {
  const handleGesture = (event) => {
    const { translationY } = event.nativeEvent;
    if (translationY > 100) {
      onClose();
    }
  };

  return (
          <View style={LOCAL_STYLE.modalContent}>
            <Text bold center fontsize={SIZES.LargeText} color={COLORS.black}>Cara Pembayaran SPP</Text>
              <View style={{ marginTop: 5, }}>
                <View>
                  <Text bold color={COLORS.primary} fontsize={SIZES.mediumText}>BANK BNI (Transfer VA)</Text>
                </View>
                   <View style={LOCAL_STYLE.bulletItem}>
                      <View style={LOCAL_STYLE.bulletPoint}></View>
                      <Text bold color={COLORS.black} fontsize={SIZES.smallText} style={LOCAL_STYLE.text}>
                        Mengikuti format ( 836300+Kode BYR+NimMhs ) 
                      </Text>
                    </View>
                    <View style={LOCAL_STYLE.bulletItem}>
                      <View style={LOCAL_STYLE.bulletPoint}></View>
                      <Text bold color={COLORS.black} fontsize={SIZES.smallText} style={LOCAL_STYLE.text}>
                        Contoh: untuk SPP TETAP maka 8363000121020022
                      </Text>
                    </View> 
              </View>     
              <View style={{ marginTop: 5, }}>
                <View>
                  <Text bold color={COLORS.primary} fontsize={SIZES.mediumText}>BANK Mandiri (Transfer VA)</Text>
                </View>
                   <View style={LOCAL_STYLE.bulletItem}>
                      <View style={LOCAL_STYLE.bulletPoint}></View>
                      <Text bold color={COLORS.black} fontsize={SIZES.smallText} style={LOCAL_STYLE.text}>
                        Mengikuti format ( 87837+Kode BYR+NimMhs ) 
                      </Text>
                    </View>
                    <View style={LOCAL_STYLE.bulletItem}>
                      <View style={LOCAL_STYLE.bulletPoint}></View>
                      <Text bold color={COLORS.black} fontsize={SIZES.smallText} style={LOCAL_STYLE.text}>
                        Contoh: untuk SPP TETAP maka 878370121020022
                      </Text>
                    </View> 
              </View>     
              <View style={{ marginTop: 5, }}>
                <View>
                  <Text bold color={COLORS.primary} fontsize={SIZES.mediumText}>BANK Lain (Transfer VA)</Text>
                </View>
                   <View style={LOCAL_STYLE.bulletItem}>
                      <View style={LOCAL_STYLE.bulletPoint}></View>
                      <Text bold color={COLORS.black} fontsize={SIZES.smallText} style={LOCAL_STYLE.text}>
                        Mengikuti format ( 009+836300+Kode BYR+NimMhs ) 
                      </Text>
                    </View>
                    <View style={LOCAL_STYLE.bulletItem}>
                      <View style={LOCAL_STYLE.bulletPoint}></View>
                      <Text bold color={COLORS.black} fontsize={SIZES.smallText} style={LOCAL_STYLE.text}>
                        Contoh: untuk SPP TETAP maka 0098363000121020022
                      </Text>
                    </View> 
              </View>     
              <View style={{ marginTop: 15, }}>
                <View>
                  <Text bold color={COLORS.darkBlue} fontsize={SIZES.mediumText}>Kode Pembayaran lihat Kolom 'Kode BYR'</Text>
                  <Text bold color={COLORS.darkGray} fontsize={SIZES.mediumText} style={{ marginTop: -10, }}>*Jika terdapat kesalahan Data Pembayaran baik jumlah atau status bayar,. Silahkan KONFIRMASI ke Biro Keuangan</Text>
                </View>
                
              </View>     
          </View>
  );
}

const LOCAL_STYLE = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContent: {
    borderRadius: 20,
    padding: 25,
    marginTop: "-8%",
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
