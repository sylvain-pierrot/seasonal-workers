import { Dimensions, ScrollView, View } from "react-native";
import "../../../localization/i18n";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { defaultStyles } from "../../../constants/Styles";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Searchbar, Title } from "react-native-paper";
import JobOfferCard from "../../../components/JobOfferCard";

export default function JobsScreen() {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState<string>("");

  const onChangeSearch = (query: string) => setSearchQuery(query);

  return (
    <View style={defaultStyles.pageFull}>
      <Searchbar
        placeholder={t("(tabs).jobs.form.search")}
        onChangeText={onChangeSearch}
        value={searchQuery}
        placeholderTextColor={"#8F8F8F"}
        style={defaultStyles.search}
      />
      <ScrollView
        style={{
          marginVertical: 10,
          height: Dimensions.get("window").height / 1.5,
        }}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        // stickyHeaderIndices={[0]}
        // refreshControl={
        //   <RefreshControl
        //     onRefresh={() => getUserData(true)}
        //     refreshing={refresh}
        //   />
        // }
      >
        {Array.from({ length: 5 }, (_, index) => (
          <JobOfferCard key={index} />
        ))}
      </ScrollView>
    </View>
  );
}
