import BottomSheet from "@gorhom/bottom-sheet";
import { Stack } from "expo-router";
import React, { useRef } from "react";
import CustomBottomSheet from "../../../components/CustomBottomSheet";
import CustomTabAppBar from "../../../components/appBars/CustomTabAppBar";
import CustomValidateAppBar from "../../../components/appBars/CustomValidateAppBar";

export default function ProfileLayout() {
  const bottomSheetRef = useRef<BottomSheet>(null);

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
                        onPress: () => bottomSheetRef.current?.expand(),
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

      <CustomBottomSheet ref={bottomSheetRef} />
    </>
  );
}
