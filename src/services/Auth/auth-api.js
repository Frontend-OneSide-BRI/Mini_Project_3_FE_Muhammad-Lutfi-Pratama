import { BASE_URL, HEADER } from "src/config";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authAPI = createApi({
  reducerPath: "authAPI",
  baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL}` }),
  endpoints: builder => ({
    generateToken: builder.query({
      query: () => ({
        url: `/authentication/token/new`,
        headers: HEADER,
      }),
    }),
    authenticateToken: builder.query({
      query: token => ({
        url: `/authenticate/${token}`,
      }),
    }),
  }),
});

// create RTK query hooks based on the generated endpoints for login TMDB API

export const { useGenerateTokenQuery, useAuthenticateTokenQuery } = authAPI;
