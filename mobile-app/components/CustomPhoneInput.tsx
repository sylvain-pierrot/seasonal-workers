import React from "react";
import {
  NativeSyntheticEvent,
  TextInputFocusEventData,
  View,
  ViewStyle,
} from "react-native";
import { TextInput, useTheme } from "react-native-paper";
import PhoneInput from "react-native-phone-input";
import { defaultStyles } from "../constants/Styles";

interface IPropsCustomPhoneInput {
  value: string;
  label?: string;
  placeholder?: string;
  style?: ViewStyle;
  onChange: (value: string) => void;
  onBlur: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
}

const CustomPhoneInput = ({
  value,
  label,
  placeholder,
  style,
  onChange,
  onBlur,
}: IPropsCustomPhoneInput) => {
  const theme = useTheme();

  return (
    <PhoneInput
      style={{
        ...defaultStyles.input,
        ...{
          flexDirection: "row-reverse",
          justifyContent: "space-between",
          marginRight: -11,
        },
        ...style,
      }}
      flagStyle={{ marginHorizontal: 20 }}
      onPressFlag={() => {}}
      textComponent={TextInput}
      textProps={{
        value,
        label: label,
        placeholder: placeholder,
        style: {
          fontFamily: theme.fonts.default.fontFamily,
          fontStyle: theme.fonts.default.fontStyle,
          fontWeight: theme.fonts.default.fontWeight,
          letterSpacing: theme.fonts.default.letterSpacing,
        },
        onChange(e) {
          onChange(e.nativeEvent.text);
        },
        onBlur(e) {
          onBlur(e);
        },
        mode: "outlined",
        outlineColor: "transparent",
      }}
    />
  );
};

export default CustomPhoneInput;
