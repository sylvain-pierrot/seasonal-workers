import { View } from "react-native";
import React from "react";
import { router } from "expo-router";
import { useKeycloak } from "../hooks/useKeycloak";
import { defaultStyles } from "../constants/Styles";
import { useTranslation } from "react-i18next";
import { Formik } from "formik";
import { defaultUserAuthSignIn } from "../constants/User";
import CustomTextInput from "../components/inputs/CustomTextInput";
import CustomButtonContained from "../components/buttons/CustomButtonContained";
import CustomButtonText from "../components/buttons/CustomButtonText";
import CustomButtonOutlined from "../components/buttons/CustomButtonOutlined";

export default function SignIn() {
  const { t } = useTranslation();
  const { signIn } = useKeycloak();

  return (
    <View style={defaultStyles.container}>
      <Formik
        initialValues={defaultUserAuthSignIn}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <>
            <CustomTextInput
              value={values.email}
              placeholder={"Email"}
              onChange={handleChange("email")}
              onBlur={handleBlur("email")}
              style={{ marginBottom: 10 }}
            />
            <CustomTextInput
              value={values.password}
              placeholder={t("sign-in.form.password")}
              onChange={handleChange("password")}
              onBlur={handleBlur("password")}
              style={{ marginBottom: 10 }}
            />
            <CustomButtonContained
              label={t("sign-in.actions.sign-in")}
              onPress={() => {
                handleSubmit();
                signIn();
                // Navigate after signing in. You may want to tweak this to ensure sign-in is
                // successful before navigating.
                router.replace("/");
              }}
              style={{ marginBottom: 10 }}
            />
          </>
        )}
      </Formik>

      <CustomButtonText
        label={t("sign-in.actions.forgot")}
        onPress={() => router.push("/forgot-password")}
        style={{ marginBottom: 10 }}
      />
      <CustomButtonOutlined
        label={t("sign-in.actions.sign-up")}
        onPress={() => router.push("/sign-up")}
        style={{ marginBottom: 10, alignSelf: "stretch" }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 20,
    marginLeft: 20,
  },
  text: {
    textAlign: "left",
  },
  input: {
    marginTop: 10,
    alignSelf: "stretch",
    textAlign: "left",
  },
  button: {
    marginTop: 20,
    alignSelf: "stretch",
    textAlign: "center",
  },
});
