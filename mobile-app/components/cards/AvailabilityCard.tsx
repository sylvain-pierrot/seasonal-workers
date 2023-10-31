import React from "react";
import { useTranslation } from "react-i18next";
import { Card, Text } from "react-native-paper";
import Strong from "../Strong";
import CustomTextIcon from "../CustomTextIcon";

const AvailabilityCard = () => {
  const { t } = useTranslation();

  return (
    <Card mode={"contained"} style={{ backgroundColor: "transparent" }}>
      <Card.Title
        title="Hôtellerie Restauration"
        titleVariant={"titleMedium"}
        subtitle={"CUISINIER"}
        subtitleVariant={"labelMedium"}
        subtitleStyle={{ color: "#818181" }}
        style={{
          alignItems: "flex-end",
        }}
      />
      <Card.Content>
        <Text variant={"bodyMedium"}>
          <Strong>Debut</Strong>: 12-09-2023
        </Text>
        <Text variant={"bodyMedium"}>
          <Strong>Fin</Strong>: 12-09-2023
        </Text>
        <CustomTextIcon
          icon="circle-medium"
          iconColor="#FF8A00"
          text="IN 2 WEEKS"
        />
      </Card.Content>
    </Card>
  );
};

export default AvailabilityCard;
