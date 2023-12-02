import * as ImagePicker from "expo-image-picker";
import * as DocumentPicker from "expo-document-picker";
import { CountryCode } from "react-native-country-picker-modal";

// User Auth SignUp
//
export enum Gender {
  Male = "MALE",
  Female = "FEMALE",
}

export interface User {
  fullname: string;
  birthdate?: Date;
  countryCode: CountryCode;
  gender: Gender;
  phone: string;
  email: string;
  password: string;
  biography: string;
  cv?: DocumentPicker.DocumentPickerAsset;
  picture?: ImagePicker.ImagePickerAsset;
}

export const defaultUser: User = {
  fullname: "",
  countryCode: "FR",
  gender: Gender.Male,
  phone: "",
  email: "",
  password: "",
  biography: "",
};

// User Forgot PAssword
//
export interface UserForgotPassword {
  email: string;
}

export const defaultUserForgotPassword: UserForgotPassword = {
  email: "",
};
