import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";
import { useDispatch } from "react-redux";
import commonReducer from "./reducers/commonReducer";

const store = configureStore({
  reducer: {
    user: userReducer,
    common: commonReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
