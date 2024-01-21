import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Job } from "./types";

// Define a service using a base URL and expected endpoints
export const jobsApi = createApi({
  reducerPath: "jobsApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.EXPO_PUBLIC_API_URL }),
  endpoints: (builder) => ({
    getAllJobs: builder.query<Job[], void>({
      query: () => "/jobs",
      transformResponse: (response: Job[]): Job[] => {
        return response.map((job) => ({
          ...job,
          start_date: new Date(job.start_date).toLocaleDateString(),
          end_date: new Date(job.end_date).toLocaleDateString(),
        }));
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllJobsQuery } = jobsApi;
