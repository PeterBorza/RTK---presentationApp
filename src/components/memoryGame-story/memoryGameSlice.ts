import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MemoryGameState, ColorSetInterFace } from "./types";
import { imageData, shuffledImages } from "../../utils";

const initialState: MemoryGameState = {
	photos: [...imageData()],
	gamePhotos: [...shuffledImages],
	colors: [],
	pending: false,
	error: false,
	isSidePanelOpen: false,
	clickCount: 0,
};

export const memoryGameSlice = createSlice({
	name: "memoryGame",
	initialState,
	reducers: {
		addColors: (
			{ colors }: MemoryGameState,
			{ payload }: PayloadAction<ColorSetInterFace[]>
		) => {
			colors.push(...payload);
		},
		addPalet: (
			{ colors }: MemoryGameState,
			{ payload }: PayloadAction<ColorSetInterFace>
		) => {
			colors.push(payload);
		},
		setPending: (
			{ pending }: MemoryGameState,
			{ payload }: PayloadAction<boolean>
		) => {
			pending = payload;
		},
		setError: (
			{ error }: MemoryGameState,
			{ payload }: PayloadAction<boolean>
		) => {
			error = payload;
		},
		toggleSidePanel: (
			{ isSidePanelOpen }: MemoryGameState,
			{ payload }: PayloadAction<boolean>
		) => {
			isSidePanelOpen = payload;
		},
		toggleFlip: (
			{ gamePhotos }: MemoryGameState,
			{ payload }: PayloadAction<string>
		) => {
			gamePhotos.map(
				item => (item.isFlipped = item.id === payload ? true : false)
			);
		},
		setMatch: (
			{ gamePhotos }: MemoryGameState,
			{ payload }: PayloadAction<{ id: string; match: boolean }>
		) => {
			const selected = gamePhotos.find(item => item.id === payload.id);
			if (selected) selected.match = payload.match;
		},
		incrementCount: (state: MemoryGameState) => {
			state.clickCount++;
		},
		resetGame: (state: MemoryGameState) => {
			state.gamePhotos = initialState.gamePhotos;
			state.clickCount = initialState.clickCount;
		},
	},
});

export const {
	addColors,
	addPalet,
	setPending,
	setError,
	toggleSidePanel,
	toggleFlip,
	setMatch,
	incrementCount,
	resetGame,
} = memoryGameSlice.actions;

export default memoryGameSlice.reducer;
