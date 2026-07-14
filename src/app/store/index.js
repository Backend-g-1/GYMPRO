import { configureStore } from "@reduxjs/toolkit";
import trainerReducer from "./slices/trainerSlice";

export const store = configureStore({
  reducer: {
    trainers: trainerReducer,
  },
  devTools: import.meta.env.DEV,
});
