import React from "react";
import { useTranslation } from "react-i18next";
import { Card, Text } from "react-native-paper";
import Strong from "../Strong";

interface IPropsExperienceCard {
  title: string;
  company?: string;
  start_date: string;
  end_date: string;
  // [key: string]: any;
}

const ExperienceCard = ({
  title,
  company,
  start_date,
  end_date,
}: IPropsExperienceCard) => {
  const { t } = useTranslation();

  return (
    <Card mode={"contained"} style={{ backgroundColor: "transparent" }}>
      <Card.Title
        title={title}
        titleVariant={"titleMedium"}
        style={{
          alignItems: "flex-end",
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
