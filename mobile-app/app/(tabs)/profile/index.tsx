import { View } from "react-native";
import "../../../localization/i18n";
import React, { useCallback, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { defaultStyles } from "../../../constants/Styles";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Avatar, Button, Card, Paragraph, Text } from "react-native-paper";
import { TabScreen, Tabs, TabsProvider } from "react-native-paper-tabs";
import ExperienceCard from "../../../components/ExperienceCard";
import { router } from "expo-router";
import BottomSheet from "@gorhom/bottom-sheet";

const AVATAR = "../../../assets/images/avatar.png";

export default function ProfileScreen() {
  const { t } = useTranslation();
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ["50%"], []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);
  const [isOpen, setIsOpen] = useState(-1);

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
            <Text>AVAILABLE</Text>
          </View>
        )}
      />
      <Paragraph style={{ marginHorizontal: 20 }}>
        This impressive paella is a perfect party dishaa....This impressive
        paella is a perfect party dishaa....
      </Paragraph>
      <Card.Actions style={{ alignSelf: "center", marginTop: 20 }}>
        <Button
          mode={"contained"}
          style={{ backgroundColor: "#F3F3F3", borderRadius: 10 }}
          textColor="#000000"
          onPress={() => setIsOpen(0)}
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
      <BottomSheet
        ref={bottomSheetRef}
        index={isOpen}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        enablePanDownToClose
        onClose={() => setIsOpen(-1)}
      >
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text>Awesome 🎉</Text>
        </View>
      </BottomSheet>
    </View>
  );
}
