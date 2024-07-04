import { configureStore } from "@reduxjs/toolkit";
import webstoreReducer from "./reducer";

export const store = configureStore({
    reducer: {
      websiteReducer: webstoreReducer
    },
  })