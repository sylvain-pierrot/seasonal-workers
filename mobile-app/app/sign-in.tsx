import { View } from "react-native";
import React from "react";
import { router } from "expo-router";
import { useKeycloak } from "../hooks/useKeycloak";
import { Button, TextInput } from "react-native-paper";
import { defaultStyles } from "../constants/Styles";
import { useTranslation } from "react-i18next";
import { Formik } from "formik";
import { defaultUserAuthSignIn } from "../constants/User";
import CustomTextInput from "../components/CustomTextInput";
import CustomButton from "../components/CustomButton";

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
              label={"Email"}
              handleChange={handleChange("email")}
              handleBlur={handleBlur("email")}
            />
            <CustomTextInput
              value={values.password}
              label={t("sign-in.form.password")}
              handleChange={handleChange("password")}
              handleBlur={handleBlur("password")}
            />
            <CustomButton
              mode={"contained"}
              label={t("sign-in.actions.sign-in")}
              onPress={() => {
                handleSubmit();
                signIn();
                // Navigate after signing in. You may want to tweak this to ensure sign-in is
                // successful before navigating.
                router.replace("/");
              }}
            />
          </>
        )}
      </Formik>

      <CustomButton
        mode={"text"}
        label={t("sign-in.actions.forgot")}
        onPress={() => router.push("/forgot-password")}
      />
      <CustomButton
        mode={"outlined"}
        label={t("sign-in.actions.sign-up")}
        onPress={() => router.push("/sign-up")}
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
