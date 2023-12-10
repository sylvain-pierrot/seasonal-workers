import React from "react";
import { useTranslation } from "react-i18next";
import { Card, Text } from "react-native-paper";
import Strong from "../Strong";
import { ViewStyle } from "react-native";

interface IPropsReferentCard {
  name: string;
  company: string;
  phone: string;
  email: string;
  style?: ViewStyle;
}

const ReferentCard = ({
  name,
  company,
  phone,
  email,
  style,
}: IPropsReferentCard) => {
  const { t } = useTranslation();

  return (
    <Card
      mode={"contained"}
      style={{ ...{ backgroundColor: "#F4F4F4" }, ...style }}
    >
      <Card.Title
        title={name}
        titleVariant={"titleMedium"}
        style={{
          alignItems: "flex-end",
          paddingTop: 10,
          minHeight: 0,
        }}
      />
      <Card.Content>
        <Text variant={"bodyMedium"}>
          <Strong>{t("components.cards.referent.company")}</Strong>
          {`: ${company}`}
        </Text>
        <Text variant={"bodyMedium"}>
          <Strong>{t("components.cards.referent.phone")}</Strong>
          {`: ${phone}`}
        </Text>
        <Text variant={"bodyMedium"}>
          <Strong>Email</Strong>
          {`: ${email}`}
        </Text>
      </Card.Content>
    </Card>
  );
};

export default ReferentCard;
