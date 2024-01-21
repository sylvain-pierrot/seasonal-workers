import React from "react";
import { useTranslation } from "react-i18next";
import { View } from "react-native";
import { Button, Card, Paragraph, Text } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { defaultStyles } from "../../constants/Styles";
import Strong from "../Strong";
import { formatTimeElapsed, formatTimeElapsedFrench } from "../../utils";

interface IPropsJobOfferCard {
  title: string;
  category: string;
  start_date: string;
  end_date: string;
  salary: number;
  description: string;
  publication_date: string;
  onApply: () => void;
}

const JobOfferCard = ({
  title,
  category,
  start_date,
  end_date,
  salary,
  description,
  publication_date,
  onApply,
}: IPropsJobOfferCard) => {
  const { t, i18n } = useTranslation();

  return (
    <Card mode={"contained"} style={{ marginBottom: 20 }}>
      <Card.Title
        title={category}
        titleStyle={{
          fontSize: 18,
        }}
        leftStyle={{ marginRight: 10 }}
        left={(props) => <Icon {...props} name="cookie" />}
        right={() => (
          <View
            style={{
              ...defaultStyles.row,
              ...{ marginRight: 30 },
            }}
          >
            <Icon
              name={"clock-time-four-outline"}
              size={18}
              style={{ marginRight: 5 }}
            />
            <Text>
              {i18n.language === "en"
                ? formatTimeElapsed(publication_date)
                : formatTimeElapsedFrench(publication_date)}
            </Text>
          </View>
        )}
      />
      <Card.Content>
        <Text variant={"titleMedium"} style={{ marginBottom: 5 }}>
          {title}
        </Text>
        <Text variant={"bodyMedium"}>
          <Strong>{t("components.cards.job.start")}</Strong>
          {`: ${start_date}`}
        </Text>
        <Text variant={"bodyMedium"}>
          <Strong>{t("components.cards.job.end")}</Strong>
          {`: ${end_date}`}
        </Text>
        <Text variant={"bodyMedium"}>
          <Strong>{t("components.cards.job.salary")}</Strong>
          {`: ${salary} €`}
        </Text>
        <Paragraph>{description}</Paragraph>
      </Card.Content>
      <Card.Actions
        style={{ alignSelf: "flex-start", marginBottom: 16, marginTop: 5 }}
      >
        <Button mode={"contained"} onPress={onApply}>
          {t("components.cards.job.apply")}
        </Button>
      </Card.Actions>
    </Card>
  );
};

export default JobOfferCard;
