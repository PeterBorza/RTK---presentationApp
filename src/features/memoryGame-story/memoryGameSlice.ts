import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GameTheme, MemoryGameState } from "./types";
import { imageData } from "utils";
import { GamePhotoData } from ".";
import {
    shuffledChristmas,
    shuffledMinions,
    minionGameImages,
    christmasGameImages,
    shuffledCuteAnimals,
    cuteAnimalImages,
} from "./game-images";

export const themeShuffledImages: { [key: string]: GamePhotoData[] } = {
    [GameTheme.MINIONS]: shuffledMinions,
    [GameTheme.CHRISTMAS]: shuffledChristmas,
    [GameTheme.CUTE_ANIMALS]: shuffledCuteAnimals,
};

const initialState: MemoryGameState = {
    photos: imageData,
    gamePhotos: themeShuffledImages[GameTheme.MINIONS],
    currentCount: 0,
    currentTheme: GameTheme.MINIONS,
    maxCount: 28,
    gameFinished: false,
    themes: [
        {
            images: minionGameImages,
            theme: GameTheme.MINIONS,
        },
        {
            images: christmasGameImages,
            theme: GameTheme.CHRISTMAS,
        },
        {
            images: cuteAnimalImages,
            theme: GameTheme.CUTE_ANIMALS,
        },
    ],
};

export const memoryGameSlice = createSlice({
    name: "memoryGame",
    initialState,
    reducers: {
        toggleFlip: ({ gamePhotos }: MemoryGameState, { payload }: PayloadAction<string>) => {
            gamePhotos.map(item => (item.isFlipped = item.id === payload ? true : false));
        },
        setMatch: ({ gamePhotos }: MemoryGameState, { payload }: PayloadAction<string>) => {
            const selected = gamePhotos.find(item => item.id === payload);
            if (selected) selected.match = true;
        },
        incrementCount: (state: MemoryGameState) => {
            state.currentCount++;
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
            state.currentCount = initialState.currentCount;
        },
        toggleTheme: (state: MemoryGameState, { payload }: PayloadAction<GameTheme>) => {
            state.currentTheme = payload;
        },
        setGameFinished: (state: MemoryGameState, { payload }: PayloadAction<boolean>) => {
            state.gameFinished = payload;
        },
    },
});

export const { toggleFlip, setMatch, incrementCount, resetGame, toggleTheme, setGameFinished } =
    memoryGameSlice.actions;

export default memoryGameSlice.reducer;
