import React from "react";
import { Card, Text } from "react-native-paper";
import { View, ViewStyle } from "react-native";
import { defaultStyles } from "../../constants/Styles";
import { Rating } from "react-native-ratings";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useTranslation } from "react-i18next";
import { formatTimeElapsed, formatTimeElapsedFrench } from "../../utils";

interface IPropsFeedbackCard {
  name: string;
  advice: string;
  rating: number;
  publication_date: string;
  style?: ViewStyle;
}

const FeedbackCard = ({
  name,
  advice,
  rating,
  publication_date,
  style,
}: IPropsFeedbackCard) => {
  const { i18n } = useTranslation();

  return (
    <Card
      mode={"contained"}
      style={{ ...{ backgroundColor: "#F4F4F4" }, ...style }}
    >
      <Card.Title
        title={name}
        titleVariant={"titleMedium"}
        style={{
          justifyContent: "center",
        }}
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
      <Card.Content style={{ alignItems: "flex-start" }}>
        <Text variant={"bodyMedium"}>{advice}</Text>
        <Rating
          type="custom"
          ratingCount={5}
          readonly
          tintColor="#F4F4F4"
          imageSize={20}
          ratingColor="#DFB300"
          ratingBackgroundColor="#626262"
          startingValue={rating}
          style={{ marginTop: 10 }}
        />
      </Card.Content>
    </Card>
  );
};

export default FeedbackCard;
