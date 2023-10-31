import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Searchbar } from "react-native-paper";
import JobOfferCard from "../../../components/cards/JobOfferCard";
import "../../../localization/i18n";
import { ScrollView } from "react-native-gesture-handler";
import { StyleSheet } from "react-native";

export default function JobsScreen() {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState<string>("");

  const onChangeSearch = (query: string) => setSearchQuery(query);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      scrollEventThrottle={16}
      stickyHeaderIndices={[0]}
      stickyHeaderHiddenOnScroll
      style={{ paddingHorizontal: 25 }}
    >
      <Searchbar
        placeholder={t("(tabs).jobs.form.search")}
        onChangeText={onChangeSearch}
        value={searchQuery}
        placeholderTextColor={"#8F8F8F"}
        style={styles.search}
        mode={"bar"}
      />
      {Array.from({ length: 5 }, (_, index) => (
        <JobOfferCard key={index} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  search: {
    paddingVertical: 10,
    flexDirection: "row-reverse",
    backgroundColor: "#FFF",
  },
});
