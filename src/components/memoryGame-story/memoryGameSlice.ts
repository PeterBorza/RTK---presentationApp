import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MemoryGameState, ColorSetInterFace } from "./types";
import { imageData } from "../../utils/my-images";
import { gameImages } from "../../utils";
import { GamePhotoData } from ".";

const initialState: MemoryGameState = {
	photos: [...imageData()],
	gamePhotos: [...gameImages],
	pair: [],
	colors: [],
	pending: false,
	error: false,
	isSidePanelOpen: false,
};

export const memoryGameSlice = createSlice({
	name: "memoryGame",
	initialState,
	reducers: {
		addToPair: (
			state: MemoryGameState,
			{ payload }: PayloadAction<GamePhotoData>
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
		setError: (
			state: MemoryGameState,
			{ payload }: PayloadAction<boolean>
		) => {
			state.error = payload;
		},
		toggleSidePanel: (
			state: MemoryGameState,
			{ payload }: PayloadAction<boolean>
		) => {
			state.isSidePanelOpen = payload;
		},
		toggleFlipped: (
			state: MemoryGameState,
			{ payload }: PayloadAction<{ id: number; flipped: boolean }>
		) => {
			const id = state.gamePhotos.find(
				item => item.frontSrc.gameId === payload.id
			);
			if (id) id.isFlipped = payload.flipped;
		},
	},
});

export const {
	addToPair,
	resetPair,
	addColors,
	addPalet,
	setPending,
	setError,
	toggleSidePanel,
	toggleFlipped,
} = memoryGameSlice.actions;

export default memoryGameSlice.reducer;
