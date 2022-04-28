import { configureStore } from "@reduxjs/toolkit";
import liftReducer from "features/building-story/liftSlice";
import memoryGameReducer from "features/memoryGame-story/memoryGameSlice";
import guessGameReducer from "features/guess-the-colors/guessGameSlice";
import bubbleReducer from "features/bubble-story/bubbleSlice";
import gasReducer from "features/Gas/gasSlice";
import lightReducer from "features/Light/lightSlice";
import appReducer from "./appSlice";

export const store = configureStore({
    reducer: {
        lift: liftReducer,
        memoryGame: memoryGameReducer,
        guessGame: guessGameReducer,
        bubbles: bubbleReducer,
        gas: gasReducer,
        light: lightReducer,
        app: appReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
