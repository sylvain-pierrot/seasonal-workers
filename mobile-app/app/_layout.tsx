import { Stack } from "expo-router";
import {
  IKeycloakConfiguration,
  KeycloakProvider,
} from "../providers/KeycloakProvider";
import AppConfig from "../app.json";
import React, { useRef } from "react";
import { Appbar, Menu, PaperProvider } from "react-native-paper";
import { ThemeSW } from "../constants/Themes";
import { useTranslation } from "react-i18next";
import CustomButtonText from "../components/buttons/CustomButtonText";
import { useKeycloak } from "../hooks/useKeycloak";
import CustomBottomSheet from "../components/CustomBottomSheet";
import BottomSheet from "@gorhom/bottom-sheet";
import { Lang } from "../constants/Lang";
import CustomTabAppBar from "../components/appBars/CustomTabAppBar";

export default function RootLayout() {
  const { t, i18n } = useTranslation();
  const { isLoggedIn, isLoading } = useKeycloak();
  const bottomSheetRef = useRef<BottomSheet>(null);

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
            headerShadowVisible: false,
            headerShown: !isLoggedIn,
            animation: "fade",
            header: (props) => {
              return (
                <CustomTabAppBar
                  title={t("welcome")}
                  icon="chevron-down"
                  canGoBack={props.navigation.canGoBack}
                  goBack={props.navigation.goBack}
                  actions={[
                    {
                      icon: "menu",
                      onPress: () => bottomSheetRef.current?.expand(),
                    },
                  ]}
                  reverse
                />
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
        </Stack>

        <CustomBottomSheet ref={bottomSheetRef}>
          <Menu.Item
            leadingIcon="translate"
            title="Langue"
            theme={{
              colors: {
                onSurfaceVariant:
                  i18n.language === Lang.En ? "#ab4b52" : "#318ce7",
              },
            }}
            onPress={() => {
              i18n.language === Lang.En
                ? i18n.changeLanguage(Lang.Fr)
                : i18n.changeLanguage(Lang.En);
            }}
          />
        </CustomBottomSheet>
      </PaperProvider>
    </KeycloakProvider>
  );
}
