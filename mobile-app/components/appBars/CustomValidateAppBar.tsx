import {
  ActivityIndicator,
  Appbar,
  Icon,
  Text,
  useTheme,
} from "react-native-paper";
import React from "react";

interface IPropsCustomAppBar {
  title: string;
  isLoading: boolean;
  onCheck: () => Promise<void>;
  onClose: () => void;
}

const CustomValidateAppBar = ({
  title,
  isLoading,
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
        icon={() =>
          isLoading ? (
            <ActivityIndicator
              animating={true}
              color={theme.colors.primary}
              size={"small"}
            />
          ) : (
            <Icon source={"check"} size={30} color={theme.colors.primary} />
          )
        }
        onPress={onCheck}
      />
    </Appbar.Header>
  );
};

export default CustomValidateAppBar;
