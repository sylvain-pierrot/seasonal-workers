import React from "react";
import {
  NativeSyntheticEvent,
  TextInputFocusEventData,
  View,
} from "react-native";
import { HelperText, TextInput, Text } from "react-native-paper";
import { defaultStyles } from "../constants/Styles";

export interface IPropsCustomTextInput {
  value: string;
  label: string;
  caption?: string;
  helper?: boolean;
  helperLabel?: string;
  secureTextEntry?: boolean;
  right?: React.ReactNode;
  handleHelper?: (value: string) => boolean;
  handleChange: (value: string) => void;
  handleBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
}

const CustomTextInput = ({
  value,
  label,
  helper,
  caption,
  helperLabel,
  secureTextEntry,
  right,
  handleHelper,
  handleChange,
  handleBlur,
}: IPropsCustomTextInput) => {
  return (
    <View
      style={{ position: "relative", alignSelf: "stretch", marginBottom: 10 }}
    >
      <TextInput
        mode="outlined"
        placeholder={label}
        style={defaultStyles.input}
        outlineColor="transparent"
        onChangeText={handleChange}
        onBlur={handleBlur}
        value={value}
        secureTextEntry={secureTextEntry}
        right={right}
      />
      {caption && (
        <Text variant={"labelSmall"} style={{ textAlign: "justify" }}>
          {caption}
        </Text>
      )}
      {helper && handleHelper?.(value) && (
        <HelperText
          type={"error"}
          visible={handleHelper?.(value)}
          style={{ position: "absolute", top: -5, left: 4, color: "#FF0000" }}
        >
          {helperLabel}
        </HelperText>
      )}
    </View>
  );
};

export default CustomTextInput;
