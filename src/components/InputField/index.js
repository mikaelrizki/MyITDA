import { StyleSheet, TextInput, View } from "react-native";
import { COLORS, SIZES } from "../../styles";

export default function InputField({
  placeholder,
  keyboardType = "default",
  isPassword = false,
  value,
  error,
  rightIcon,
  leftIcon,
  ...props
}) {
  return (
    <View
      style={{
        backgroundColor: error ? COLORS.lightWarning : COLORS.secondary,
        borderWidth: 2,
        borderColor: error ? COLORS.warning : COLORS.secondary,
        borderRadius: SIZES.bigRadius,
        marginTop: 24,
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      {leftIcon && <View style={LOCAL_STYLE.inputIcon}>{leftIcon}</View>}
      <TextInput
        selectionColor={COLORS.primary}
        keyboardType={keyboardType}
        secureTextEntry={isPassword}
        placeholder={placeholder}
        placeholderTextColor={error ? COLORS.warning : COLORS.primary}
        fontFamily={'semiBold'}
        value={value}
        style={{
          flex: 1,
          color: error ? COLORS.warning : COLORS.primary,
          fontSize: SIZES.mediumText,
          paddingVertical: SIZES.padding,
          paddingRight: !rightIcon && 20,
          fontFamily: "semiBold",
        }}
        {...props}
      />
      {rightIcon && <View style={LOCAL_STYLE.inputIcon}>{rightIcon}</View>}
    </View>
  );
}

const LOCAL_STYLE = StyleSheet.create({
  inputIcon: {
    width: 50,
    height: SIZES.full,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});