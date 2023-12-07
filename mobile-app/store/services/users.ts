import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { User } from "./types";
import { setUser } from "../slices/userSlice";

// Define a service using a base URL and expected endpoints
export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.EXPO_PUBLIC_API_URL }),
  endpoints: (builder) => ({
    getSeasonnalProfile: builder.query<
      Omit<User, "birthdate"> & { birthdate: string },
      void
    >({
      query: () => "/users",
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data: user } = await queryFulfilled;
          // `onSuccess` side-effect
          dispatch(setUser({ user }));
        } catch (err) {
          // `onError` side-effect
          console.error("GET user profile", err);
        }
      },
    }),
    updateSeasonnalProfile: builder.mutation<
      Omit<User, "birthdate"> & { birthdate: string },
      User
    >({
      query: (body) => ({
        url: "/users",
        method: "PUT",
        body: { ...body, birthdate: body.birthdate.toISOString() },
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data: user } = await queryFulfilled;
          // `onSuccess` side-effect
          dispatch(setUser({ user }));
        } catch (err) {
          // `onError` side-effect
          console.error("GET user profile", err);
        }
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetSeasonnalProfileQuery,
  useUpdateSeasonnalProfileMutation,
} = usersApi;
