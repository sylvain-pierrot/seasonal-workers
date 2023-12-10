import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Experience } from "./types";

// Define a service using a base URL and expected endpoints
export const experiencesApi = createApi({
  reducerPath: "experiencesApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.EXPO_PUBLIC_API_URL }),
  endpoints: (builder) => ({
    getAllExperiences: builder.query<Experience[], void>({
      query: () => "/users/experiences",
      transformResponse: (response: Experience[]): Experience[] => {
        return response.map((experience) => ({
          ...experience,
          start_date: new Date(experience.start_date).toLocaleDateString(),
          end_date: new Date(experience.end_date).toLocaleDateString(),
        }));
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllExperiencesQuery } = experiencesApi;
