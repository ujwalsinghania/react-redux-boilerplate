import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";

const store = configureStore({
  reducer: {
    user: userReducer
  },
  devTools: true
});

export type RootState = ReturnType<typeof store.getState>

export default store