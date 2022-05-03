import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IguessGame, IguessGameItem, initialState, IPlayerCombo, IResultsType } from "./state";

export const guessGameSlice = createSlice({
    name: "guessGame",
    initialState,
    reducers: {
        getNewGameCombo: (state: IguessGame, { payload }: PayloadAction<IguessGameItem[]>) => {
            state.gameCombo = payload;
        },
        setComboItem: (state: IguessGame, { payload }: PayloadAction<IPlayerCombo>) => {
            const currentAttempt = state.attempts.findIndex(attempt => attempt.id === payload.id);
            if (currentAttempt !== -1)
                state.attempts[currentAttempt].playerCombo.push(payload.item);
        },
        setResults: (state: IguessGame, { payload }: PayloadAction<IResultsType>) => {
            const result = state.attempts.find(attempt => attempt.id === payload.id);
            if (result) result.results = payload.results;
        },
        resetResults: (state: IguessGame, { payload }: PayloadAction<number>) => {
            const selected = state.attempts.findIndex(attempt => attempt.id === payload);
            if (selected !== -1) state.attempts[selected].results = [0, 0, 0, 0];
        },
        selectAttempt: (state: IguessGame, { payload }: PayloadAction<number>) => {
            const selected = state.attempts.findIndex(attempt => attempt.id === payload);
            state.attempts.forEach(attempt => (attempt.selected = false));
            if (selected !== -1) state.attempts[selected].selected = true;
        },
    },
});

export const { getNewGameCombo, setComboItem, setResults, resetResults, selectAttempt } =
    guessGameSlice.actions;
export default guessGameSlice.reducer;
