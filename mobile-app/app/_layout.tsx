import { Slot, Stack } from "expo-router";
import {
  IKeycloakConfiguration,
  KeycloakProvider,
} from "../providers/KeycloakProvider";
import AppConfig from "../app.json";
import React from "react";
import { PaperProvider } from "react-native-paper";
import { ThemeSW } from "../constants/Themes";

export default function RootLayout() {
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
          rippleEffectEnabled: false,
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
          }}
        >
          <Slot />
        </Stack>
      </PaperProvider>
    </KeycloakProvider>
  );
}
