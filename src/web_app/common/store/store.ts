import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./reducer/reducer";
import dashboardReducer from "./reducer/dashboardReducer";

export const store = configureStore({
    reducer: {
      app: appReducer,
      dashboard: dashboardReducer
    },
  })

  export type RootState = ReturnType<typeof store.getState>