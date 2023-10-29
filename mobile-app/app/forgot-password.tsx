import { View } from "react-native";
import React from "react";
import { router } from "expo-router";
import { Button, TextInput } from "react-native-paper";
import { defaultStyles } from "../constants/Styles";
import { useTranslation } from "react-i18next";
import CustomTextInput from "../components/CustomTextInput";
import { Formik } from "formik";
import { defaultUserForgotPassword } from "../constants/User";
import CustomButtonContained from "../components/buttons/CustomButtonContained";
import CustomButtonOutlined from "../components/buttons/CustomButtonOutlined";

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
              label={t("forgot-password.actions.reset")}
              onPress={() => handleSubmit()}
              style={{ marginBottom: 10 }}
            />
          </>
        )}
      </Formik>

      <CustomButtonOutlined
        label={t("forgot-password.actions.sign-in")}
        onPress={() => router.push("/sign-in")}
        style={{ alignSelf: "stretch" }}
      />
    </View>
  );
}
