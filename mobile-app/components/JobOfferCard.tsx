import React from "react";
import { useTranslation } from "react-i18next";
import { View } from "react-native";
import { Button, Card, Paragraph, Text } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { defaultStyles } from "../constants/Styles";
import Strong from "./Strong";

const JobOfferCard = () => {
  const { t } = useTranslation();

  return (
    <Card mode={"contained"} style={{ marginBottom: 20 }}>
      <Card.Title
        title="Hotel"
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
            <Text>42 min ago</Text>
          </View>
        )}
      />
      <Card.Content>
        <Text variant={"titleMedium"} style={{ marginBottom: 5 }}>
          Serveur hotel 4 étoiles
        </Text>
        <Text variant={"bodyMedium"}>
          <Strong>Debut</Strong> : 12-09-2023
        </Text>
        <Text variant={"bodyMedium"}>
          <Strong>Fin</Strong>: 12-09-2023
        </Text>
        <Text variant={"bodyMedium"}>
          <Strong>Salary</Strong> : 3000 €
        </Text>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididun...
        </Paragraph>
      </Card.Content>
      <Card.Actions
        style={{ alignSelf: "flex-start", marginBottom: 16, marginTop: 5 }}
      >
        <Button mode={"contained"}>Apply</Button>
      </Card.Actions>
    </Card>
  );
};

export default JobOfferCard;
