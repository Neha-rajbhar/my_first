import { configureStore } from "@reduxjs/toolkit";
import buttonReducer from "./ButtonSlice";

export const store = configureStore({
  reducer: {
    button: buttonReducer,
  },
});