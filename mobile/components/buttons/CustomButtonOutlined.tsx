import React from "react";
import { GestureResponderEvent, ViewStyle } from "react-native";
import { Button } from "react-native-paper";
import { IconSource } from "react-native-paper/lib/typescript/components/Icon";
import { TextStyle } from "react-native";

interface IPropsCustomButtonOutlined {
  label: string;
  textColor?: string;
  style?: TextStyle;
  icon?: IconSource;
  reverse?: boolean;
  onPress?: (e: GestureResponderEvent) => void;
}

const CustomButtonOutlined = ({
  label,
  textColor,
  style,
  icon,
  reverse,
  onPress,
}: IPropsCustomButtonOutlined) => {
  const reverseStyle: ViewStyle = reverse
    ? { flexDirection: "row-reverse" }
    : { flexDirection: "row" };

  return (
    <Button
      mode={"outlined"}
      onPress={onPress}
      icon={icon}
      contentStyle={reverseStyle}
      style={style}
      textColor={textColor ?? "#000000"}
    >
      {label}
    </Button>
  );
};

export default CustomButtonOutlined;
