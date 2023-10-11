import {
  FC,
  PropsWithChildren,
  createContext,
  useCallback,
  useEffect,
  useState,
} from "react";
import React from "react";
import {
  TokenResponse,
  AuthRequestConfig,
  makeRedirectUri,
  useAuthRequest,
  useAutoDiscovery,
  AuthSessionResult,
  DiscoveryDocument,
} from "expo-auth-session";
import * as AuthSession from "expo-auth-session";
import useAsyncStorage from "../hooks/useAsyncStorage";

export const AuthContext = createContext<{
  signIn: () => void;
  signOut: () => void;
  isLoading: boolean;
  isLoggedIn: boolean;
  tokens: { accessToken: string } | null;
}>({
  signIn: () => console.error("KC Not Initialized."),
  signOut: () => console.error("Not Logged In."),
  isLoading: false,
  isLoggedIn: false,
  tokens: null,
});

const NATIVE_REDIRECT_PATH = "auth/redirect";
const TOKEN_STORAGE_KEY = "$KEYCLOAK_AUTH_TOKEN$";
const REFRESH_TIME_BUFFER = 10;

const getRealmURL = (config: IKeycloakConfiguration) => {
  const { url, realm } = config;
  const slash = url.endsWith("/") ? "" : "/";
  return `${url + slash}realms/${encodeURIComponent(realm)}`;
};

interface IHandleTokenExchange {
  response: AuthSessionResult | null;
  discovery: DiscoveryDocument | null;
  config: AuthRequestConfig;
}

const handleTokenExchange = async ({
  response,
  discovery,
  config,
}: IHandleTokenExchange): Promise<{ tokens: TokenResponse } | null> => {
  try {
    if (response?.type === "success" && !!discovery?.tokenEndpoint) {
      const tokens = await AuthSession.exchangeCodeAsync(
        { code: response.params.code, ...config },
        discovery
      );
      return { tokens };
    }

    if (response?.type === "error") {
      return null;
    }

    return null;
  } catch {
    return null;
  }
};

export interface IKeycloakConfiguration extends Partial<AuthRequestConfig> {
  clientId: string;
  disableAutoRefresh?: boolean;
  nativeRedirectPath?: string;
  realm: string;
  refreshTimeBuffer?: number;
  scheme?: string;
  tokenStorageKey?: string;
  url: string;
}

export const KeycloakProvider: FC<PropsWithChildren<IKeycloakConfiguration>> = (
  props
) => {
  const discovery = useAutoDiscovery(getRealmURL(props));
  const redirectUri = makeRedirectUri({
    native: `${props.scheme ?? "exp"}://${
      props.nativeRedirectPath ?? NATIVE_REDIRECT_PATH
    }`,
    // useProxy: !props.scheme,
  });
  const [savedTokens, saveTokens, hydrated] =
    useAsyncStorage<TokenResponse | null>(
      props.tokenStorageKey ?? TOKEN_STORAGE_KEY,
      null
    );
  const config: AuthRequestConfig = { redirectUri, ...props };
  const [request, response, promptAsync] = useAuthRequest(
    { usePKCE: false, ...config },
    discovery
  );
  const [refreshHandle, setRefreshHandle] = useState<any>(null);

  const updateState = useCallback(
    (callbackValue: any) => {
      const tokens = callbackValue?.tokens ?? null;
      if (!!tokens) {
        saveTokens(tokens);
        if (
          !props.disableAutoRefresh &&
          !!(tokens as TokenResponse).expiresIn
        ) {
          clearTimeout(refreshHandle);
          setRefreshHandle(
            setTimeout(
              handleTokenRefresh,
              ((tokens as TokenResponse).expiresIn! -
                (props.refreshTimeBuffer ?? REFRESH_TIME_BUFFER)) *
                1000
            )
          );
        }
      } else {
        saveTokens(null);
        clearTimeout(refreshHandle);
        setRefreshHandle(null);
      }
    },
    [saveTokens, refreshHandle, setRefreshHandle]
  );

  const handleTokenRefresh = useCallback(() => {
    if (!hydrated) return;
    if (!savedTokens && hydrated) {
      updateState(null);
      return;
    }
    if (TokenResponse.isTokenFresh(savedTokens!)) {
      updateState({ tokens: savedTokens });
    }
    if (!discovery)
      throw new Error("KC Not Initialized. - Discovery not ready.");
    AuthSession.refreshAsync(
      { refreshToken: savedTokens!.refreshToken, ...config },
      discovery!
    )
      .catch(updateState)
      .then(updateState);
  }, [discovery, hydrated, savedTokens, updateState]);

  const handleLogin = useCallback(async () => {
    clearTimeout(refreshHandle);
    return promptAsync();
  }, [promptAsync, refreshHandle]);

  const handleLogout = useCallback(
    async (everywhere?: boolean) => {
      if (!savedTokens) throw new Error("Not logged in.");
      if (everywhere) {
        AuthSession.revokeAsync(
          { token: savedTokens?.accessToken!, ...config },
          discovery!
        ).catch((e) => console.error(e));
        saveTokens(null);
      } else {
        AuthSession.dismiss();
        saveTokens(null);
      }
    },
    [discovery, savedTokens]
  );

  useEffect(() => {
    if (hydrated) handleTokenRefresh();
  }, [hydrated]);

  useEffect(() => {
    handleTokenExchange({ response, discovery, config }).then(updateState);
  }, [response]);

  return (
    <AuthContext.Provider
      value={{
        signIn: handleLogin,
        signOut: handleLogout,
        isLoading: request !== null,
        isLoggedIn: !props.disableAutoRefresh && !!savedTokens,
        tokens: savedTokens,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
