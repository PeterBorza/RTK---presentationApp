import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GameTheme, GameThemeType, MemoryGameState } from "./types";
import { imageData } from "utils";
import { GamePhotoData } from "./types";
import { shuffledChristmas, shuffledMinions, shuffledCuteAnimals } from "./game-images";

export const themeShuffledImages: Record<GameTheme, GamePhotoData[]> = {
    minions: shuffledMinions,
    christmas: shuffledChristmas,
    cute_animals: shuffledCuteAnimals,
};

const christmasTime = new Date().getMonth() === 11;

// TODO set animals theme photos

const initialState: MemoryGameState = {
    photos: imageData,
    gamePhotos: themeShuffledImages[christmasTime ? "christmas" : "minions"],
    currentCount: 0,
    currentTheme: christmasTime ? GameTheme.CHRISTMAS : GameTheme.MINIONS,
    maxCount: 28,
    gameFinished: false,
    themes: Object.entries(themeShuffledImages).map(([key, value]) => ({
        images: value,
        theme: key,
    })) as GameThemeType[],
};

export const memoryGameSlice = createSlice({
    name: "memoryGame",
    initialState,
    reducers: {
        toggleFlip: (state, { payload }: PayloadAction<string>) => {
            state.gamePhotos.map(item => (item.isFlipped = item.id === payload));
            state.currentCount++;
        },
        setMatch: ({ gamePhotos }, { payload }: PayloadAction<string>) => {
            const selected = gamePhotos.find(item => item.id === payload);
            if (selected) selected.match = true;
        },
        resetGame: (state, { payload }: PayloadAction<GamePhotoData[]>) => {
            const newGame = payload.map(item => ({
                ...item,
                isFlipped: false,
                match: false,
            }));

            state.gamePhotos = newGame;
            state.currentCount = initialState.currentCount;
            state.gameFinished = false;
        },
        setTheme: (state, { payload }: PayloadAction<GameTheme>) => {
            state.currentTheme = payload;
        },
        setGameFinished: (state, { payload }: PayloadAction<boolean>) => {
            state.gameFinished = payload;
        },
    },
});

export const { toggleFlip, setMatch, resetGame, setTheme, setGameFinished } =
    memoryGameSlice.actions;

export default memoryGameSlice.reducer;
