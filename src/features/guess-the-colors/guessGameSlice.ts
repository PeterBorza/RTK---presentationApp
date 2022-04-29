import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
    IAttemptEnable,
    IguessGame,
    IguessGameItem,
    initialState,
    IPlayerCombo,
    IResultsType,
} from "./state";

export const guessGameSlice = createSlice({
    name: "guessGame",
    initialState,
    reducers: {
        getNewGameCombo: (state: IguessGame, { payload }: PayloadAction<IguessGameItem[]>) => {
            state.gameCombo = payload;
        },
        setPlayerComboItem: (state: IguessGame, { payload }: PayloadAction<IPlayerCombo>) => {
            const current = state.attempts.find(attempt => attempt.id === payload.id);
            current && current.playerCombo.push(payload.item);
        },
        toggleAttemptEnable: (state: IguessGame, { payload }: PayloadAction<IAttemptEnable>) => {
            const currentAttempt = state.attempts.find(attempt => attempt.id === payload.id);
            if (currentAttempt) currentAttempt.isAttemptEnabled = payload.isEnabled;
        },
        setResults: (state: IguessGame, { payload }: PayloadAction<IResultsType>) => {
            const result = state.attempts.find(attempt => attempt.id === payload.id);
            if (result) result.results = payload.results;
        },
        resetResults: (state: IguessGame, { payload }: PayloadAction<IResultsType>) => {
            const result = state.attempts.find(attempt => attempt.id === payload.id);
            if (result) result.results = [0, 0, 0, 0];
        },
    },
});

export const {
    getNewGameCombo,
    setPlayerComboItem,
    toggleAttemptEnable,
    setResults,
    resetResults,
} = guessGameSlice.actions;
export default guessGameSlice.reducer;
