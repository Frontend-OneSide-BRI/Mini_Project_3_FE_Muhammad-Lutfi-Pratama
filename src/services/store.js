import { configureStore } from "@reduxjs/toolkit";
import { authAPI } from "src/services/Auth/auth-api";
import { moviesAPI } from "src/services/Movie/movies-api";
import authSlice from "./Auth/auth-slice";
import moviesSlice from "./Movie/movies-slice";

export const store = configureStore({
  reducer: {
    [authAPI.reducerPath]: authAPI.reducer,
    [moviesAPI.reducerPath]: moviesAPI.reducer,
    authSlice: authSlice,
    moviesSlice: moviesSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(moviesAPI.middleware, authAPI.middleware),
});
