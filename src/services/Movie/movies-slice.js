// create redux slice for movies

import { createSlice } from "@reduxjs/toolkit";
import { useGetPopularMovieQuery } from "./movies-api";

export const moviesSlice = createSlice({
  name: "counter",
  initialState: {
    isLoading: false,
    popularMovies: [],
  },
  reducers: {
    getPopularMovies:  state => {
    },
  },
});

export const { getPopularMovies } = moviesSlice.actions;

export default moviesSlice.reducer;
