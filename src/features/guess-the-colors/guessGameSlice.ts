import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
    IguessGame,
    IguessGameItem,
    initialState,
    IPlayerCombo,
    IResultsType,
    IAttempt,
    initialPlayerCombo,
    ErrorMessageType,
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
            const { id: attemptId, order, item: attempt } = payload;
            const currentAttempt = currentAttemptFinder(state.attempts, attemptId);
            if (currentAttempt !== -1)
                state.attempts[currentAttempt].playerCombo.splice(order, 1, attempt);
        },
        setResults: (state: IguessGame, { payload }: PayloadAction<IResultsType>) => {
            const { id: attemptId, results } = payload;
            const currentAttempt = currentAttemptFinder(state.attempts, attemptId);
            if (currentAttempt !== -1) state.attempts[currentAttempt].results = results;
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
        setError: (state: IguessGame, { payload }: PayloadAction<ErrorMessageType>) => {
            state.errorMessage = payload;
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
    setError,
} = guessGameSlice.actions;
export default guessGameSlice.reducer;
