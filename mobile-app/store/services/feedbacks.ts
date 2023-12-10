import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Feedback } from "./types";

// Define a service using a base URL and expected endpoints
export const feedbacksApi = createApi({
  reducerPath: "feedbacksApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.EXPO_PUBLIC_API_URL }),
  endpoints: (builder) => ({
    getAllFeedbacks: builder.query<Feedback[], void>({
      query: () => "/users/feedbacks",
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllFeedbacksQuery } = feedbacksApi;
