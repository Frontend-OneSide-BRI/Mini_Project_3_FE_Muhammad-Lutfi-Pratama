import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "moviesSlice",
  initialState: {
    isLoading: false,
    popularMovies: [],
  },
  reducers: {
    popularMovies: state => {},
  },
});

export const { popularMovies } = moviesSlice.actions;

export default moviesSlice.reducer;
