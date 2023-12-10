import React from "react";
import { View, ViewStyle } from "react-native";
import { Text } from "react-native-paper";
import { IconSource } from "react-native-paper/lib/typescript/components/Icon";
import { VariantProp } from "react-native-paper/lib/typescript/components/Typography/types";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

interface IPropsCustomTextIcon {
  text: string;
  variant?: VariantProp<never>;
  icon: string;
  iconColor?: string;
  reverse?: boolean;
  style?: ViewStyle;
}

const CustomTextIcon = ({
  text,
  variant,
  icon,
  iconColor,
  reverse,
  style,
}: IPropsCustomTextIcon) => {
  const reverseStyle: ViewStyle = reverse
    ? { flexDirection: "row-reverse" }
    : { flexDirection: "row" };

  return (
    <View
      style={{
        ...{ alignItems: "center", alignSelf: "stretch" },
        ...reverseStyle,
        ...style,
      }}
    >
      <Icon
        size={24}
        name={icon}
        color={iconColor}
        style={{ marginRight: 8 }}
      />
      <Text variant={variant}>{text}</Text>
    </View>
  );
};

export default CustomTextIcon;
