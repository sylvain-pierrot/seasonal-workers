import { Stack } from "expo-router";
import React from "react";
import CustomTabAppBar from "../../../components/appBars/CustomTabAppBar";

export default function CandidaturesLayout() {
  return (
    <Stack
      screenOptions={{
        contentStyle: {
          backgroundColor: "transparent",
        },
        animation: "slide_from_right",
        header: (props) => {
          return (
            <CustomTabAppBar
              title="Candidatures"
              icon="chevron-down"
              canGoBack={() =>
                props.navigation.canGoBack() && props.route.name !== "index"
              }
              goBack={props.navigation.goBack}
            />
          );
        },
      }}
    >
      <Stack.Screen name="index" />
    </Stack>
  );
}
