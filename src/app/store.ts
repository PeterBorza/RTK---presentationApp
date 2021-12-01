import { configureStore } from "@reduxjs/toolkit";
import liftReducer from "../components/building-story/liftSlice";
import memoryGameReducer from "../components/memoryGame-story/memoryGameSlice";
import bubbleReducer from "../components/bubble-story/bubbleSlice";
import utilitiesReducer from "../components/utility-package/utilitiesSlice";

export const store = configureStore({
	reducer: {
		lift: liftReducer,
		memoryGame: memoryGameReducer,
		bubbles: bubbleReducer,
		utilities: utilitiesReducer,
	},
});

export type typeofLiftState = ReturnType<typeof store.getState>;
export type typeofMemoryGameState = ReturnType<typeof store.getState>;
export type typeofBubbleState = ReturnType<typeof store.getState>;
export type typeofUtilityState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
