import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MemoryGameState, ColorSetInterFace } from "./types";
import { imageData, gameImagesSlice } from "../../utils";
import { GamePhotoData } from ".";

const initialState: MemoryGameState = {
	photos: [...imageData()],
	gamePhotos: [...gameImagesSlice],
	matches: [],
	colors: [],
	pending: false,
	error: false,
	isSidePanelOpen: false,
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
		toggleFlipped: (
			{ gamePhotos }: MemoryGameState,
			{ payload }: PayloadAction<{ index: number; flipped: boolean }>
		) => {
			const idx = gamePhotos.findIndex((_, idx) => idx === payload.index);
			if (idx) gamePhotos[idx].isFlipped = payload.flipped;
		},
		addToMatches: (
			{ matches }: MemoryGameState,
			{ payload }: PayloadAction<GamePhotoData>
		) => {
			matches.push(payload);
		},
	},
});

export const {
	addColors,
	addPalet,
	setPending,
	setError,
	toggleSidePanel,
	toggleFlipped,
	addToMatches,
} = memoryGameSlice.actions;

export default memoryGameSlice.reducer;
