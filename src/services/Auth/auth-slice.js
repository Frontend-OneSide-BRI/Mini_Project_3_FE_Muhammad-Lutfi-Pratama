// create redux slice for movies

import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "authSlice",
  initialState: {
    token: "",
    expiresAt: "",
  },
  reducers: {
    setTokenAPI: (state, token) => {
      state.token = token.payload.request_token;
      state.expiresAt = token.payload.expires_at;
    },
  },
});

export const { setTokenAPI } = authSlice.actions;

export default authSlice.reducer;
