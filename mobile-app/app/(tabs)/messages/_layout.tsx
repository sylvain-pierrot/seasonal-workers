import { Stack } from "expo-router";
import React from "react";
import CustomTabAppBar from "../../../components/appBars/CustomTabAppBar";

export default function MessagesLayout() {
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
              title="Messages"
              icon="chat-processing-outline"
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
