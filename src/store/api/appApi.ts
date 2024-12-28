import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_APP_API_URL,
});

export const appApi = createApi({
  baseQuery,
  reducerPath: "appApi",
  endpoints: () => ({}),
});
