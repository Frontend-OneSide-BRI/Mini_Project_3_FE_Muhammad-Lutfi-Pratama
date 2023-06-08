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
      query: id => ({
        url: `/movie/${id}`,
        headers: HEADER,
      }),
    }),
    searchMovie: builder.query({
      query: search =>
        `search/movie?api_key=${API_KEY}&language=en-US&query=${search}&page=1&include_adult=false`,
    }),
  }),
});

export const {
  useGetPopularMovieQuery,
  useTrendingMoviesWeeklyQuery,
  useGetMovieByIdQuery,
  useSearchMovieQuery,
} = moviesAPI;
