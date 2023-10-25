import * as ImagePicker from "expo-image-picker";
import * as DocumentPicker from "expo-document-picker";

export enum Gender {
  Male = "MALE",
  Female = "FEMALE",
}

export interface IPropsUser {
  fullname: string;
  birthdate: Date | undefined;
  country: string;
  gender: Gender | undefined;
  phone: string;
  email: string;
  password: string;
  biography: string;
  cv: DocumentPicker.DocumentPickerAsset | undefined;
  picture: ImagePicker.ImagePickerAsset | undefined;
}

export const defaultUser: IPropsUser = {
  fullname: "",
  birthdate: undefined,
  country: "",
  gender: undefined,
  phone: "",
  email: "",
  password: "",
  biography: "",
  cv: undefined,
  picture: undefined,
};
