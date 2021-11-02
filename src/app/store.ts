import { configureStore } from "@reduxjs/toolkit";
import liftReducer from "../components/building-story/liftSlice";
import memoryGameReducer from "../components/memoryGame-story/memoryGameSlice";
import bubbleReducer from "../components/bubble-story/bubbleSlice";
import houseReducer from "../components/house-keeping/houseSlice";

export const store = configureStore({
	reducer: {
		lift: liftReducer,
		memoryGame: memoryGameReducer,
		bubbles: bubbleReducer,
		house: houseReducer,
	},
});

export type typeofLiftState = ReturnType<typeof store.getState>;
export type typeofMemoryGameState = ReturnType<typeof store.getState>;
export type typeofBubbleState = ReturnType<typeof store.getState>;
export type typeofHouseState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
