import { Stack } from "expo-router";
import React from "react";
import CustomTabAppBar from "../../../components/appBars/CustomTabAppBar";
import { useTranslation } from "react-i18next";

export default function JobsLayout() {
  const { t } = useTranslation();

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
              title={t("auth.pages.jobs.title")}
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
