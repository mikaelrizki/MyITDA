import { TouchableOpacity, StyleSheet, View } from "react-native";
import Text from "../Text";
import { COLORS, SIZES } from "../../styles";

export default function ButtonPembayaran({ navigation, title, rightIcon }) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={navigation}
      style={{
        width: 298,
        backgroundColor: COLORS.secondary,
        borderRadius: 50,
        marginTop: 15,
        padding: 10,
        paddingLeft: 30,
      }}
    >
      <View style={LOCAL_STYLE.row}>
        <Text
          left
          bold
          fontsize={SIZES.mediumText}
          color={COLORS.primary}
        >
            {title}
        </Text>
        {rightIcon && <View style={LOCAL_STYLE.icon}>{rightIcon}</View>}
      </View>
    </TouchableOpacity>
  );
}

const LOCAL_STYLE = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  icon: {
    marginTop: 4,
    marginRight: 10
  }
});
