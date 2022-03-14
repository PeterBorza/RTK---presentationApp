import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MemoryGameState } from "./types";
import { imageData } from "../../utils";
import { shuffledImages } from "./game-images";
import { GamePhotoData } from ".";

const initialState: MemoryGameState = {
    photos: imageData,
    gamePhotos: shuffledImages,
    pending: false,
    error: false,
    clickCount: 0,
};

export const memoryGameSlice = createSlice({
    name: "memoryGame",
    initialState,
    reducers: {
        setPending: ({ pending }: MemoryGameState, { payload }: PayloadAction<boolean>) => {
            pending = payload;
        },
        setError: ({ error }: MemoryGameState, { payload }: PayloadAction<boolean>) => {
            error = payload;
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
        resetGame: (state: MemoryGameState) => {
            state.gamePhotos = initialState.gamePhotos;
            state.clickCount = initialState.clickCount;
        },
        setNewGame: (state: MemoryGameState, { payload }: PayloadAction<GamePhotoData[]>) => {
            state.gamePhotos = payload;
        },
    },
});

export const { setPending, setError, toggleFlip, setMatch, incrementCount, resetGame, setNewGame } =
    memoryGameSlice.actions;

export default memoryGameSlice.reducer;
