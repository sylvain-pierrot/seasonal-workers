import { Slot, Stack } from "expo-router";
import {
  IKeycloakConfiguration,
  KeycloakProvider,
} from "../providers/KeycloakProvider";
import AppConfig from "../app.json";
import React from "react";
import { Appbar, PaperProvider } from "react-native-paper";
import { ThemeSW } from "../constants/Themes";
import { useTranslation } from "react-i18next";
import { Lang } from "../constants/Lang";

export default function RootLayout() {
  const { t, i18n } = useTranslation();

  const keycloakConfiguration: IKeycloakConfiguration = {
    clientId: "AGENT_007",
    realm: "myrealm",
    url: "http://localhost:8080",
    scheme: AppConfig.expo.scheme,
  };

  return (
    <KeycloakProvider {...keycloakConfiguration}>
      <PaperProvider
        settings={{
          rippleEffectEnabled: true,
        }}
        theme={ThemeSW}
      >
        <Stack
          screenOptions={{
            contentStyle: {
              backgroundColor: "transparent",
            },
            headerTitleStyle: {
              fontSize: 30,
            },
            headerShadowVisible: false,
            header: (props) => {
              return (
                <Appbar.Header>
                  {props.route.name !== "sign-in" && (
                    <Appbar.BackAction onPress={props.navigation.goBack} />
                  )}
                  <Appbar.Content title={props.options.title} />
                  <Appbar.Action
                    color={i18n.language === Lang.En ? "#ab4b52" : "#318ce7"}
                    icon="translate"
                    onPress={() => {
                      i18n.language === Lang.En
                        ? i18n.changeLanguage(Lang.Fr)
                        : i18n.changeLanguage(Lang.En);
                    }}
                  />
                </Appbar.Header>
              );
            },
          }}
        >
          <Stack.Screen name="(tabs)" options={{ title: t("(tabs).title") }} />
          <Stack.Screen
            name="sign-in"
            options={{ title: t("sign-in.title") }}
          />
          <Stack.Screen
            name="sign-up"
            options={{ title: t("sign-up.title") }}
          />
          <Stack.Screen
            name="forgot-password"
            options={{ title: t("forgot-password.title") }}
          />
          {/* <Slot /> */}
        </Stack>
      </PaperProvider>
    </KeycloakProvider>
  );
}
