import { router } from "expo-router";
import React, { Key, useState } from "react";
import { useTranslation } from "react-i18next";
import { View } from "react-native";
import { Avatar, Button, Card, Paragraph, Text } from "react-native-paper";
import { TabScreen, Tabs, TabsProvider } from "react-native-paper-tabs";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import ExperienceCard from "../../../components/cards/ExperienceCard";
import { defaultStyles } from "../../../constants/Styles";
import "../../../localization/i18n";
import { RefreshControl, ScrollView } from "react-native-gesture-handler";
import AvailabilityCard from "../../../components/cards/AvailabilityCard";
import ReferentCard from "../../../components/cards/ReferentCard";
import FeedbackCard from "../../../components/cards/FeedbackCard";
import { useSelector } from "react-redux";
import { useGetAllExperiencesQuery } from "../../../store/services/experiences";
import { selectUserFormat } from "../../../store/slices/userSlice";
import { useGetAllAvailabilitiesQuery } from "../../../store/services/availabilities";
import CustomButtonOutlined from "../../../components/buttons/CustomButtonOutlined";
import { useGetAllReferentsQuery } from "../../../store/services/referents";
import {
  Availability,
  Experience,
  Feedback,
  Referent,
} from "../../../store/services/types";
import { useGetAllFeedbacksQuery } from "../../../store/services/feedbacks";

const AVATAR = "../../../assets/images/avatar.png";

export default function ProfileScreen() {
  const { t } = useTranslation();
  const user = useSelector(selectUserFormat);
  const [skipAvailabilities, setSkipAvailabilities] = useState(true);
  const [skipReferences, setSkipReferences] = useState(true);
  const [skipFeedbacks, setSkipFeedbacks] = useState(true);
  const experiences = useGetAllExperiencesQuery(undefined);
  const availabilities = useGetAllAvailabilitiesQuery(undefined, {
    skip: skipAvailabilities,
  });
  const referents = useGetAllReferentsQuery(undefined, {
    skip: skipReferences,
  });
  const feedbacks = useGetAllFeedbacksQuery(undefined, {
    skip: skipFeedbacks,
  });

  const tabs = [
    {
      label: "Experiences",
      icon: "weather-sunny",
      query: experiences,
      renderListCard: () =>
        experiences.data &&
        experiences.data.map((value, key) => (
          <ExperienceCard key={key} {...value} />
        )),
    },
    {
      label: "Availability",
      icon: "calendar-check-outline",
      query: availabilities,
      renderListCard: () =>
        availabilities.data &&
        availabilities.data.map((value, key) => (
          <AvailabilityCard key={key} {...value} />
        )),
    },
    {
      label: "References",
      icon: "account-check-outline",
      query: referents,
      renderListCard: () =>
        referents.data &&
        referents.data.map((value, key) => (
          <ReferentCard key={key} {...value} style={{ marginTop: 10 }} />
        )),
    },
    {
      label: "Feebacks",
      icon: "comment-check-outline",
      query: feedbacks,
      renderListCard: () =>
        feedbacks.data &&
        feedbacks.data.map((value, key) => (
          <FeedbackCard key={key} {...value} style={{ marginTop: 10 }} />
        )),
    },
  ];

  return (
    <>
      <Card.Title
        title={`${user.first_name} ${user.last_name}`}
        titleVariant={"titleMedium"}
        titleStyle={{ marginLeft: 20 }}
        subtitle="Waiter"
        subtitleStyle={{ color: "#78858F", marginLeft: 20 }}
        subtitleVariant={"labelMedium"}
        left={(props) => (
          <Avatar.Image
            {...props}
            style={{ backgroundColor: "transparent" }}
            source={require(AVATAR)}
            size={64}
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
            <Text variant={"labelMedium"}>
              {t("auth.pages.profile.index.state.available").toUpperCase()}
            </Text>
          </View>
        )}
        style={{ marginHorizontal: 10 }}
      />
      <Paragraph style={{ marginHorizontal: 25 }}>{user.description}</Paragraph>
      <Card.Actions style={{ paddingLeft: 0 }}>
        <Button
          mode={"text"}
          style={{
            flex: 1,
            backgroundColor: "#F3F3F3",
            borderRadius: 10,
          }}
          compact
          textColor="#000000"
          onPress={() => {}}
        >
          {t("auth.pages.profile.index.actions.resum")}
        </Button>
        <Button
          mode={"text"}
          style={{
            flex: 1,
            backgroundColor: "#F3F3F3",
            borderRadius: 10,
          }}
          compact
          textColor="#000000"
          onPress={() => router.push("/(tabs)/profile/modify")}
        >
          {t("auth.pages.profile.index.actions.modify")}
        </Button>
        <Button
          mode={"text"}
          style={{ flex: 1, backgroundColor: "#F3F3F3", borderRadius: 10 }}
          compact
          textColor="#FF0000"
        >
          {t("auth.pages.profile.index.actions.delete")}
        </Button>
      </Card.Actions>

      <TabsProvider
        defaultIndex={0}
        onChangeIndex={(index) => {
          switch (index) {
            case 1:
              setSkipAvailabilities(false);
              break;
            case 2:
              setSkipReferences(false);
              break;
            case 3:
              setSkipFeedbacks(false);
              break;
            default:
              break;
          }
        }}
      >
        <Tabs
          iconPosition={"top"}
          showTextLabel={false}
          style={{
            borderBottomWidth: 1 / 2,
            borderBottomColor: "#8F8F8F",
          }}
          theme={{ colors: { primary: "#000000" } }}
        >
          {tabs.map((tab, key) => (
            <TabScreen key={key} label={tab.label} icon={tab.icon}>
              <ScrollView
                overScrollMode={"never"}
                nestedScrollEnabled
                directionalLockEnabled
                showsVerticalScrollIndicator={false}
                scrollEventThrottle={16}
                stickyHeaderHiddenOnScroll
                style={{ paddingHorizontal: 25, flex: 1 }}
                refreshControl={
                  <RefreshControl
                    refreshing={tab.query.isLoading || tab.query.isFetching}
                    onRefresh={tab.query.refetch}
                    colors={["#007FFF"]}
                  />
                }
              >
                <CustomButtonOutlined
                  icon={"plus"}
                  label={tab.label}
                  style={{
                    marginTop: 15,
                  }}
                />
                {!tab.query.isLoading && tab.renderListCard()}
              </ScrollView>
            </TabScreen>
          ))}
        </Tabs>
      </TabsProvider>
    </>
  );
}
