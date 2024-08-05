import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_BASE_API_URL }),
  reducerPath: "api",
  tagTypes: [],
  endpoints: (build) => ({}),
});

