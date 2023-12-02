import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { useDispatch } from "react-redux";
import authSlice from "./slices/authSlice";
import userSlice from "./slices/userSlice";
import { jobsApi } from "./services/jobs";
import { usersApi } from "./services/users";
import { experiencesApi } from "./services/experiences";
import { availabilitiesApi } from "./services/availabilities";
import { referentsApi } from "./services/referents";
import { feedbacksApi } from "./services/feedbacks";

const store = configureStore({
  reducer: {
    [jobsApi.reducerPath]: jobsApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [experiencesApi.reducerPath]: experiencesApi.reducer,
    [availabilitiesApi.reducerPath]: availabilitiesApi.reducer,
    [referentsApi.reducerPath]: referentsApi.reducer,
    [feedbacksApi.reducerPath]: feedbacksApi.reducer,
    authReducer: authSlice,
    userReducer: userSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      jobsApi.middleware,
      usersApi.middleware,
      experiencesApi.middleware,
      availabilitiesApi.middleware,
      referentsApi.middleware,
      feedbacksApi.middleware
    ),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
