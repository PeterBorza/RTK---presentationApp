import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GameTheme, MemoryGameState } from "./types";
import { imageData } from "utils";
import { GamePhotoData } from ".";
import { shuffledChristmas, shuffledMinions } from "./game-images";

export const gameThemes = {
    minions: shuffledMinions,
    christmas: shuffledChristmas,
};

const initialState: MemoryGameState = {
    photos: imageData,
    gamePhotos: gameThemes["minions"],
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
            const newGame = payload.map(item => {
                return {
                    ...item,
                    isFlipped: false,
                    match: false,
                };
            });
            state.gamePhotos = newGame;
            state.clickCount = initialState.clickCount;
        },
        toggleTheme: (state: MemoryGameState, { payload }: PayloadAction<GameTheme>) => {
            state.gameThemes = payload;
        },
    },
});

export const { setPending, toggleFlip, setMatch, incrementCount, resetGame, toggleTheme } =
    memoryGameSlice.actions;

export default memoryGameSlice.reducer;
