export interface IPropsUser {
  fullname: string;
  birthdate: Date | undefined;
  country: string;
  gender: "MAN" | "WOMAN" | undefined;
  phone: string;
  email: string;
  password: string;
  biography: string;
  cv: string;
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
  cv: "",
};
