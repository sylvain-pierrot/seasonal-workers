import { Appbar, Text, useTheme } from "react-native-paper";
import React from "react";

interface IPropsCustomAppBar {
  title: string;
  onCheck: () => void;
  onClose: () => void;
}

const CustomValidateAppBar = ({
  title,
  onCheck,
  onClose,
}: IPropsCustomAppBar) => {
  const theme = useTheme();

  return (
    <Appbar.Header
      style={{
        height: "auto",
      }}
      // statusBarHeight={0}
    >
      <Appbar.Action
        icon={"close"}
        iconColor={"#000000"}
        size={30}
        onPress={onClose}
      />
      <Appbar.Content title={<Text variant={"titleMedium"}>{title}</Text>} />
      <Appbar.Action
        icon={"check"}
        iconColor={theme.colors.primary}
        size={30}
        onPress={onCheck}
      />
    </Appbar.Header>
  );
};

export default CustomValidateAppBar;
