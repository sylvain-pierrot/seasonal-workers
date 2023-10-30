import React from "react";
import { View } from "react-native";
import { defaultStyles } from "../../../constants/Styles";
import CustomImagePicker from "../../../components/pickers/CustomImagePicker";
import { ImagePickerAsset } from "expo-image-picker";
import { Formik, FormikErrors } from "formik";
import { Gender, User } from "../../../constants/User";
import CustomTextInput from "../../../components/inputs/CustomTextInput";
import CustomPhoneInput from "../../../components/inputs/CustomPhoneInput";
import CustomSelectPicker from "../../../components/pickers/CustomSelectPicker";
import { DatePickerInput } from "react-native-paper-dates";
import { useTranslation } from "react-i18next";

const userFetch: User = {
  fullname: "Sylvain Pierrot",
  country: "FR",
  gender: Gender.Male,
  phone: "+33778556136",
  email: "pierrot.sylvain14@gmail.com",
  password: "",
  biography: "Bonjour je suis DevOps",
};

export default function ProfileModifyScreen() {
  const { t, i18n } = useTranslation();

  return (
    <Formik
      initialValues={userFetch}
      onSubmit={(values) => console.log(values)}
    >
      {({ handleChange, handleBlur, setFieldValue, handleSubmit, values }) => (
        <View style={defaultStyles.pageFull}>
          <CustomImagePicker
            label={values.picture ? values.picture.uri : ""}
            onChange={function (
              image: ImagePickerAsset
            ): Promise<void | FormikErrors<User>> {
              throw new Error("Function not implemented.");
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
          <CustomTextInput
            value={values.fullname}
            label={"Fullname"}
            onChange={handleChange("fullname")}
            onBlur={handleBlur("fullname")}
          />
          <CustomTextInput
            value={values.country}
            label={"country"}
            onChange={handleChange("country")}
            onBlur={handleBlur("country")}
          />
          <CustomPhoneInput
            value={values.phone}
            label={"phone"}
            onChange={handleChange("phone")}
            onBlur={handleBlur("phone")}
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
          />
          <CustomTextInput
            value={values.email}
            label={"email"}
            onChange={handleChange("email")}
            onBlur={handleBlur("email")}
          />
        </View>
      )}
    </Formik>
  );
}
