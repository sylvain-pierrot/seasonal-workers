import React from "react";
import * as ImagePicker from "expo-image-picker";
import { View } from "react-native";
import { Avatar, Button } from "react-native-paper";
import { FormikErrors } from "formik";
import { UserAuthSignUp } from "../constants/User";

interface IPropsCustomDocumentPicker {
  value?: ImagePicker.ImagePickerAsset;
  label: string;
  handleSetValue: (
    image: ImagePicker.ImagePickerAsset
  ) => Promise<void | FormikErrors<UserAuthSignUp>>;
}

const CustomImagePicker = ({
  value,
  label,
  handleSetValue,
}: IPropsCustomDocumentPicker) => {
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

  return (
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
          value ? { uri: value.uri } : require("../assets/images/avatar.png")
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
            await handleSetValue(image);
          }
        }}
        style={{ flex: 1, marginLeft: 10 }}
      >
        {label}
      </Button>
    </View>
  );
};

export default CustomImagePicker;
