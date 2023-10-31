import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import { Stack } from "expo-router";
import React, { useCallback, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Menu, PaperProvider } from "react-native-paper";
import AppConfig from "../app.json";
import CustomBottomSheet from "../components/CustomBottomSheet";
import CustomTabAppBar from "../components/appBars/CustomTabAppBar";
import { Lang } from "../constants/Lang";
import { ThemeSW } from "../constants/Themes";
import { useKeycloak } from "../hooks/useKeycloak";
import {
  IKeycloakConfiguration,
  KeycloakProvider,
} from "../providers/KeycloakProvider";

export default function RootLayout() {
  const { t, i18n } = useTranslation();
  const { isLoggedIn, isLoading } = useKeycloak();
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const handleExpandBottomSheet = useCallback(
    () => bottomSheetModalRef.current?.present(),
    []
  );

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
        <BottomSheetModalProvider>
          <Stack
            initialRouteName="(tabs)"
            screenOptions={{
              contentStyle: {
                backgroundColor: "transparent",
              },
              headerShadowVisible: false,
              headerShown: isLoggedIn,
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
                        onPress: () => handleExpandBottomSheet,
                      },
                    ]}
                    reverse
                  />
                );
              },
            }}
          >
            <Stack.Screen
              name="(tabs)"
              options={{ title: t("(tabs).title") }}
            />
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

          <CustomBottomSheet ref={bottomSheetModalRef}>
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
        </BottomSheetModalProvider>
      </PaperProvider>
    </KeycloakProvider>
  );
}
