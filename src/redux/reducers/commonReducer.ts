import { createSlice } from "@reduxjs/toolkit";

export const common = createSlice({
  name: "common",
  initialState: {
    isLoading: false,
  },
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setLoading } = common.actions;

export default common.reducer;
