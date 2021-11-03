import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MemoryGameState, ColorSetInterFace } from "./types";

const initialState: MemoryGameState = {
	photos: ["safv", "dfssdv"],
	pair: [],
	colors: [],
	pending: null,
};

export const memoryGameSlice = createSlice({
	name: "memoryGame",
	initialState,
	reducers: {
		addToPair: (
			state: MemoryGameState,
			{ payload }: PayloadAction<string>
		) => {
			state.pair.push(payload);
		},
		resetPair: (state: MemoryGameState) => {
			state.pair = [];
		},
		addColors: (
			state: MemoryGameState,
			{ payload }: PayloadAction<ColorSetInterFace[]>
		) => {
			state.colors.push(...payload);
		},
		addPalet: (
			state: MemoryGameState,
			{ payload }: PayloadAction<ColorSetInterFace>
		) => {
			state.colors.push(payload);
		},
	},
});

export const { addToPair, resetPair, addColors, addPalet } =
	memoryGameSlice.actions;

export default memoryGameSlice.reducer;
