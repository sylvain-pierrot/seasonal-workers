import React from "react";
import { GestureResponderEvent, StyleSheet, TextStyle } from "react-native";
import { Button, useTheme } from "react-native-paper";
import { defaultStyles } from "../../constants/Styles";

interface IPropsCustomButtonText {
  label: string;
  textColor?: string;
  style?: TextStyle;
  onPress?: (e: GestureResponderEvent) => void;
}

const CustomButtonText = ({
  label,
  textColor,
  style,
  onPress,
}: IPropsCustomButtonText) => {
  const theme = useTheme();

  return (
    <Button
      mode={"text"}
      onPress={onPress}
      style={{ ...defaultStyles.button, ...styles.text, ...style }}
      textColor={textColor}
    >
      {label}
    </Button>
  );
};

export default CustomButtonText;

const styles = StyleSheet.create({
  text: {
    // backgroundColor: "#F3F3F3",
    // borderRadius: 10,
    // color: "#000000",
  },
});
