import React from "react";
import { GestureResponderEvent } from "react-native";
import { Button } from "react-native-paper";
import { defaultStyles } from "../constants/Styles";

interface IPropsCustomButton {
  mode?: "outlined" | "text" | "contained" | "elevated" | "contained-tonal";
  label: string;
  onPress?: (e: GestureResponderEvent) => void;
}

const CustomButton = ({ mode, label, onPress }: IPropsCustomButton) => {
  const buttonStyle = mode === "outlined" ? { textColor: "#000000" } : {};

  return (
    <Button
      mode={mode}
      onPress={onPress}
      style={defaultStyles.button}
      {...buttonStyle}
    >
      {label}
    </Button>
  );
};

export default CustomButton;
