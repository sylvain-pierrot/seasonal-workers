import React from "react";
import { useTranslation } from "react-i18next";
import { Card, Text } from "react-native-paper";
import Strong from "../Strong";

const ExperienceCard = () => {
  const { t } = useTranslation();

  return (
    <Card mode={"contained"} style={{ backgroundColor: "transparent" }}>
      <Card.Title
        title="Serveur hotel 4 étoiles"
        titleVariant={"titleMedium"}
        style={{
          alignItems: "flex-end",
        }}
      />
      <Card.Content>
        <Text variant={"bodyMedium"}>
          <Strong>Company</Strong>: Nasa
        </Text>
        <Text variant={"bodyMedium"}>
          <Strong>Debut</Strong>: 12-09-2023
        </Text>
        <Text variant={"bodyMedium"}>
          <Strong>Fin</Strong>: 12-09-2023
        </Text>
      </Card.Content>
    </Card>
  );
};

export default ExperienceCard;
