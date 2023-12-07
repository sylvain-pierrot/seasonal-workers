import { createSlice } from "@reduxjs/toolkit";
import { DiscoveryDocument } from "expo-auth-session";

const initialState: {
  isAuthenticated: boolean;
} = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setIsAuthenticated(state, action) {
      const { isAuth } = action.payload;
      state.isAuthenticated = isAuth;
    },
  },
});

export const { setIsAuthenticated } = authSlice.actions;

export default authSlice.reducer;
