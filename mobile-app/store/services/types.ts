import * as ImagePicker from "expo-image-picker";
import { CountryCode } from "react-native-country-picker-modal";

export interface Job {
  title: string;
  category: string;
  start_date: string;
  end_date: string;
  salary: number;
  description: string;
  publication_date: string;
}

export interface Experience {
  title: string;
  company: string;
  start_date: string;
  end_date: string;
}

export interface Availability {
  title: string;
  category: string;
  start_date: string;
  end_date: string;
}

export interface Feedback {
  name: string;
  advice: string;
  rating: number;
  publication_date: string;
}

export interface Referent {
  name: string;
  company: string;
  phone: string;
  email: string;
}

export interface User {
  id: string;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  gender: string;
  birthdate: Date;
  country_code: CountryCode;
  phone: string;
  description: string;
  work_state: string;
  picture?: ImagePicker.ImagePickerAsset;
}
