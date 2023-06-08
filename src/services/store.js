import { configureStore } from "@reduxjs/toolkit";
import { authAPI } from "src/services/Auth/auth-api";
import { moviesAPI } from "src/services/Movie/movies-api";

export const store = configureStore({
  reducer: {
    [authAPI.reducerPath]: authAPI.reducer,
    [moviesAPI.reducerPath]: moviesAPI.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(moviesAPI.middleware, authAPI.middleware),
});
