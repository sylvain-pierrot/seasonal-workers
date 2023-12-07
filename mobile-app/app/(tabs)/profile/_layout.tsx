import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { Stack } from "expo-router";
import React, { useCallback, useRef, useState } from "react";
import CustomBottomSheet from "../../../components/CustomBottomSheet";
import CustomTabAppBar from "../../../components/appBars/CustomTabAppBar";
import { Menu } from "react-native-paper";
import {
  makeRedirectUri,
  revokeAsync,
  useAutoDiscovery,
} from "expo-auth-session";
import AppConfig from "../../../app.json";
import * as WebBrowser from "expo-web-browser";
import { useDispatch, useSelector } from "react-redux";
import { setIsAuthenticated } from "../../../store/slices/authSlice";
import { useAuth } from "../../../hooks/useAuth";
import { useTranslation } from "react-i18next";
import { selectUserFormat } from "../../../store/slices/userSlice";

WebBrowser.maybeCompleteAuthSession();

export default function ProfileLayout() {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const clientId = process.env.EXPO_PUBLIC_OIDC_CLIENT_ID ?? "";
  const discovery = useAutoDiscovery(
    process.env.EXPO_PUBLIC_OIDC_DISCOVERY_URL ?? ""
  );
  const redirectUri = makeRedirectUri({
    scheme: AppConfig.expo.scheme,
    path: "/",
  });

  const handleExpandBottomSheet = useCallback(
    () => bottomSheetModalRef.current?.present(),
    []
  );
  const { getTokens, removeTokens } = useAuth();
  const user = useSelector(selectUserFormat);
  const [isCheck, setIsCheck] = useState(false);

  const handleSignOut = async () => {
    if (!discovery) return;

    const tokens = await getTokens();
    if (!tokens) return;

    // Use Promise.all to parallelize the asynchronous operations
    await Promise.all([
      revokeAsync({ token: tokens.accessToken }, discovery),
      removeTokens(),
    ]);

    dispatch(setIsAuthenticated({ isAuth: false }));

    await WebBrowser.openAuthSessionAsync(
      `${discovery.endSessionEndpoint!}?client_id=${clientId}&post_logout_redirect_uri=${redirectUri}&id_token_hint=${
        tokens.idToken
      }`,
      redirectUri
    );
  };

  const items = [
    {
      icon: "cog-outline",
      title: t("auth.pages.profile.layout.bottom-sheet.settings"),
      onPress: () => {},
    },
    {
      icon: "history",
      title: t("auth.pages.profile.layout.bottom-sheet.archives"),
      onPress: () => {},
    },
    {
      icon: "chart-line",
      title: t("auth.pages.profile.layout.bottom-sheet.activity"),
      onPress: () => {},
    },
    {
      icon: "translate",
      title: t(i18n.language),
      onPress: () => {
        const newLanguage = i18n.language === "en" ? "fr" : "en";
        i18n.changeLanguage(newLanguage);
      },
    },
    {
      icon: "logout-variant",
      title: t("auth.pages.profile.layout.bottom-sheet.logout"),
      onPress: handleSignOut,
      color: "#FF0000",
    },
  ];

  return (
    <>
      <Stack
        screenOptions={{
          contentStyle: {
            backgroundColor: "transparent",
          },
          animation: "slide_from_right",
          // animationDuration: 100,
          header: (props) => {
            switch (props.route.name) {
              case "index":
                return (
                  <CustomTabAppBar
                    title={user.username}
                    icon="chevron-down"
                    canGoBack={() =>
                      props.navigation.canGoBack() &&
                      props.route.name !== "index"
                    }
                    goBack={props.navigation.goBack}
                    actions={[
                      {
                        icon: "menu",
                        onPress: handleExpandBottomSheet,
                      },
                    ]}
                    onPress={() => {
                      console.log("TEST");
                    }}
                    reverse
                  />
                );
              case "experience":
                return (
                  <CustomTabAppBar
                    title={"Create experience"}
                    canGoBack={() =>
                      props.navigation.canGoBack() &&
                      props.route.name !== "index"
                    }
                    goBack={props.navigation.goBack}
                  />
                );
            }
          },
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="modify" />
        <Stack.Screen name="experience" />
      </Stack>

      <CustomBottomSheet ref={bottomSheetModalRef}>
        {items.map((item, key) => (
          <Menu.Item
            key={key}
            leadingIcon={item.icon}
            title={item.title}
            theme={{
              colors: {
                onSurface: item.color,
                onSurfaceVariant: item.color ? item.color : "#000000",
              },
            }}
            onPress={item.onPress}
          />
        ))}
      </CustomBottomSheet>
    </>
  );
}
