import React from "react";
import { useTranslation } from "react-i18next";
import { Card, Text } from "react-native-paper";
import Strong from "../Strong";
import CustomTextIcon from "../CustomTextIcon";
import { ViewStyle } from "react-native";

interface IPropsAvailabilityCard {
  title: string;
  category: string;
  start_date: string;
  end_date: string;
  style?: ViewStyle;
}

const AvailabilityCard = ({
  title,
  category,
  start_date,
  end_date,
  style,
}: IPropsAvailabilityCard) => {
  const { t } = useTranslation();

  return (
    <Card
      mode={"contained"}
      style={{ ...{ backgroundColor: "transparent" }, ...style }}
    >
      <Card.Title
        title={title}
        titleVariant={"titleMedium"}
        subtitle={category}
        subtitleVariant={"labelMedium"}
        subtitleStyle={{ color: "#818181" }}
        style={{
          alignItems: "flex-end",
          paddingTop: 10,
          minHeight: 0,
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
