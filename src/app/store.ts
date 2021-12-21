import { configureStore } from "@reduxjs/toolkit";
import liftReducer from "../features/building-story/liftSlice";
import memoryGameReducer from "../features/memoryGame-story/memoryGameSlice";
import bubbleReducer from "../features/bubble-story/bubbleSlice";
import gasReducer from "../features/Gas/gasSlice";
import lightReducer from "../features/Light/lightSlice";
import appReducer from "./appSlice";

export const store = configureStore({
    reducer: {
        lift: liftReducer,
        memoryGame: memoryGameReducer,
        bubbles: bubbleReducer,
        gas: gasReducer,
        light: lightReducer,
        app: appReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
