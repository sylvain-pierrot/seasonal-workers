import React from "react";
import * as ImagePicker from "expo-image-picker";
import { FormikErrors } from "formik";
import CustomButtonOutlined from "../buttons/CustomButtonOutlined";
import { TextStyle } from "react-native";
import CustomButtonText from "../buttons/CustomButtonText";
import { User } from "../../store/services/types";

interface IPropsCustomDocumentPicker {
  mode?: "text" | "outlined" | "contained";
  value?: ImagePicker.ImagePickerAsset;
  label: string;
  textColor?: string;
  disableIcon?: boolean;
  reverse?: boolean;
  style?: TextStyle;
  onChange: (
    image: ImagePicker.ImagePickerAsset
  ) => Promise<void | FormikErrors<User>>;
}

const CustomImagePicker = ({
  mode = "outlined",
  value,
  style,
  label,
  textColor,
  disableIcon,
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
    <>
      {mode === "outlined" && (
        <CustomButtonOutlined
          reverse={reverse}
          icon={disableIcon ? undefined : "download"}
          label={label}
          style={style}
          textColor={textColor}
          onPress={async () => {
            const image = await pickImage();
            if (image) {
              await onChange(image);
            }
          }}
        />
      )}
      {mode === "text" && (
        <CustomButtonText
          reverse={reverse}
          icon={disableIcon ? undefined : "download"}
          label={label}
          style={style}
          textColor={textColor}
          onPress={async () => {
            const image = await pickImage();
            if (image) {
              await onChange(image);
            }
          }}
        />
      )}
    </>
  );
};

export default CustomImagePicker;
