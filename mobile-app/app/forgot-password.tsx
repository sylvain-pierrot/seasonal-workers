import { View } from "react-native";
import React from "react";
import { router } from "expo-router";
import { Button, TextInput } from "react-native-paper";
import { defaultStyles } from "../constants/Styles";
import { useTranslation } from "react-i18next";

export default function ForgotPassword() {
  const { t } = useTranslation();

  return (
    <View style={defaultStyles.container}>
      <TextInput
        mode="outlined"
        placeholder="Email"
        style={defaultStyles.input}
        outlineColor="transparent"
      />
      <Button
        mode={"contained"}
        onPress={() => {}}
        style={defaultStyles.button}
      >
        {t("forgot-password.actions.reset")}
      </Button>
      <Button
        mode={"outlined"}
        onPress={() => router.push("/sign-in")}
        style={defaultStyles.button}
        textColor="#000000"
      >
        {t("forgot-password.actions.sign-in")}
      </Button>
    </View>
  );
}
