import { configureStore } from "@reduxjs/toolkit";
import liftReducer from "../components/building-story/liftSlice";
import memoryGameReducer from "../components/memoryGame-story/memoryGameSlice";
import bubbleReducer from "../components/bubble-story/bubbleSlice";
import gasReducer from "../components/Gas/gasSlice";
import lightReducer from "../components/Light/lightSlice";

export const store = configureStore({
	reducer: {
		lift: liftReducer,
		memoryGame: memoryGameReducer,
		bubbles: bubbleReducer,
		gas: gasReducer,
		light: lightReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
