import { router } from "expo-router";
import { Formik } from "formik";
import React from "react";
import { useTranslation } from "react-i18next";
import { View } from "react-native";
import CustomButtonContained from "../components/buttons/CustomButtonContained";
import CustomButtonOutlined from "../components/buttons/CustomButtonOutlined";
import CustomTextInput from "../components/inputs/CustomTextInput";
import { defaultStyles } from "../constants/Styles";
import { defaultUserForgotPassword } from "../constants/User";

export default function ForgotPassword() {
  const { t } = useTranslation();

  return (
    <View style={defaultStyles.container}>
      <Formik
        initialValues={defaultUserForgotPassword}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <>
            <CustomTextInput
              value={values.email}
              placeholder="Email"
              onChange={handleChange("email")}
              onBlur={handleBlur("email")}
              style={{ marginBottom: 10 }}
            />
            <CustomButtonContained
              label={t("no-auth.pages.forgot-password.actions.reset")}
              onPress={() => handleSubmit()}
              style={{ marginBottom: 10, alignSelf: "stretch" }}
            />
          </>
        )}
      </Formik>

      <CustomButtonOutlined
        label={t("no-auth.pages.forgot-password.actions.sign-in")}
        onPress={() => router.push("/sign-in")}
        style={{ alignSelf: "stretch" }}
      />
    </View>
  );
}
