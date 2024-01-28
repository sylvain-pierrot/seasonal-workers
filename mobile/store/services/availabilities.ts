import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Availability } from "./types";

// Define a service using a base URL and expected endpoints
export const availabilitiesApi = createApi({
  reducerPath: "availabilitiesApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.EXPO_PUBLIC_API_URL }),
  endpoints: (builder) => ({
    getAllAvailabilities: builder.query<Availability[], void>({
      query: () => "/users/availabilities",
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllAvailabilitiesQuery } = availabilitiesApi;
