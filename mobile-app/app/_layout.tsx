import { Slot } from "expo-router";
// import {
//   IKeycloakConfiguration,
//   KeycloakProvider,
// } from "../providers/KeycloakProvider";
// import AppConfig from "../app.json";
import React from "react";
import { PaperProvider } from "react-native-paper";
import { ThemeSW } from "../constants/Themes";

// Prevent the splash screen from auto-hiding before asset loading is complete.
// SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  // const [loaded, error] = useFonts({
  //   SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  //   ...FontAwesome.font,
  // });

  // // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  // useEffect(() => {
  //   if (error) throw error;
  // }, [error]);

  // useEffect(() => {
  //   if (loaded) {
  //     SplashScreen.hideAsync();
  //   }
  // }, [loaded]);

  // if (!loaded) {
  //   return null;
  // }

  // const keycloakConfiguration: IKeycloakConfiguration = {
  //   clientId: "AGENT_007",
  //   realm: "myrealm",
  //   url: "http://localhost:8080",
  //   scheme: AppConfig.expo.scheme,
  // };

  return (
    // <KeycloakProvider {...keycloakConfiguration}>
    <PaperProvider theme={ThemeSW}>
      <Slot />
    </PaperProvider>
    // </KeycloakProvider>
  );
}
