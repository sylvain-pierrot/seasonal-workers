import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import { Stack } from "expo-router";
import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Menu, PaperProvider, Portal, Text, Modal } from "react-native-paper";
import CustomBottomSheet from "../components/CustomBottomSheet";
import CustomTabAppBar from "../components/appBars/CustomTabAppBar";
import { Lang } from "../constants/Lang";
import { ThemeSW } from "../constants/Themes";
import { Provider as StoreProvider } from "react-redux";
import store from "../store";
import { decode, encode } from "base-64";
import { Buffer } from "buffer";

// Overwrite for jwt-decode on react native
global.Buffer = Buffer;
global.atob = decode;
global.btoa = encode;

export default function RootLayout() {
  const { t, i18n } = useTranslation();
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  return (
    <StoreProvider store={store}>
      <PaperProvider
        settings={{
          rippleEffectEnabled: false,
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
              animation: "fade",
              header: (props) => {
                if (["connect", "sign-up"].includes(props.route.name)) {
                  return (
                    <CustomTabAppBar
                      title={t("no-auth.bar.title")}
                      icon="chevron-down"
                      mode={"menu"}
                      titleItems={[
                        {
                          title: t(i18n.language),
                          icon: "translate",
                          onPress: () => {
                            const newLanguage =
                              i18n.language === "en" ? "fr" : "en";
                            i18n.changeLanguage(newLanguage);
                          },
                        },
                      ]}
                      canGoBack={() =>
                        props.route.name !== "connect" ||
                        props.navigation.canGoBack()
                      }
                      goBack={props.navigation.goBack}
                      onPress={() => {}}
                      actions={[
                        {
                          icon: "information-outline",
                          onPress: showModal,
                        },
                      ]}
                      reverse
                    />
                  );
                }
              },
            }}
          >
            <Stack.Screen
              name="(tabs)"
              options={{ title: t("(tabs).title") }}
            />
            <Stack.Screen
              name="connect"
              options={{ title: t("connect.title") }}
            />
            <Stack.Screen
              name="sign-up"
              options={{ title: t("sign-up.title") }}
            />
          </Stack>

          <Portal>
            <Modal
              visible={visible}
              onDismiss={hideModal}
              contentContainerStyle={{
                backgroundColor: "white",
                paddingHorizontal: 30,
                paddingVertical: 40,
                marginHorizontal: 20,
                borderRadius: 30,
              }}
            >
              <Text
                variant={"titleLarge"}
                style={{
                  color: "#007FFF",
                  textAlign: "center",
                  marginBottom: 15,
                }}
              >
                {t("no-auth.bar.actions.info.title")}
              </Text>
              <Text variant={"bodyMedium"} style={{ textAlign: "justify" }}>
                {t("no-auth.bar.actions.info.body")}
              </Text>
            </Modal>
          </Portal>

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
    </StoreProvider>
  );
}
