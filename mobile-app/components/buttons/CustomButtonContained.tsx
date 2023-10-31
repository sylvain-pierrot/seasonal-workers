import React from "react";
import { GestureResponderEvent, TextStyle, ViewStyle } from "react-native";
import { Button } from "react-native-paper";
import { defaultStyles } from "../../constants/Styles";
import { IconSource } from "react-native-paper/lib/typescript/components/Icon";

interface IPropsCustomButtonContained {
  label: string;
  textColor?: string;
  style?: TextStyle;
  icon?: IconSource;
  reverse?: boolean;
  onPress?: (e: GestureResponderEvent) => void;
}

const CustomButtonContained = ({
  label,
  textColor,
  style,
  icon,
  reverse,
  onPress,
}: IPropsCustomButtonContained) => {
  const reverseStyle: ViewStyle = reverse
    ? { flexDirection: "row-reverse" }
    : { flexDirection: "row" };

  return (
    <Button
      mode={"contained"}
      onPress={onPress}
      icon={icon}
      contentStyle={reverseStyle}
      style={style}
      textColor={textColor}
    >
      {label}
    </Button>
  );
};

export default CustomButtonContained;
