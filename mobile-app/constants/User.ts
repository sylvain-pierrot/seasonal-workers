import * as ImagePicker from "expo-image-picker";
import * as DocumentPicker from "expo-document-picker";
import { CountryCode } from "react-native-country-picker-modal";

// User Auth SignUp
//
export enum Gender {
  Male = "MALE",
  Female = "FEMALE",
}

export interface UserAuthSignUp {
  fullname: string;
  birthdate?: Date;
  country: CountryCode;
  gender: Gender;
  phone: string;
  email: string;
  password: string;
  biography: string;
  cv?: DocumentPicker.DocumentPickerAsset;
  picture?: ImagePicker.ImagePickerAsset;
}

export const defaultUserAuthSignUp: UserAuthSignUp = {
  fullname: "",
  country: "FR",
  gender: Gender.Male,
  phone: "",
  email: "",
  password: "",
  biography: "",
};

// User Auth SignIn
//
export interface UserAuthSignIn {
  email: string;
  password: string;
}

export const defaultUserAuthSignIn: UserAuthSignIn = {
  email: "",
  password: "",
};
