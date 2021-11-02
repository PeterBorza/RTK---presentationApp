import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { typeofMemoryGameState } from "../../app/store";

export type ColorString = string[];

export interface ColorSetInterFace {
	id: number;
	palet: ColorString;
}

export interface MemoryGameState {
	photos: string[];
	pair: string[];
	colors: ColorSetInterFace[];
	pending: string | null;
}

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

export const memoryGameState = (state: typeofMemoryGameState) =>
	state.memoryGame;

export const colorSelector = (state: typeofMemoryGameState) =>
	state.memoryGame.colors;

export const paletSelector = (state: typeofMemoryGameState) =>
	state.memoryGame.colors.map(palet => palet.palet);

export default memoryGameSlice.reducer;
