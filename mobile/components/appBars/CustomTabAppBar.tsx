import { Appbar, Menu } from "react-native-paper";
import React, { useState } from "react";
import CustomButtonText from "../buttons/CustomButtonText";
import { IconSource } from "react-native-paper/lib/typescript/components/Icon";
import { GestureResponderEvent } from "react-native";

interface IPropsCustomTabAppBar {
  title: string;
  mode?: "button" | "menu";
  icon?: IconSource;
  reverse?: boolean;
  actions?: { icon: IconSource; onPress: () => void }[];
  onPress?: (e: GestureResponderEvent) => void;
  titleItems?: {
    title: string;
    icon: string;
    onPress?: (e: GestureResponderEvent) => void;
  }[];
  canGoBack: () => boolean;
  goBack: () => void;
}

const CustomTabAppBar = ({
  title,
  mode = "button",
  icon,
  reverse,
  actions,
  onPress,
  canGoBack,
  goBack,
  titleItems,
}: IPropsCustomTabAppBar) => {
  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  return (
    <Appbar.Header>
      {canGoBack() && <Appbar.BackAction onPress={goBack} />}
      <Appbar.Content
        title={
          <Menu
            visible={visible}
            onDismiss={closeMenu}
            anchorPosition={"bottom"}
            anchor={
              <CustomButtonText
                textColor="#000"
                label={title}
                icon={icon}
                variant={"titleLarge"}
                style={{
                  alignSelf: "flex-start",
                }}
                onPress={mode === "button" ? onPress : openMenu}
                sizeIcon={28}
                bold
                reverse={reverse}
              />
            }
            contentStyle={{ backgroundColor: "#FFFFFF" }}
          >
            {titleItems &&
              titleItems.map((item, key) => (
                <Menu.Item
                  key={key}
                  trailingIcon={item.icon}
                  onPress={item.onPress}
                  title={item.title}
                  dense
                  theme={{
                    colors: {
                      onSurfaceVariant: "#000000",
                    },
                  }}
                />
              ))}
          </Menu>
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
