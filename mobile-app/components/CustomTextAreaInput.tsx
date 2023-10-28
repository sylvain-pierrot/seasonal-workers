import React from "react";
import { NativeSyntheticEvent, TextInputFocusEventData } from "react-native";
import { TextInput } from "react-native-paper";
import { defaultStyles } from "../constants/Styles";

export interface IPropsCustomTextAreaInput {
  value: string;
  label: string;
  handleChange: (value: string) => void;
  handleBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
}

const CustomTextAreaInput = ({
  value,
  label,
  handleChange,
  handleBlur,
}: IPropsCustomTextAreaInput) => {
  return (
    <TextInput
      mode="outlined"
      placeholder={label}
      style={{ ...defaultStyles.input, ...{ marginBottom: 10 } }}
      outlineColor="transparent"
      onChangeText={handleChange}
      onBlur={handleBlur}
      value={value}
      numberOfLines={4}
      multiline
    />
  );
};

export default CustomTextAreaInput;
