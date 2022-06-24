import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MemoryGameState } from "./types";
import { imageData } from "utils";
import { GamePhotoData } from ".";

const initialState: MemoryGameState = {
    photos: imageData,
    gamePhotos: [],
    pending: false,
    clickCount: 0,
    gameThemes: "minions",
};

export const memoryGameSlice = createSlice({
    name: "memoryGame",
    initialState,
    reducers: {
        setPending: (state: MemoryGameState, { payload }: PayloadAction<boolean>) => {
            state.pending = payload;
        },
        toggleFlip: ({ gamePhotos }: MemoryGameState, { payload }: PayloadAction<string>) => {
            gamePhotos.map(item => (item.isFlipped = item.id === payload ? true : false));
        },
        setMatch: (
            { gamePhotos }: MemoryGameState,
            { payload }: PayloadAction<{ id: string; match: boolean }>,
        ) => {
            const selected = gamePhotos.find(item => item.id === payload.id);
            if (selected) selected.match = payload.match;
        },
        incrementCount: (state: MemoryGameState) => {
            state.clickCount++;
        },
        resetGame: (state: MemoryGameState, { payload }: PayloadAction<GamePhotoData[]>) => {
            state.gamePhotos = payload;
            state.clickCount = initialState.clickCount;
        },
        setNewGame: (state: MemoryGameState, { payload }: PayloadAction<GamePhotoData[]>) => {
            state.gamePhotos = payload;
        },
    },
});

export const { setPending, toggleFlip, setMatch, incrementCount, resetGame, setNewGame } =
    memoryGameSlice.actions;

export default memoryGameSlice.reducer;
