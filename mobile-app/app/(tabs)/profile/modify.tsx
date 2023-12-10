import { Formik } from "formik";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Dimensions, View } from "react-native";
import { DatePickerInput } from "react-native-paper-dates";
import CustomPhoneInput from "../../../components/inputs/CustomPhoneInput";
import CustomTextInput from "../../../components/inputs/CustomTextInput";
import CustomImagePicker from "../../../components/pickers/CustomImagePicker";
import CustomSelectPicker from "../../../components/pickers/CustomSelectPicker";
import { Gender } from "../../../constants/User";
import { Avatar } from "react-native-paper";
import CustomCountryPicker from "../../../components/pickers/CustomCountryPicker";
import CustomTextIcon from "../../../components/CustomTextIcon";
import { ScrollView } from "react-native-gesture-handler";
import { useUpdateSeasonnalProfileMutation } from "../../../store/services/users";
import { useSelector } from "react-redux";
import { selectUserFormat } from "../../../store/slices/userSlice";
import { useNavigation } from "expo-router";
import CustomValidateAppBar from "../../../components/appBars/CustomValidateAppBar";

const AVATAR = "../../../assets/images/avatar.png";

export default function ProfileModifyScreen() {
  const { t, i18n } = useTranslation();
  const user = useSelector(selectUserFormat);
  const [updateUser] = useUpdateSeasonnalProfileMutation();
  const navigation = useNavigation();
  const [isLoading, setIsloading] = useState(false);

  return (
    <Formik
      initialValues={user}
      onSubmit={async (user) => {
        setIsloading(true);
        await updateUser(user);
        setIsloading(false);
      }}
    >
      {({ handleChange, handleBlur, setFieldValue, submitForm, values }) => (
        <>
          <CustomValidateAppBar
            title={t("auth.pages.profile.modify.title")}
            onCheck={async () => {
              await submitForm();
              navigation.goBack();
            }}
            onClose={navigation.goBack}
            isLoading={isLoading}
          />
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Avatar.Image
              size={64}
              style={{ backgroundColor: "transparent" }}
              source={
                values.picture ? { uri: values.picture.uri } : require(AVATAR)
              }
            />
            <CustomImagePicker
              mode={"text"}
              label={"Modifier la photo"}
              onChange={(image) => setFieldValue("picture", image)}
              disableIcon
              textColor="#007FFF"
              style={{ marginBottom: 10 }}
            />
          </View>
          <ScrollView
            style={{
              flex: 1,
              marginHorizontal: 25,
              height: Dimensions.get("window").height / 1.5,
            }}
            showsVerticalScrollIndicator={false}
            scrollEventThrottle={16}
          >
            <CustomTextIcon
              variant={"titleMedium"}
              text={t("auth.pages.profile.modify.section-1.title")}
              icon={"account"}
              style={{ marginBottom: 10 }}
            />
            <CustomTextInput
              value={values.username}
              label={t("auth.pages.profile.modify.section-1.fullname")}
              onChange={handleChange("username")}
              onBlur={handleBlur("username")}
              style={{ marginBottom: 14 }}
            />
            <CustomCountryPicker
              countryCode={values.country_code}
              onSelect={(country) =>
                setFieldValue("country_code", country.cca2)
              }
              style={{ marginBottom: 10 }}
            />
            <CustomPhoneInput
              value={values.phone}
              label={t("auth.pages.profile.modify.section-1.phone")}
              onChange={handleChange("phone")}
              onBlur={handleBlur("phone")}
              style={{ marginBottom: 14 }}
            />
            <CustomSelectPicker
              value={values.gender}
              placeholder={t(
                "auth.pages.profile.modify.section-1.gender.label"
              )}
              options={[
                {
                  label: t("auth.pages.profile.modify.section-1.gender.male"),
                  value: Gender.Male,
                },
                {
                  label: t("auth.pages.profile.modify.section-1.gender.female"),
                  value: Gender.Female,
                },
              ]}
              onChange={handleChange("gender")}
              onBlur={handleBlur("gender")}
              style={{ marginBottom: 10 }}
            />
            <CustomTextInput
              value={values.email}
              label={"Email"}
              onChange={handleChange("email")}
              onBlur={handleBlur("email")}
              style={{ marginBottom: 10 }}
            />
            <DatePickerInput
              locale={i18n.language}
              placeholder={t("sign-up.form.birthdate")}
              label={t("auth.pages.profile.modify.section-1.birthdate")}
              mode="outlined"
              value={values.birthdate}
              onChange={(date) => setFieldValue("birthdate", date)}
              onBlur={(date) => setFieldValue("birthdate", date)}
              inputMode="start"
              outlineColor="transparent"
              animationType={"none"}
              disableFullscreenUI
              withModal={false}
              showSoftInputOnFocus
              style={{ marginBottom: 20 }}
            />
            <CustomTextIcon
              variant={"titleMedium"}
              text={t("auth.pages.profile.modify.section-2")}
              icon={"lock-open"}
              style={{ marginBottom: 10 }}
            />
          </ScrollView>
        </>
      )}
    </Formik>
  );
}
