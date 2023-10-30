import { Appbar } from "react-native-paper";
import React, { useRef } from "react";
import CustomButtonText from "../buttons/CustomButtonText";
import { IconSource } from "react-native-paper/lib/typescript/components/Icon";

interface IPropsCustomTabAppBar {
  title: string;
  icon?: IconSource;
  reverse?: boolean;
  actions?: { icon: IconSource; onPress: () => void }[];
  canGoBack: () => boolean;
  goBack: () => void;
}

const CustomTabAppBar = ({
  title,
  icon,
  reverse,
  actions,
  canGoBack,
  goBack,
}: IPropsCustomTabAppBar) => {
  return (
    <Appbar.Header>
      {canGoBack() && <Appbar.BackAction onPress={goBack} />}
      <Appbar.Content
        title={
          <CustomButtonText
            textColor="#000"
            label={title}
            icon={icon}
            variant={"titleLarge"}
            style={{
              alignSelf: "flex-start",
            }}
            sizeIcon={28}
            bold
            reverse={reverse}
          />
        }
      />

      {actions &&
        actions.map((action, key) => (
          <Appbar.Action
            key={key}
            color="#000000"
            size={30}
            icon={action.icon}
            onPress={action.onPress}
          />
        ))}
    </Appbar.Header>
  );
};

export default CustomTabAppBar;
