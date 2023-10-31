import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { Stack } from "expo-router";
import React, { useCallback, useRef } from "react";
import CustomBottomSheet from "../../../components/CustomBottomSheet";
import CustomTabAppBar from "../../../components/appBars/CustomTabAppBar";
import CustomValidateAppBar from "../../../components/appBars/CustomValidateAppBar";
import { Menu } from "react-native-paper";

export default function ProfileLayout() {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const handleExpandBottomSheet = useCallback(
    () => bottomSheetModalRef.current?.present(),
    []
  );

  return (
    <>
      <Stack
        screenOptions={{
          contentStyle: {
            backgroundColor: "transparent",
          },
          animation: "slide_from_right",
          header: (props) => {
            switch (props.route.name) {
              case "modify":
                return (
                  <CustomValidateAppBar
                    title={"Modifier le profil"}
                    onCheck={() => {}}
                    onClose={props.navigation.goBack}
                  />
                );
              default:
                return (
                  <CustomTabAppBar
                    title="Franck"
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
                    reverse
                  />
                );
            }
          },
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="modify" />
      </Stack>

      <CustomBottomSheet ref={bottomSheetModalRef}>
        <Menu.Item
          leadingIcon="cog-outline"
          title="Paramètres et confidentialité"
          theme={{
            colors: {
              onSurfaceVariant: "#000000",
            },
          }}
          onPress={() => {}}
        />
        <Menu.Item
          leadingIcon="history"
          title="Archives"
          theme={{
            colors: {
              onSurfaceVariant: "#000000",
            },
          }}
          onPress={() => {}}
        />
        <Menu.Item
          leadingIcon="chart-line"
          title="Votre activité"
          theme={{
            colors: {
              onSurfaceVariant: "#000000",
            },
          }}
          onPress={() => {}}
        />
      </CustomBottomSheet>
    </>
  );
}
