import React from "react";
import {
  NativeSyntheticEvent,
  TextInputFocusEventData,
  View,
  ViewStyle,
} from "react-native";
import { HelperText, TextInput, Text } from "react-native-paper";
import { defaultStyles } from "../constants/Styles";

export interface IPropsCustomTextInput {
  value: string;
  label?: string;
  placeholder?: string;
  caption?: string;
  helper?: boolean;
  helperLabel?: string;
  secureTextEntry?: boolean;
  right?: React.ReactNode;
  style?: ViewStyle;
  visibleHelper?: (value: string) => boolean;
  onChange: (value: string) => void;
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
}

const CustomTextInput = ({
  value,
  label,
  placeholder,
  helper,
  caption,
  helperLabel,
  secureTextEntry,
  right,
  style,
  visibleHelper,
  onChange,
  onBlur,
}: IPropsCustomTextInput) => {
  return (
    <View
      style={{ ...{ position: "relative", alignSelf: "stretch" }, ...style }}
    >
      <TextInput
        mode="outlined"
        label={label}
        placeholder={placeholder}
        style={defaultStyles.input}
        outlineColor="transparent"
        onChangeText={onChange}
        onBlur={onBlur}
        value={value}
        secureTextEntry={secureTextEntry}
        right={right}
      />
      {caption && (
        <Text variant={"labelSmall"} style={{ textAlign: "justify" }}>
          {caption}
        </Text>
      )}
      {helper && visibleHelper?.(value) && (
        <HelperText
          type={"error"}
          visible={visibleHelper?.(value)}
          style={{ position: "absolute", top: -5, left: 4, color: "#FF0000" }}
        >
          {helperLabel}
        </HelperText>
      )}
    </View>
  );
};

export default CustomTextInput;
