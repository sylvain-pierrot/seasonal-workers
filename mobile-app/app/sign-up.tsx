import { Formik } from "formik";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { RadioButton, TextInput, useTheme, Text } from "react-native-paper";
//@ts-ignore
import { ProgressStep, ProgressSteps } from "react-native-progress-steps";
import { Gender, defaultUserAuthSignUp } from "../constants/User";
import { DatePickerInput } from "react-native-paper-dates";
// import { useKeycloak } from "../hooks/useKeycloak";
import { defaultStyles } from "../constants/Styles";
import { useTranslation } from "react-i18next";
import CustomTextInput from "../components/CustomTextInput";
import CustomDocumentPicker from "../components/CustomDocumentPicker";
import CustomImagePicker from "../components/CustomImagePicker";
import CustomTextAreaInput from "../components/CustomTextAreaInput";
import CustomPhoneInput from "../components/CustomPhoneInput";
import CountryPicker, {
  TranslationLanguageCode,
} from "react-native-country-picker-modal";

const expressionEmail: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const expressionPassword: RegExp =
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export default function SignUp() {
  // const { signIn } = useKeycloak();
  const [secure, setSecure] = useState(true);
  const theme = useTheme();
  const [confirmPassword, setConfirmPassword] = useState("");
  const { t, i18n } = useTranslation();

  const progressStepNextStyle = {
    nextBtnStyle: {
      ...styles.nextBtnStyle,
      ...{ borderRadius: (theme.isV3 ? 5 : 1) * theme.roundness },
    },
    nextBtnTextStyle: styles.nextBtnTextStyle,
    nextBtnText: t("sign-up.actions.next"),
  };
  const progressStepPrevStyle = {
    previousBtnStyle: {
      ...styles.previousBtnStyle,
      ...{ borderRadius: (theme.isV3 ? 5 : 1) * theme.roundness },
    },
    previousBtnTextStyle: styles.previousBtnTextStyle,
    previousBtnText: t("sign-up.actions.previous"),
  };
  const handleHelperEmail = (value: string) =>
    value !== "" && !expressionEmail.test(value);
  const handleHelperPassword = (value: string) =>
    value !== "" && !expressionPassword.test(value);
  const handleHelperConfirmPassword = (value: string, password: string) => {
    return value !== "" && value !== password;
  };

  return (
    <View style={defaultStyles.pageFull}>
      <Formik
        initialValues={defaultUserAuthSignUp}
        onSubmit={(values) => console.log(values)}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue,
          values,
        }) => (
          <ProgressSteps
            activeStepIconBorderColor={"#007FFF"}
            completedStepIconColor={"#007FFF"}
            completedProgressBarColor={"#007FFF"}
          >
            <ProgressStep
              {...progressStepNextStyle}
              nextBtnDisabled={
                !values.picture ||
                !values.country ||
                !values.fullname ||
                !values.birthdate
              }
            >
              <CustomImagePicker
                value={values.picture}
                label={t("sign-up.form.picture")}
                handleSetValue={(image) => setFieldValue("picture", image)}
              />
              <CustomTextInput
                value={values.fullname}
                label={t("sign-up.form.fullname")}
                handleChange={handleChange("fullname")}
                handleBlur={handleBlur("fullname")}
              />
              <CountryPicker
                countryCode={values.country}
                withCountryNameButton
                translation={
                  t(
                    "sign-up.form.country-translation"
                  ) as TranslationLanguageCode
                }
                onSelect={(country) => setFieldValue("country", country.cca2)}
                containerButtonStyle={{
                  backgroundColor: "#F6F6F6",
                  padding: 15,
                  borderRadius: 3,
                  marginBottom: 4,
                }}
              />
              <DatePickerInput
                locale={i18n.language}
                placeholder={t("sign-up.form.birthdate")}
                inputMode={"start"}
                mode="outlined"
                onBlur={handleBlur("birthdate")}
                onChange={(date) => setFieldValue("birthdate", date)}
                value={values.birthdate}
                style={defaultStyles.input}
                outlineColor="transparent"
                animationType={"none"}
                disableFullscreenUI
                withModal={false}
              />
            </ProgressStep>
            <ProgressStep
              {...progressStepNextStyle}
              {...progressStepPrevStyle}
              nextBtnDisabled={
                !values.cv ||
                !values.gender ||
                !values.phone ||
                !values.biography
              }
            >
              <CustomDocumentPicker
                value={values.cv}
                label={t("sign-up.form.cv")}
                handleSetValue={(document) => setFieldValue("cv", document)}
              />
              <RadioButton.Group
                onValueChange={handleChange("gender")}
                value={values.gender}
              >
                <View
                  style={{
                    ...defaultStyles.row,
                    ...{ justifyContent: "space-around", marginBottom: 10 },
                  }}
                >
                  <View
                    style={{
                      flex: 1,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Text>{t("sign-up.form.gender.male")}</Text>
                    <RadioButton value={Gender.Male} />
                  </View>
                  <View
                    style={{
                      flex: 1,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Text>{t("sign-up.form.gender.female")}</Text>
                    <RadioButton value={Gender.Female} />
                  </View>
                </View>
              </RadioButton.Group>
              <CustomPhoneInput
                value={values.phone}
                label={t("sign-up.form.phone")}
                handleChange={handleChange("phone")}
                handleBlur={handleBlur("phone")}
              />
              <CustomTextAreaInput
                value={values.biography}
                label={t("sign-up.form.biography")}
                handleChange={handleChange("biography")}
                handleBlur={handleBlur("biography")}
              />
            </ProgressStep>
            <ProgressStep
              {...progressStepNextStyle}
              {...progressStepPrevStyle}
              finishBtnText={t("sign-up.actions.finish")}
              onSubmit={handleSubmit}
              nextBtnDisabled={
                handleHelperEmail(values.email) ||
                handleHelperPassword(values.password) ||
                handleHelperConfirmPassword(confirmPassword, values.password)
              }
            >
              <CustomTextInput
                value={values.email}
                label={t("sign-up.form.email")}
                handleChange={handleChange("email")}
                handleBlur={handleBlur("email")}
                helper
                helperLabel={t("sign-up.form.email-helper")}
                handleHelper={handleHelperEmail}
              />

              <CustomTextInput
                value={values.password}
                label={t("sign-up.form.password")}
                handleChange={handleChange("password")}
                handleBlur={handleBlur("password")}
                secureTextEntry={secure}
                right={
                  <TextInput.Icon
                    icon={secure ? "eye" : "eye-off"}
                    onPress={() => setSecure(!secure)}
                  />
                }
                helper
                handleHelper={handleHelperPassword}
                helperLabel="Incorrect"
                caption={t("sign-up.form.password-caption")}
              />
              <CustomTextInput
                value={confirmPassword}
                label={t("sign-up.form.confirm")}
                handleChange={setConfirmPassword}
                secureTextEntry={secure}
                right={
                  <TextInput.Icon
                    icon={secure ? "eye" : "eye-off"}
                    onPress={() => setSecure(!secure)}
                  />
                }
                helper
                handleHelper={(value) =>
                  handleHelperConfirmPassword(value, values.password)
                }
                helperLabel={t("sign-up.form.confirm-helper")}
              />
            </ProgressStep>
          </ProgressSteps>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  picker: {
    marginTop: 10,
    backgroundColor: "#F6F6F6",
  },
  previousBtnStyle: {
    backgroundColor: "#FFFFFF",
    borderColor: "#000000",
    borderWidth: 1,
  },
  nextBtnStyle: {
    backgroundColor: "#007FFF",
  },
  previousBtnTextStyle: {
    color: "#000000",
  },
  nextBtnTextStyle: {
    color: "#FFFFFF",
  },
});
