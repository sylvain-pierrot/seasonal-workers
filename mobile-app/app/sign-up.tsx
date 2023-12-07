import { Formik } from "formik";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import {
  Avatar,
  RadioButton,
  Text,
  TextInput,
  useTheme,
} from "react-native-paper";
import { DatePickerInput } from "react-native-paper-dates";
//@ts-ignore
import { ProgressStep, ProgressSteps } from "react-native-progress-steps";
import { Gender, defaultUser } from "../constants/User";
import { useTranslation } from "react-i18next";
import CustomPhoneInput from "../components/inputs/CustomPhoneInput";
import CustomTextAreaInput from "../components/inputs/CustomTextAreaInput";
import CustomTextInput from "../components/inputs/CustomTextInput";
import CustomCountryPicker from "../components/pickers/CustomCountryPicker";
import CustomDocumentPicker from "../components/pickers/CustomDocumentPicker";
import CustomImagePicker from "../components/pickers/CustomImagePicker";
import { defaultStyles } from "../constants/Styles";

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

  // const redirectUri = makeRedirectUri({
  //   scheme: AppConfig.expo.scheme,
  // });
  // const clientId = process.env.EXPO_PUBLIC_OIDC_CLIENT_ID ?? "";
  // const discovery = useAutoDiscovery(
  //   process.env.EXPO_PUBLIC_OIDC_DISCOVERY_URL ?? ""
  // );

  // const handleSignUp = async () => {
  //   // The default revokeAsync method doesn't work for Keycloak, we need to explicitely invoke the OIDC endSessionEndpoint with the correct parameters
  //   const logoutUrl = `${discovery?.registrationEndpoint!}?client_id=${clientId}&post_logout_redirect_uri=${redirectUri}&id_token_hint=${
  //     tokens.idToken
  //   }`;

  //   const webBrowserAuthSessionResult = await WebBrowser.openAuthSessionAsync(
  //     logoutUrl,
  //     redirectUri
  //   );
  //   if (webBrowserAuthSessionResult.type === "success") {
  //     await removeTokens();
  //     dispatch(setIsAuthenticated({ isAuth: false }));
  //   }
  // };

  return (
    <View style={defaultStyles.pageFull}>
      <Formik
        initialValues={defaultUser}
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
                !values.countryCode ||
                !values.fullname ||
                !values.birthdate
              }
            >
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  alignItems: "center",
                  marginBottom: 10,
                }}
              >
                <Avatar.Image
                  size={60}
                  style={{ backgroundColor: "transparent" }}
                  source={
                    values.picture
                      ? { uri: values.picture.uri }
                      : require("../assets/images/avatar.png")
                  }
                />
                <CustomImagePicker
                  reverse
                  value={values.picture}
                  label={t("sign-up.form.picture")}
                  onChange={(image) => setFieldValue("picture", image)}
                  style={{ flex: 1, marginLeft: 10 }}
                />
              </View>

              <CustomTextInput
                value={values.fullname}
                placeholder={t("sign-up.form.fullname")}
                onChange={handleChange("fullname")}
                onBlur={handleBlur("fullname")}
                style={{ marginBottom: 10 }}
              />
              <CustomCountryPicker
                countryCode={values.countryCode}
                onSelect={(country) => setFieldValue("country", country.cca2)}
                style={{ marginBottom: 4 }}
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
                onChange={(document) => setFieldValue("cv", document)}
                style={{ marginBottom: 10 }}
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
                placeholder={t("sign-up.form.phone")}
                onChange={handleChange("phone")}
                onBlur={handleBlur("phone")}
                style={{ marginBottom: 10 }}
              />
              <CustomTextAreaInput
                value={values.biography}
                placeholder={t("sign-up.form.biography")}
                onChange={handleChange("biography")}
                onBlur={handleBlur("biography")}
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
                placeholder={t("sign-up.form.email")}
                onChange={handleChange("email")}
                onBlur={handleBlur("email")}
                helper
                helperLabel={t("sign-up.form.email-helper")}
                visibleHelper={handleHelperEmail}
                style={{ marginBottom: 10 }}
              />

              <CustomTextInput
                value={values.password}
                placeholder={t("sign-up.form.password")}
                onChange={handleChange("password")}
                onBlur={handleBlur("password")}
                secureTextEntry={secure}
                right={
                  <TextInput.Icon
                    icon={secure ? "eye" : "eye-off"}
                    onPress={() => setSecure(!secure)}
                  />
                }
                helper
                visibleHelper={handleHelperPassword}
                helperLabel="Incorrect"
                caption={t("sign-up.form.password-caption")}
                style={{ marginBottom: 10 }}
              />
              <CustomTextInput
                value={confirmPassword}
                placeholder={t("sign-up.form.confirm")}
                onChange={setConfirmPassword}
                secureTextEntry={secure}
                right={
                  <TextInput.Icon
                    icon={secure ? "eye" : "eye-off"}
                    onPress={() => setSecure(!secure)}
                  />
                }
                helper
                visibleHelper={(value) =>
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
