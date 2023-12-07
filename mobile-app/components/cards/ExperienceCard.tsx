import React from "react";
import { useTranslation } from "react-i18next";
import { Card, Text } from "react-native-paper";
import Strong from "../Strong";
import { ViewStyle } from "react-native";

interface IPropsExperienceCard {
  title: string;
  company: string;
  start_date: string;
  end_date: string;
  style?: ViewStyle;
}

const ExperienceCard = ({
  title,
  company,
  start_date,
  end_date,
  style,
}: IPropsExperienceCard) => {
  const { t } = useTranslation();

  return (
    <Card
      mode={"contained"}
      style={{ ...{ backgroundColor: "transparent" }, ...style }}
    >
      <Card.Title
        title={title}
        titleVariant={"titleMedium"}
        style={{
          alignItems: "flex-end",
          minHeight: 0,
        }}
      />
      <Card.Content>
        <Text variant={"bodyMedium"}>
          <Strong>{t("components.cards.experience.company")}</Strong>: {company}
        </Text>
        <Text variant={"bodyMedium"}>
          <Strong>{t("components.cards.experience.start")}</Strong>
          {`: ${start_date}`}
        </Text>
        <Text variant={"bodyMedium"}>
          <Strong>{t("components.cards.experience.end")}</Strong>
          {`: ${end_date}`}
        </Text>
      </Card.Content>
    </Card>
  );
};

export default ExperienceCard;
