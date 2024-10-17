import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers";

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
    }),
  devTools: process.env.NODE_ENV !== "production",
});

export type GetState = typeof store.getState;

export type RootState = ReturnType<GetState>;

export type AppDispatch = typeof store.dispatch;
