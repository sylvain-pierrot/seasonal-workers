import React from "react";
import { GestureResponderEvent, TextStyle } from "react-native";
import { Button } from "react-native-paper";
import { defaultStyles } from "../../constants/Styles";

interface IPropsCustomButtonContained {
  label: string;
  textColor?: string;
  style?: TextStyle;
  onPress?: (e: GestureResponderEvent) => void;
}

const CustomButtonContained = ({
  label,
  textColor,
  style,
  onPress,
}: IPropsCustomButtonContained) => {
  return (
    <Button
      mode={"contained"}
      onPress={onPress}
      style={{ ...defaultStyles.button, ...style }}
      textColor={textColor}
    >
      {label}
    </Button>
  );
};

export default CustomButtonContained;
