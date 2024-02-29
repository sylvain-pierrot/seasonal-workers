import {
  AuthRequest,
  AuthRequestConfig,
  Prompt,
  ResponseType,
  exchangeCodeAsync,
  makeRedirectUri,
  useAutoDiscovery,
} from "expo-auth-session";
import { router } from "expo-router";
import * as WebBrowser from "expo-web-browser";
import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { View } from "react-native";
import { ActivityIndicator, useTheme } from "react-native-paper";
import uuid from "react-native-uuid";
import AppConfig from "../app.json";
import CustomButtonContained from "../components/buttons/CustomButtonContained";
import { defaultStyles } from "../constants/Styles";
import { useDispatch } from "react-redux";
import { useAuth } from "../hooks/useAuth";

WebBrowser.maybeCompleteAuthSession();

export default function SignIn() {
  const them = useTheme();
  const { t } = useTranslation();
  const clientId = process.env.EXPO_PUBLIC_OIDC_CLIENT_ID || "";
  const redirectUri = makeRedirectUri({
    scheme: AppConfig.expo.scheme,
    path: "/",
  });
  const discovery = useAutoDiscovery(
    process.env.EXPO_PUBLIC_OIDC_DISCOVERY_URL || ""
  );
  const { setTokens } = useAuth();
  const dispatch = useDispatch();

  const handleSignIn = useCallback(async () => {
    if (!discovery) return;

    const state = uuid.v4().toString();
    const authRequestOptions: AuthRequestConfig = {
      responseType: ResponseType.Code,
      clientId,
      redirectUri,
      prompt: Prompt.Login,
      scopes: ["openid", "profile", "email"],
      state: state,
      usePKCE: true,
    };

    // PromptAsync
    const authRequest = new AuthRequest(authRequestOptions);
    const authSessionResult = await authRequest.promptAsync(discovery, {
      toolbarColor: them.colors.primary,
      createTask: false,
    });

    if (authSessionResult.type === "success") {
      const { code } = authSessionResult.params;

      const tokenResponse = await exchangeCodeAsync(
        {
          code,
          clientId,
          redirectUri,
          extraParams: {
            code_verifier: authRequest.codeVerifier || "",
          },
        },
        discovery
      );

      if (!tokenResponse.idToken || !tokenResponse.refreshToken) return;

      await setTokens({
        accessToken: tokenResponse.accessToken,
        idToken: tokenResponse.idToken,
        refreshToken: tokenResponse.refreshToken,
      });

      // Navigate after signing in. You may want to tweak this to ensure sign-in is
      // successful before navigating.
      router.replace("/");
    }
  }, [discovery]);

  // wait loading request Discovery
  if (!discovery || !discovery.authorizationEndpoint) {
    return (
      <ActivityIndicator
        animating={true}
        color={"#000"}
        size={"large"}
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      />
    );
  }

  return (
    <View style={defaultStyles.container}>
      <CustomButtonContained
        label={t("no-auth.pages.connect.action")}
        onPress={handleSignIn}
        style={{ marginBottom: 10, alignSelf: "stretch" }}
        // disabled={isLoading}
      />
    </View>
  );
}
