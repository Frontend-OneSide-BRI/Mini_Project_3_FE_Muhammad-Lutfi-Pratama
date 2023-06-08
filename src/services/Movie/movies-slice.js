import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "moviesSlice",
  initialState: {
    isLoading: false,
    popularMoviesData: [],
    trendingWeeklyMovies: [],
  },
  reducers: {
    popularMovies: (state, movies) => {
      state.popularMoviesData = movies.payload;
    },
    trendingWeeklyMovies: (state, movies) => {
      state.trendingWeeklyMovies = movies.payload;
    },
  },
});

export const { popularMovies, trendingWeeklyMovies } = moviesSlice.actions;

export default moviesSlice.reducer;
