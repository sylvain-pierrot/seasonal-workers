import React from "react";
import {
  NativeSyntheticEvent,
  TextInputFocusEventData,
  TextStyle,
} from "react-native";
import { TextInput } from "react-native-paper";
import { defaultStyles } from "../../constants/Styles";

export interface IPropsCustomTextAreaInput {
  value: string;
  label?: string;
  placeholder?: string;
  style?: TextStyle;
  onChange: (value: string) => void;
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
}

const CustomTextAreaInput = ({
  value,
  label,
  placeholder,
  style,
  onChange,
  onBlur,
}: IPropsCustomTextAreaInput) => {
  return (
    <TextInput
      mode="outlined"
      label={label}
      placeholder={placeholder}
      style={{ ...defaultStyles.input, ...style }}
      outlineColor="transparent"
      onChangeText={onChange}
      onBlur={onBlur}
      value={value}
      numberOfLines={4}
      multiline
    />
  );
};

export default CustomTextAreaInput;
