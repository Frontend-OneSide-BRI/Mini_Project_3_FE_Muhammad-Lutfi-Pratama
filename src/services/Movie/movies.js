import { BASE_URL } from "src/config";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL}` }),
  endpoints: builder => ({
    getMoview: builder.query({}),
  }),
});

export const { useGetMoviewQuery } = moviesApi;
