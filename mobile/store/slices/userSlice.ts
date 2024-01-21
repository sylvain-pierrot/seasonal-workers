import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../services/types";
import { RootState } from "..";

export const initialState: Omit<User, "birthdate"> & { birthdate: string } = {
  id: "",
  username: "",
  email: "",
  first_name: "",
  last_name: "",
  gender: "",
  phone: "",
  description: "",
  work_state: "",
  country_code: "FR",
  birthdate: "",
};

const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    user: initialState,
  },
  reducers: {
    setUser(
      state,
      action: PayloadAction<{
        user: Omit<User, "birthdate"> & { birthdate: string };
      }>
    ) {
      const { user } = action.payload;
      state.user = user;
    },
  },
});

export const { setUser } = userSlice.actions;

const selectUser = (state: RootState) => state.userReducer.user;

export const selectUserFormat = createSelector([selectUser], (user) => ({
  ...user,
  birthdate: new Date(user.birthdate),
}));

export default userSlice.reducer;
