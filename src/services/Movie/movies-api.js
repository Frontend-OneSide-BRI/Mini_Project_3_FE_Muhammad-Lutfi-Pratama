import { BASE_URL, HEADER } from "src/config";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const moviesAPI = createApi({
  reducerPath: "moviesAPI",
  baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL}` }),
  endpoints: builder => ({
    getPopularMovie: builder.query({
      query: () => ({
        url: `/movie/popular`,
        headers: HEADER,
      }),
    }),
  }),
});

export const { useGetPopularMovieQuery } = moviesAPI;
