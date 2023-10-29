import React from "react";
import * as DocumentPicker from "expo-document-picker";
import { Button } from "react-native-paper";
import { defaultStyles } from "../constants/Styles";
import { FormikErrors } from "formik";
import { User } from "../constants/User";
import { TextStyle } from "react-native";

interface IPropsCustomDocumentPicker {
  value?: DocumentPicker.DocumentPickerAsset;
  label: string;
  style?: TextStyle;
  onChange: (
    document: DocumentPicker.DocumentPickerAsset
  ) => Promise<void | FormikErrors<User>>;
}

const CustomDocumentPicker = ({
  value,
  label,
  style,
  onChange,
}: IPropsCustomDocumentPicker) => {
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

  return (
    <Button
      mode={"outlined"}
      icon={"download"}
      contentStyle={{ flexDirection: "row-reverse" }}
      textColor="#000000"
      buttonColor={value ? "#74CA72" : "transparent"}
      onPress={async () => {
        const document = await pickDocument();
        if (document) {
          await onChange(document);
        }
      }}
      style={style}
    >
      {value ? value.name : label}
    </Button>
  );
};

export default CustomDocumentPicker;
