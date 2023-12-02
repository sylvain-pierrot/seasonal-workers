import React from "react";
import { useTranslation } from "react-i18next";
import { Card, Text } from "react-native-paper";
import Strong from "../Strong";
import CustomTextIcon from "../CustomTextIcon";

interface IPropsAvailabilityCard {
  title: string;
  category?: string;
  start_date: string;
  end_date: string;
  // [key: string]: any;
}

const AvailabilityCard = ({
  title,
  category,
  start_date,
  end_date,
}: IPropsAvailabilityCard) => {
  const { t } = useTranslation();

  return (
    <Card mode={"contained"} style={{ backgroundColor: "transparent" }}>
      <Card.Title
        title={title}
        titleVariant={"titleMedium"}
        subtitle={category}
        subtitleVariant={"labelMedium"}
        subtitleStyle={{ color: "#818181" }}
        style={{
          alignItems: "flex-end",
        }}
      />
      <Card.Content>
        <Text variant={"bodyMedium"}>
          <Strong>{t("components.cards.availablility.start")}</Strong>
          {`: ${start_date}`}
        </Text>
        <Text variant={"bodyMedium"}>
          <Strong>{t("components.cards.availablility.end")}</Strong>{" "}
          {`: ${end_date}`}
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
