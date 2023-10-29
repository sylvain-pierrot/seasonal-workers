import React from "react";
import * as ImagePicker from "expo-image-picker";
import { FormikErrors } from "formik";
import { User } from "../constants/User";
import CustomButtonOutlined from "./buttons/CustomButtonOutlined";
import { TextStyle } from "react-native";

interface IPropsCustomDocumentPicker {
  value?: ImagePicker.ImagePickerAsset;
  label: string;
  reverse?: boolean;
  style?: TextStyle;
  onChange: (
    image: ImagePicker.ImagePickerAsset
  ) => Promise<void | FormikErrors<User>>;
}

const CustomImagePicker = ({
  value,
  style,
  label,
  reverse,
  onChange,
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
    <CustomButtonOutlined
      reverse={reverse}
      icon={"download"}
      label={label}
      style={style}
      onPress={async () => {
        const image = await pickImage();
        if (image) {
          await onChange(image);
        }
      }}
    />
  );
};

export default CustomImagePicker;
