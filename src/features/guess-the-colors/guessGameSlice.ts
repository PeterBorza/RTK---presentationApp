import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
    IguessGame,
    IguessGameItem,
    initialState,
    IPlayerCombo,
    IResultsType,
    IAttempt,
    initialPlayerCombo,
} from "./state";

const currentAttemptFinder = (state: IAttempt[], payload: number) =>
    state.findIndex(attempt => attempt.id === payload);

export const guessGameSlice = createSlice({
    name: "guessGame",
    initialState,
    reducers: {
        setNewGame: (state: IguessGame, { payload }: PayloadAction<IguessGameItem[]>) => {
            state.gameCombo = payload;
        },
        setComboItem: (state: IguessGame, { payload }: PayloadAction<IPlayerCombo>) => {
            const currentAttempt = currentAttemptFinder(state.attempts, payload.id);
            if (currentAttempt !== -1)
                state.attempts[currentAttempt].playerCombo.splice(payload.order, 1, payload.item);
        },
        setResults: (state: IguessGame, { payload }: PayloadAction<IResultsType>) => {
            const currentAttempt = currentAttemptFinder(state.attempts, payload.id);
            if (currentAttempt !== -1) state.attempts[currentAttempt].results = payload.results;
        },
        resetResults: (state: IguessGame) => {
            state.attempts.forEach(attempt => (attempt.results = []));
        },
        selectAttempt: (state: IguessGame, { payload }: PayloadAction<number>) => {
            const currentAttempt = currentAttemptFinder(state.attempts, payload);
            if (currentAttempt !== -1) state.attempts[currentAttempt].selected = true;
        },
        resetSelected: (state: IguessGame, { payload }: PayloadAction<number>) => {
            const currentAttempt = currentAttemptFinder(state.attempts, payload);
            if (currentAttempt !== -1) state.attempts[currentAttempt].selected = false;
        },
        resetComboes: (state: IguessGame) => {
            state.attempts.forEach(attempt => (attempt.playerCombo = initialPlayerCombo));
        },
        setFinished: (state: IguessGame, { payload }: PayloadAction<boolean>) => {
            state.finished = payload;
        },
    },
});

export const {
    setNewGame,
    setComboItem,
    setResults,
    resetResults,
    selectAttempt,
    resetSelected,
    resetComboes,
    setFinished,
} = guessGameSlice.actions;
export default guessGameSlice.reducer;
