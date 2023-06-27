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

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type GetState = typeof store.getState;
