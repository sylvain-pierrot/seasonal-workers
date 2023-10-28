import { View } from "react-native";
import "../../localization/i18n";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { defaultStyles } from "../../constants/Styles";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {
  Avatar,
  Button,
  Card,
  Paragraph,
  Text,
  Title,
} from "react-native-paper";
import { TabScreen, Tabs, TabsProvider } from "react-native-paper-tabs";
import ExperienceCard from "../../components/ExperienceCard";

export default function Home() {
  const { t } = useTranslation();

  return (
    <View style={defaultStyles.pageHeight}>
      <Card.Title
        title="Frank Esteban"
        titleStyle={{ fontWeight: "bold", fontSize: 18 }}
        subtitle="Waiter"
        subtitleStyle={{ color: "#78858F" }}
        left={(props) => (
          <Avatar.Image
            {...props}
            style={{ backgroundColor: "transparent" }}
            source={require("../../assets/images/avatar.png")}
          />
        )}
        right={() => (
          <View
            style={{
              ...defaultStyles.row,
              ...{ marginRight: 30 },
            }}
          >
            <Icon
              name={"circle-medium"}
              size={18}
              style={{ marginRight: 5, color: "#25DE25" }}
            />
            <Text>AVAILABLE</Text>
          </View>
        )}
      />
      <Paragraph style={{ marginHorizontal: 20 }}>
        This impressive paella is a perfect party dishaa....This impressive
        paella is a perfect party dishaa....
      </Paragraph>
      <Card.Actions style={{ alignSelf: "center", marginVertical: 20 }}>
        <Button
          mode={"contained"}
          style={{ backgroundColor: "#F3F3F3", borderRadius: 10 }}
          textColor="#000000"
        >
          CV
        </Button>
        <Button
          mode={"contained"}
          style={{ backgroundColor: "#F3F3F3", borderRadius: 10 }}
          textColor="#000000"
        >
          Modify
        </Button>
        <Button
          mode={"contained"}
          style={{ backgroundColor: "#F3F3F3", borderRadius: 10 }}
          textColor="#FF0000"
        >
          Delete
        </Button>
      </Card.Actions>

      <TabsProvider defaultIndex={0}>
        <Tabs iconPosition={"top"} showTextLabel={false}>
          <TabScreen label="Experiences" icon="weather-sunny">
            <View style={defaultStyles.container}>
              <ExperienceCard />
            </View>
          </TabScreen>
          <TabScreen label="Availability" icon="calendar-check-outline">
            <>
              <Text>Availability</Text>
              <Text>Availability</Text>
              <Text>Availability</Text>
              <Text>Availability</Text>
              <Text>Availability</Text>
              <Text>Availability</Text>
              <Text>Availability</Text>
              <Text>Availability</Text>
              <Text>Availability</Text>
              <Text>Availability</Text>
              <Text>Availability</Text>
              <Text>Availability</Text>
            </>
          </TabScreen>
          <TabScreen label="References" icon="account-check-outline">
            <Text>References</Text>
          </TabScreen>
          <TabScreen label="Feeback" icon="comment-check-outline">
            <View style={{ backgroundColor: "black", flex: 1 }}>
              <Text>Feeback</Text>
            </View>
          </TabScreen>
        </Tabs>
      </TabsProvider>
    </View>
  );
}
