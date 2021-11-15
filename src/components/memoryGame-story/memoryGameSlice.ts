import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MemoryGameState, ColorSetInterFace } from "./types";
import { imageData } from "../../utils/my-images";

const initialState: MemoryGameState = {
	photos: [...imageData()],
	pair: [],
	colors: [],
	pending: false,
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
		setPending: (
			state: MemoryGameState,
			{ payload }: PayloadAction<boolean>
		) => {
			state.pending = payload;
		},
	},
});

export const { addToPair, resetPair, addColors, addPalet, setPending } =
	memoryGameSlice.actions;

export default memoryGameSlice.reducer;
