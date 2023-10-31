import { router } from "expo-router";
import React from "react";
import { useTranslation } from "react-i18next";
import { View } from "react-native";
import { Avatar, Button, Card, Paragraph, Text } from "react-native-paper";
import { TabScreen, Tabs, TabsProvider } from "react-native-paper-tabs";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import ExperienceCard from "../../../components/cards/ExperienceCard";
import { defaultStyles } from "../../../constants/Styles";
import "../../../localization/i18n";
import { ScrollView } from "react-native-gesture-handler";
import CustomButtonContained from "../../../components/buttons/CustomButtonContained";
import AvailabilityCard from "../../../components/cards/AvailabilityCard";

const AVATAR = "../../../assets/images/avatar.png";

export default function ProfileScreen() {
  const { t } = useTranslation();

  return (
    <>
      <Card.Title
        title="Frank Esteban"
        titleStyle={{ fontWeight: "bold", fontSize: 18 }}
        subtitle="Waiter"
        subtitleStyle={{ color: "#78858F" }}
        left={(props) => (
          <Avatar.Image
            {...props}
            style={{ backgroundColor: "transparent" }}
            source={require(AVATAR)}
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
            <Text variant={"labelMedium"}>AVAILABLE</Text>
          </View>
        )}
        style={{ marginHorizontal: 10 }}
      />
      <Paragraph style={{ marginHorizontal: 25 }}>
        This impressive paella is a perfect party dishaa....This impressive
        paella is a perfect party dishaa....
      </Paragraph>
      <Card.Actions style={{ alignSelf: "center", marginTop: 15 }}>
        <Button
          mode={"contained"}
          style={{ backgroundColor: "#F3F3F3", borderRadius: 10 }}
          textColor="#000000"
          onPress={() => {}}
        >
          CV
        </Button>
        <Button
          mode={"contained"}
          style={{ backgroundColor: "#F3F3F3", borderRadius: 10 }}
          textColor="#000000"
          onPress={() => router.push("/(tabs)/profile/modify")}
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
        <Tabs
          iconPosition={"top"}
          showTextLabel={false}
          style={{
            borderBottomWidth: 1 / 2,
            borderBottomColor: "#8F8F8F",
          }}
          theme={{ colors: { primary: "#000000" } }}
        >
          <TabScreen label="Experiences" icon="weather-sunny">
            <ScrollView
              style={{
                paddingHorizontal: 25,
              }}
              showsVerticalScrollIndicator={false}
              scrollEventThrottle={16}
            >
              <ExperienceCard />
              <ExperienceCard />
              <ExperienceCard />
              <ExperienceCard />
              <CustomButtonContained
                icon={"plus"}
                label="Experience"
                style={{
                  marginTop: 15,
                  marginBottom: 20,
                  backgroundColor: "#EDEDED",
                }}
                textColor="#000"
              />
            </ScrollView>
          </TabScreen>
          <TabScreen label="Availability" icon="calendar-check-outline">
            <ScrollView
              style={{
                paddingHorizontal: 25,
              }}
              showsVerticalScrollIndicator={false}
              scrollEventThrottle={16}
            >
              <AvailabilityCard />
              <AvailabilityCard />
              <AvailabilityCard />
              <AvailabilityCard />
              <CustomButtonContained
                icon={"plus"}
                label="Availability"
                style={{
                  marginTop: 15,
                  marginBottom: 20,
                  backgroundColor: "#EDEDED",
                }}
                textColor="#000"
              />
            </ScrollView>
          </TabScreen>
          <TabScreen label="References" icon="account-check-outline">
            <ScrollView
              style={{
                paddingHorizontal: 25,
              }}
              showsVerticalScrollIndicator={false}
              scrollEventThrottle={16}
            >
              <AvailabilityCard />
              <AvailabilityCard />
              <AvailabilityCard />
              <AvailabilityCard />
              <CustomButtonContained
                icon={"plus"}
                label="Reference"
                style={{
                  marginTop: 15,
                  marginBottom: 20,
                  backgroundColor: "#EDEDED",
                }}
                textColor="#000"
              />
            </ScrollView>
          </TabScreen>
          <TabScreen label="Feebacks" icon="comment-check-outline">
            <ScrollView
              style={{
                paddingHorizontal: 25,
              }}
              showsVerticalScrollIndicator={false}
              scrollEventThrottle={16}
            >
              <AvailabilityCard />
              <AvailabilityCard />
              <AvailabilityCard />
              <AvailabilityCard />
              <CustomButtonContained
                icon={"plus"}
                label="Feeback"
                style={{
                  marginTop: 15,
                  marginBottom: 20,
                  backgroundColor: "#EDEDED",
                }}
                textColor="#000"
              />
            </ScrollView>
          </TabScreen>
        </Tabs>
      </TabsProvider>
    </>
  );
}
