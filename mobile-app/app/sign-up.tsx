import * as ImagePicker from "expo-image-picker";
import * as DocumentPicker from "expo-document-picker";
import { Formik } from "formik";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Avatar, Button, TextInput, useTheme } from "react-native-paper";
//@ts-ignore
import { ProgressStep, ProgressSteps } from "react-native-progress-steps";
import { Gender, defaultUser } from "../constants/User";
import { DatePickerInput } from "react-native-paper-dates";
// import { useKeycloak } from "../hooks/useKeycloak";
import { Picker } from "@react-native-picker/picker";
import { defaultStyles } from "../constants/Styles";
import { Stack } from "expo-router";

export default function SignUp() {
  // const { signIn } = useKeycloak();
  const [secure, setSecure] = useState(true);
  const theme = useTheme();
  const [confirmPassword, setConfirmPassword] = useState("");

  const pickImage = async (): Promise<ImagePicker.ImagePickerAsset | null> => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [2, 2],
      quality: 1,
    });

    if (!result.canceled) {
      return result.assets[0];
    }

    return null;
  };
  const pickDocument =
    async (): Promise<DocumentPicker.DocumentPickerAsset | null> => {
      let result = await DocumentPicker.getDocumentAsync({
        copyToCacheDirectory: false,
        multiple: false,
        type: "application/pdf",
      });

      if (!result.canceled) {
        return result.assets[0];
      }

      return null;
    };

  const handleConfirmPassword = (pwd: string, cPwd: string) => {
    return pwd.length > 7 && pwd === cPwd;
  };

  return (
    <View style={defaultStyles.container}>
      <Formik
        initialValues={defaultUser}
        onSubmit={(values) => console.log(values)}
        style={{ flex: 1, flexDirection: "row", alignItems: "center" }}
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
              nextBtnStyle={{
                ...styles.nextBtnStyle,
                ...{ borderRadius: (theme.isV3 ? 5 : 1) * theme.roundness },
              }}
              nextBtnTextStyle={styles.nextBtnTextStyle}
              nextBtnDisabled={
                !values.picture ||
                !values.fullname ||
                !values.birthdate ||
                !values.country ||
                !values.gender
              }
            >
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Avatar.Image
                  size={60}
                  style={{ backgroundColor: "transparent" }}
                  source={
                    values.picture
                      ? { uri: values.picture.uri }
                      : require("../assets/images/default_pfp.png")
                  }
                />
                <Button
                  mode={"outlined"}
                  icon={"download"}
                  contentStyle={{ flexDirection: "row-reverse" }}
                  textColor={"#000000"}
                  onPress={async () => {
                    const image = await pickImage();
                    if (image) {
                      setFieldValue("picture", image);
                    }
                  }}
                  style={{ flex: 1, marginLeft: 10 }}
                >
                  Your photo
                </Button>
              </View>
              <TextInput
                mode="outlined"
                placeholder="Fullname"
                style={defaultStyles.input}
                outlineColor="transparent"
                onChangeText={handleChange("fullname")}
                onBlur={handleBlur("fullname")}
                value={values.fullname}
              />
              <DatePickerInput
                locale="en"
                label="Birthdate"
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
              <TextInput
                mode="outlined"
                placeholder="Country"
                style={defaultStyles.input}
                outlineColor="transparent"
                onChangeText={handleChange("country")}
                onBlur={handleBlur("country")}
                value={values.country}
              />
              <Picker
                mode={"dialog"}
                placeholder="Gender"
                style={[
                  styles.picker,
                  {
                    color:
                      values.gender &&
                      Object.values(Gender).includes(values.gender)
                        ? "#000000"
                        : "#8F8F8F",
                  },
                ]}
                selectionColor={"red"}
                selectedValue={values.gender}
                onValueChange={handleChange("gender")}
                onBlur={handleBlur("gender")}
                prompt="Options"
              >
                <Picker.Item label="Please select an option..." value={""} />
                <Picker.Item label="Male" value={Gender.Male} />
                <Picker.Item label="Female" value={Gender.Female} />
              </Picker>
            </ProgressStep>
            <ProgressStep
              nextBtnStyle={{
                ...styles.nextBtnStyle,
                ...{ borderRadius: (theme.isV3 ? 5 : 1) * theme.roundness },
              }}
              nextBtnTextStyle={styles.nextBtnTextStyle}
              previousBtnStyle={{
                ...styles.previousBtnStyle,
                ...{ borderRadius: (theme.isV3 ? 5 : 1) * theme.roundness },
              }}
              previousBtnTextStyle={styles.previousBtnTextStyle}
              nextBtnDisabled={
                !values.phone ||
                !values.email ||
                !values.biography ||
                !values.country ||
                !values.gender
              }
            >
              <TextInput
                mode="outlined"
                placeholder="Phone number"
                style={defaultStyles.input}
                outlineColor="transparent"
                onChangeText={handleChange("phone")}
                onBlur={handleBlur("phone")}
                value={values.phone}
              />
              <TextInput
                mode="outlined"
                placeholder="Email"
                style={defaultStyles.input}
                outlineColor="transparent"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
              />
              <TextInput
                mode="outlined"
                placeholder="Biography"
                style={defaultStyles.input}
                outlineColor="transparent"
                onChangeText={handleChange("biography")}
                onBlur={handleBlur("biography")}
                value={values.biography}
              />
              <Button
                mode={"outlined"}
                icon={"download"}
                contentStyle={{ flexDirection: "row-reverse" }}
                textColor="#000000"
                buttonColor={values.cv ? "#74CA72" : "transparent"}
                onPress={async () => {
                  const document = await pickDocument();
                  if (document) {
                    setFieldValue("cv", document);
                  }
                }}
                style={defaultStyles.button}
              >
                {values.cv ? values.cv.name : "Your CV"}
              </Button>
            </ProgressStep>
            <ProgressStep
              nextBtnStyle={{
                ...styles.nextBtnStyle,
                ...{ borderRadius: (theme.isV3 ? 5 : 1) * theme.roundness },
              }}
              nextBtnTextStyle={styles.nextBtnTextStyle}
              previousBtnStyle={{
                ...styles.previousBtnStyle,
                ...{ borderRadius: (theme.isV3 ? 5 : 1) * theme.roundness },
              }}
              previousBtnTextStyle={styles.previousBtnTextStyle}
              finishBtnText="Sign up"
              onSubmit={handleSubmit}
              nextBtnDisabled={handleConfirmPassword(
                values.password,
                confirmPassword
              )}
            >
              <TextInput
                mode="outlined"
                placeholder="Password"
                style={defaultStyles.input}
                outlineColor="transparent"
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                secureTextEntry={secure}
                right={
                  <TextInput.Icon
                    icon={secure ? "eye" : "eye-off"}
                    onPress={() => setSecure(!secure)}
                  />
                }
              />
              <TextInput
                mode="outlined"
                placeholder="Confirm password"
                style={defaultStyles.input}
                theme={{
                  colors: {
                    primary: handleConfirmPassword(
                      values.password,
                      confirmPassword
                    )
                      ? theme.colors.primary
                      : "red",
                  },
                }}
                outlineColor={"transparent"}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry={secure}
                right={
                  <TextInput.Icon
                    icon={secure ? "eye" : "eye-off"}
                    onPress={() => setSecure(!secure)}
                  />
                }
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
