import { ImagePickerAsset } from "expo-image-picker";
import { Formik, FormikErrors } from "formik";
import React from "react";
import { useTranslation } from "react-i18next";
import { Dimensions, View } from "react-native";
import { DatePickerInput } from "react-native-paper-dates";
import CustomPhoneInput from "../../../components/inputs/CustomPhoneInput";
import CustomTextInput from "../../../components/inputs/CustomTextInput";
import CustomImagePicker from "../../../components/pickers/CustomImagePicker";
import CustomSelectPicker from "../../../components/pickers/CustomSelectPicker";
import { Gender, User } from "../../../constants/User";
import { Avatar, Card } from "react-native-paper";
import CustomCountryPicker from "../../../components/pickers/CustomCountryPicker";
import CustomTextIcon from "../../../components/CustomTextIcon";
import { ScrollView } from "react-native-gesture-handler";

const userFetch: User = {
  fullname: "Sylvain Pierrot",
  countryCode: "FR",
  gender: Gender.Male,
  phone: "+33778556136",
  email: "pierrot.sylvain14@gmail.com",
  password: "",
  biography: "Bonjour je suis DevOps",
  birthdate: new Date("2000-05-05"),
};

const AVATAR = "../../../assets/images/avatar.png";

export default function ProfileModifyScreen() {
  const { t, i18n } = useTranslation();

  return (
    <Formik
      initialValues={userFetch}
      onSubmit={(values) => console.log(values)}
    >
      {({ handleChange, handleBlur, setFieldValue, handleSubmit, values }) => (
        <ScrollView
          style={{
            flex: 1,
            marginHorizontal: 25,
            height: Dimensions.get("window").height / 1.5,
          }}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
        >
          <Card.Title
            title="Frank Esteban"
            titleStyle={{ fontWeight: "bold", fontSize: 18 }}
            subtitle="Waiter"
            subtitleStyle={{ color: "#78858F" }}
            left={(props) => (
              <Avatar.Image
                {...props}
                style={{ backgroundColor: "transparent" }}
                source={
                  values.picture ? { uri: values.picture.uri } : require(AVATAR)
                }
              />
            )}
            right={() => (
              <CustomImagePicker
                label={"Photo"}
                onChange={(image) => setFieldValue("picture", image)}
                reverse
              />
            )}
            style={{ marginHorizontal: 10, marginBottom: 10 }}
          />
          <CustomTextIcon
            variant={"titleMedium"}
            text="Personal informations"
            icon={"account"}
            style={{ marginBottom: 10 }}
          />
          <CustomTextInput
            value={values.fullname}
            label={"Fullname"}
            onChange={handleChange("fullname")}
            onBlur={handleBlur("fullname")}
            style={{ marginBottom: 14 }}
          />
          <CustomCountryPicker
            countryCode={values.countryCode}
            onSelect={(country) => setFieldValue("country", country.cca2)}
            style={{ marginBottom: 10 }}
          />
          <CustomPhoneInput
            value={values.phone}
            label={"phone"}
            onChange={handleChange("phone")}
            onBlur={handleBlur("phone")}
            style={{ marginBottom: 14 }}
          />
          <CustomSelectPicker
            value={values.gender}
            placeholder={"Gender"}
            options={[
              { label: "Male", value: Gender.Male },
              { label: "Female", value: Gender.Female },
            ]}
            onChange={handleChange("gender")}
            onBlur={handleBlur("gender")}
            style={{ marginBottom: 10 }}
          />
          <CustomTextInput
            value={values.email}
            label={"email"}
            onChange={handleChange("email")}
            onBlur={handleBlur("email")}
            style={{ marginBottom: 10 }}
          />
          <DatePickerInput
            locale={i18n.language}
            placeholder={t("sign-up.form.birthdate")}
            label="Birthdate"
            mode="outlined"
            value={values.birthdate}
            onChange={(date) => setFieldValue("birthdate", date)}
            onBlur={handleBlur("birthdate")}
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
            text="Security"
            icon={"lock-open"}
            style={{ marginBottom: 10 }}
          />
        </ScrollView>
      )}
    </Formik>
  );
}
