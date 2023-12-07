import { Formik } from "formik";
import React from "react";
import CustomTextInput from "../../../components/inputs/CustomTextInput";
import { View } from "react-native";
import { DatePickerInput } from "react-native-paper-dates";
import { useTranslation } from "react-i18next";
import { SafeAreaProvider } from "react-native-safe-area-context";
import CustomButtonContained from "../../../components/buttons/CustomButtonContained";

const initialValues = {
  title: "",
  category: "",
  company: "",
  start_date: undefined,
  end_date: undefined,
};

export default function CreateExperienceScreen() {
  const { t, i18n } = useTranslation();

  return (
    <Formik initialValues={initialValues} onSubmit={() => {}}>
      {({ handleChange, handleBlur, setFieldValue, submitForm, values }) => (
        <View
          style={{
            marginHorizontal: 25,
            flex: 1,
            justifyContent: "center",
            alignSelf: "center",
          }}
        >
          <CustomTextInput
            value={values.title}
            label={"Title"}
            onChange={handleChange("title")}
            onBlur={handleBlur("title")}
            style={{ marginBottom: 14, flex: 1 }}
          />
          <CustomTextInput
            value={values.category}
            label={"Category"}
            onChange={handleChange("title")}
            onBlur={handleBlur("title")}
            style={{ marginBottom: 14, flex: 1 }}
          />
          <CustomTextInput
            value={values.company}
            label={"Company"}
            onChange={handleChange("title")}
            onBlur={handleBlur("title")}
            style={{ marginBottom: 14, flex: 1 }}
          />

          <DatePickerInput
            locale={i18n.language}
            placeholder={"Start date"}
            label={"Start date"}
            mode="outlined"
            value={values.start_date}
            onChange={(date) => {
              if (date instanceof Date) setFieldValue("start_date", date);
            }}
            onBlur={(date) => {
              if (date instanceof Date) setFieldValue("start_date", date);
            }}
            inputMode={"start"}
            outlineColor="transparent"
            animationType={"none"}
            disableFullscreenUI
            withModal={false}
            showSoftInputOnFocus
            inputEnabled
            style={{
              flex: 1,
              height: 48,
            }}
            // outlineStyle={{
            //   height: 48,
            // }}
          />
          <DatePickerInput
            locale={i18n.language}
            placeholder={"End date"}
            label={"End date"}
            mode="outlined"
            value={values.end_date}
            onChange={(date) => {
              if (date instanceof Date) setFieldValue("end_date", date);
            }}
            onBlur={(date) => {
              if (date instanceof Date) setFieldValue("end_date", date);
            }}
            inputMode={"end"}
            outlineColor="transparent"
            animationType={"none"}
            disableFullscreenUI
            withModal={false}
            showSoftInputOnFocus
            inputEnabled
            style={{
              flex: 1,
              height: 48,
            }}
            // outlineStyle={{
            // }}
          />
          <CustomButtonContained label={"ADD"} />
        </View>
      )}
    </Formik>
  );
}
