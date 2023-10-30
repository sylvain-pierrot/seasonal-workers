import { Stack } from "expo-router";
import React from "react";
import CustomTabAppBar from "../../../components/appBars/CustomTabAppBar";

export default function JobsLayout() {
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
              title="Jobs offers"
              icon="domain"
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
