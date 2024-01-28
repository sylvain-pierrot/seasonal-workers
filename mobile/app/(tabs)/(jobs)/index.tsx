import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Dialog, Portal, Searchbar, Text } from "react-native-paper";
import JobOfferCard from "../../../components/cards/JobOfferCard";
import "../../../localization/i18n";
import { RefreshControl, ScrollView } from "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import { useGetAllJobsQuery } from "../../../store/services/jobs";
import CustomButtonContained from "../../../components/buttons/CustomButtonContained";
import { Job } from "../../../store/services/types";
import CustomButtonText from "../../../components/buttons/CustomButtonText";
import Strong from "../../../components/Strong";

export default function JobsScreen() {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState<string>("");
  const { data: jobs, isFetching, isLoading, refetch } = useGetAllJobsQuery();
  const [visible, setVisible] = useState(false);
  const [selectJob, setSelectJob] = useState<Job | null>(null);

  const hideDialog = () => setVisible(false);
  const onChangeSearch = (query: string) => setSearchQuery(query);

  return (
    <>
      <ScrollView
        overScrollMode={"never"}
        nestedScrollEnabled
        directionalLockEnabled
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        stickyHeaderIndices={[0]}
        stickyHeaderHiddenOnScroll
        style={{ paddingHorizontal: 25, flex: 1 }}
        refreshControl={
          <RefreshControl
            refreshing={isLoading || isFetching}
            onRefresh={refetch}
            colors={["#007FFF"]}
          />
        }
      >
        <Searchbar
          placeholder={t("auth.pages.jobs.form.search")}
          onChangeText={onChangeSearch}
          value={searchQuery}
          placeholderTextColor={"#8F8F8F"}
          style={styles.search}
          mode={"bar"}
        />
        {jobs &&
          !isLoading &&
          jobs.map((job, key) => (
            <JobOfferCard
              key={key}
              {...job}
              onApply={() => {
                setVisible(true);
                setSelectJob(job);
              }}
            />
          ))}
      </ScrollView>

      <Portal>
        <Dialog visible={visible} dismissable={false}>
          <Dialog.Icon icon="tooltip-account" color="#007FFF" size={42} />
          <Dialog.Title style={styles.center}>
            Apply: <Strong>{selectJob?.title}</Strong>
          </Dialog.Title>
          <Dialog.Content>
            <Text variant="bodyMedium" style={styles.center}>
              This action will apply to this offer using your personnal
              information.
            </Text>
          </Dialog.Content>
          <Dialog.Actions style={{ flexDirection: "column" }}>
            <CustomButtonContained
              onPress={() => console.log(selectJob)}
              label="Confirm"
              style={{
                alignSelf: "stretch",
                marginBottom: 10,
              }}
            />
            <CustomButtonText
              onPress={() => {
                hideDialog();
                setSelectJob(null);
              }}
              label="Cancel"
              textColor="#007FFF"
              style={{ alignSelf: "stretch" }}
            />
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </>
  );
}

const styles = StyleSheet.create({
  search: {
    paddingVertical: 10,
    flexDirection: "row-reverse",
    backgroundColor: "#FFF",
  },
  center: {
    textAlign: "center",
  },
});
