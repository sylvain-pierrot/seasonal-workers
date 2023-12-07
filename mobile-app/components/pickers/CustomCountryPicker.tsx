import React from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet, TextStyle } from "react-native";
import CountryPicker, {
  Country,
  CountryCode,
  TranslationLanguageCode,
} from "react-native-country-picker-modal";

interface IPropsCustomCountryPicker {
  countryCode: CountryCode;
  style?: TextStyle;
  onSelect: (country: Country) => void;
}

const CustomCountryPicker = ({
  countryCode,
  style,
  onSelect,
}: IPropsCustomCountryPicker) => {
  const { t } = useTranslation();

  return (
    <CountryPicker
      countryCode={countryCode}
      withCountryNameButton
      translation={t("country-translation") as TranslationLanguageCode}
      onSelect={onSelect}
      containerButtonStyle={{ ...styles.buttonStyle, ...style }}
    />
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: "#F6F6F6",
    padding: 15,
    borderRadius: 3,
  },
});

export default CustomCountryPicker;
