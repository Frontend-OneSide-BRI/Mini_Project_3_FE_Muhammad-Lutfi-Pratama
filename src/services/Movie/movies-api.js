import { API_KEY, BASE_URL, HEADER } from "src/config";
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
    trendingMoviesWeekly: builder.query({
      query: () => ({ url: "/trending/movie/week", headers: HEADER }),
    }),
    getMovieById: builder.query({
      query: id => `/movie/${id}?api_key=${API_KEY}`,
    }),
  }),
});

export const {
  useGetPopularMovieQuery,
  useTrendingMoviesWeeklyQuery,
  useGetMovieByIdQuery,
} = moviesAPI;
