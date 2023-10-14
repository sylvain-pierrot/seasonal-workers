import { StyleSheet, Text, View } from "react-native";
import "../../localization/i18n";
import React from "react";
import { Button } from "react-native";
import { useTranslation } from "react-i18next";
import { Logger } from "../../logger/logger.config";

export default function Home() {
  const { t, i18n } = useTranslation();
  const logger = new Logger("App");

  return (
    <View style={styles.container}>
      <Text>{t("welcome")}</Text>
      <Button
        color={"red"}
        title="Log error"
        onPress={() => logger.error("Language changed")}
      />
      <Button
        color={"blue"}
        title="Log info"
        onPress={() => logger.info("Language changed")}
      />
      <Button
        color={"yellow"}
        title="Log warn"
        onPress={() => logger.warn("Language changed")}
      />
      <Button title="English" onPress={() => i18n.changeLanguage("en")} />
      <Button title="French" onPress={() => i18n.changeLanguage("fr")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
