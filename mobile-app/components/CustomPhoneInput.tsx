import React from "react";
import {
  NativeSyntheticEvent,
  TextInputFocusEventData,
  View,
} from "react-native";
import { TextInput, useTheme } from "react-native-paper";
import PhoneInput from "react-native-phone-input";
import { defaultStyles } from "../constants/Styles";

interface IPropsCustomPhoneInput {
  value: string;
  label: string;
  handleChange: (value: string) => void;
  handleBlur: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
}

const CustomPhoneInput = ({
  value,
  label,
  handleChange,
  handleBlur,
}: IPropsCustomPhoneInput) => {
  const theme = useTheme();

  return (
    <PhoneInput
      style={{
        ...defaultStyles.input,
        ...{
          flexDirection: "row-reverse",
          justifyContent: "space-between",
          marginBottom: 10,
          marginRight: -11,
        },
      }}
      flagStyle={{ marginHorizontal: 20 }}
      onPressFlag={() => {}}
      textComponent={TextInput}
      textProps={{
        value,
        placeholder: label,
        style: {
          fontFamily: theme.fonts.default.fontFamily,
          fontStyle: theme.fonts.default.fontStyle,
          fontWeight: theme.fonts.default.fontWeight,
          letterSpacing: theme.fonts.default.letterSpacing,
        },
        onChange(e) {
          handleChange(e.nativeEvent.text);
        },
        onBlur(e) {
          handleBlur(e);
        },
        mode: "outlined",
        outlineColor: "transparent",
      }}
    />
  );
};

export default CustomPhoneInput;
