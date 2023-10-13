import * as ImagePicker from "expo-image-picker";
import * as DocumentPicker from "expo-document-picker";
import { Formik } from "formik";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Avatar, Button, TextInput, useTheme } from "react-native-paper";
//@ts-ignore
import { ProgressStep, ProgressSteps } from "react-native-progress-steps";
import { defaultUser } from "../constants/User";
import { DatePickerInput } from "react-native-paper-dates";
// import { useKeycloak } from "../hooks/useKeycloak";

export default function SignIn() {
  // const { signIn } = useKeycloak();
  const [image, setImage] = useState<ImagePicker.ImagePickerAsset | null>(null);
  const [document, setDocument] =
    useState<DocumentPicker.DocumentPickerAsset | null>(null);
  const [secure, setSecure] = useState(true);
  const theme = useTheme();

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
    previousBtnStyle: {
      backgroundColor: "#FFFFFF",
      borderColor: "#000000",
      borderWidth: 1,
      borderRadius: (theme.isV3 ? 5 : 1) * theme.roundness,
    },
    nextBtnStyle: {
      backgroundColor: "#007FFF",
      borderRadius: (theme.isV3 ? 5 : 1) * theme.roundness,
    },
    previousBtnTextStyle: {
      color: "#000000",
    },
    nextBtnTextStyle: {
      color: "#FFFFFF",
    },
  });

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [2, 2],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0]);
    }
  };
  const pickDocument = async () => {
    // No permissions request is necessary for launching the image library
    let result = await DocumentPicker.getDocumentAsync({
      copyToCacheDirectory: false,
      multiple: false,
      type: "application/pdf",
    });

    if (!result.canceled) {
      setDocument(result.assets[0]);
    }
  };

  return (
    <View style={styles.container}>
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
              nextBtnStyle={styles.nextBtnStyle}
              nextBtnTextStyle={styles.nextBtnTextStyle}
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
                    image
                      ? { uri: image.uri }
                      : require("../assets/images/default_pfp.png")
                  }
                />
                <Button
                  mode={"outlined"}
                  icon={"download"}
                  contentStyle={{ flexDirection: "row-reverse" }}
                  textColor={"#000000"}
                  onPress={pickImage}
                  style={{ flex: 1, marginLeft: 10 }}
                >
                  Your photo
                </Button>
              </View>
              <TextInput
                mode="outlined"
                placeholder="Fullname"
                style={styles.input}
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
                style={styles.input}
                outlineColor="transparent"
                animationType={"none"}
                disableFullscreenUI
                withModal={false}
              />
              <TextInput
                mode="outlined"
                placeholder="Country"
                style={styles.input}
                outlineColor="transparent"
                onChangeText={handleChange("country")}
                onBlur={handleBlur("country")}
                value={values.country}
              />
            </ProgressStep>
            <ProgressStep
              nextBtnStyle={styles.nextBtnStyle}
              nextBtnTextStyle={styles.nextBtnTextStyle}
              previousBtnStyle={styles.previousBtnStyle}
              previousBtnTextStyle={styles.previousBtnTextStyle}
            >
              <TextInput
                mode="outlined"
                placeholder="Phone number"
                style={styles.input}
                outlineColor="transparent"
                onChangeText={handleChange("phone")}
                onBlur={handleBlur("phone")}
                value={values.phone}
              />
              <TextInput
                mode="outlined"
                placeholder="Email"
                style={styles.input}
                outlineColor="transparent"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
              />
              <TextInput
                mode="outlined"
                placeholder="Biography"
                style={styles.input}
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
                buttonColor={document ? "#74CA72" : "transparent"}
                onPress={pickDocument}
                style={styles.button}
              >
                {document ? document.name : "Your CV"}
              </Button>
            </ProgressStep>
            <ProgressStep
              previousBtnStyle={styles.previousBtnStyle}
              previousBtnTextStyle={styles.previousBtnTextStyle}
              nextBtnDisabled
              finishBtnText=""
            >
              <TextInput
                mode="outlined"
                placeholder="Password"
                style={styles.input}
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
                placeholder="Password"
                style={styles.input}
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
              <Button
                mode={"contained"}
                onPress={() => handleSubmit()}
                style={styles.button}
              >
                Sign up
              </Button>
            </ProgressStep>
          </ProgressSteps>
        )}
      </Formik>
    </View>
  );
}
