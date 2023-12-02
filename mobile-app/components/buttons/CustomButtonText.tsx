import React from "react";
import { GestureResponderEvent, TextStyle, ViewStyle } from "react-native";
import { Button, Text } from "react-native-paper";
import { IconSource } from "react-native-paper/lib/typescript/components/Icon";
import { VariantProp } from "react-native-paper/lib/typescript/components/Typography/types";

interface IPropsCustomButtonText {
  label: string;
  textColor?: string;
  icon?: IconSource;
  reverse?: boolean;
  variant?: VariantProp<never>;
  style?: TextStyle;
  sizeIcon?: number;
  bold?: boolean;
  onPress?: (e: GestureResponderEvent) => void;
}

const CustomButtonText = ({
  label,
  textColor,
  icon,
  reverse,
  variant,
  style,
  sizeIcon,
  bold,
  onPress,
}: IPropsCustomButtonText) => {
  const reverseStyle: ViewStyle = { flexDirection: "row-reverse" };
  const iconStyle: TextStyle = sizeIcon ? { fontSize: sizeIcon } : {};
  const boldStyle: TextStyle = bold ? { fontWeight: "bold" } : {};

  return (
    <Button
      mode={"text"}
      onPress={onPress}
      icon={icon}
      textColor={textColor}
      contentStyle={reverse ? reverseStyle : {}}
      style={style}
      labelStyle={iconStyle}
      compact
    >
      <Text variant={variant} style={{ ...boldStyle, ...{ color: textColor } }}>
        {label}
      </Text>
    </Button>
  );
};

export default CustomButtonText;
