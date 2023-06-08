import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "moviesSlice",
  initialState: {
    isLoading: false,
    popularMovies: [],
    trendingWeeklyMovies: [],
  },
  reducers: {
    popularMovies: (state, movies) => {
      state.popularMovies = movies;
    },
    trendingWeeklyMovies: (state, movies) => {
      state.trendingWeeklyMovies = movies;
    },
  },
});

export const { popularMovies, trendingWeeklyMovies } = moviesSlice.actions;

export default moviesSlice.reducer;
