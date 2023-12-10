import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Referent } from "./types";

// Define a service using a base URL and expected endpoints
export const referentsApi = createApi({
  reducerPath: "referentsApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.EXPO_PUBLIC_API_URL }),
  endpoints: (builder) => ({
    getAllReferents: builder.query<Referent[], void>({
      query: () => "/users/referents",
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllReferentsQuery } = referentsApi;
