import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    isAuthenticated: false,
    permissions: [],
  },
  reducers: {
    setMe: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.permissions = [];
    },
    setPermissions: (state, action) => {
      state.permissions = action.payload;
    },
  },
});

export const { setMe, logout, setPermissions } = userSlice.actions;

export default userSlice.reducer;
