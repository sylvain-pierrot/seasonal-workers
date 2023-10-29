import { Stack } from "expo-router";
import React from "react";
import { useTranslation } from "react-i18next";
import { Appbar, Text } from "react-native-paper";

export default function ProfileLayout() {
  const { t, i18n } = useTranslation();

  return (
    <Stack
      screenOptions={{
        contentStyle: {
          backgroundColor: "transparent",
        },
        headerShadowVisible: false,
        header: (props) => {
          return (
            <>
              {!["index"].includes(props.route.name) && (
                <Appbar.Header
                  style={{
                    height: "auto",
                  }}
                  statusBarHeight={0}
                >
                  <Appbar.BackAction
                    onPress={props.navigation.goBack}
                    style={{ margin: 0 }}
                  />
                </Appbar.Header>
              )}
            </>
          );
        },
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="modify" />
    </Stack>
  );
}
