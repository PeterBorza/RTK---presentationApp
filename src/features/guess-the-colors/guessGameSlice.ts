import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IguessGame, IguessGameItem, initialState } from "./state";

export const guessGameSlice = createSlice({
    name: "guessGame",
    initialState,
    reducers: {
        getNewGameCombo: (state: IguessGame, { payload }: PayloadAction<IguessGameItem[]>) => {
            state.gameCombo = payload;
        },
        setPlayerComboItem: (
            state: IguessGame,
            { payload }: PayloadAction<{ id: number; item: IguessGameItem }>,
        ) => {
            const current = state.attempts.find(attempt => attempt.id === payload.id);
            current && current.playerCombo.push(payload.item);
        },
    },
});

export const { getNewGameCombo, setPlayerComboItem } = guessGameSlice.actions;
export default guessGameSlice.reducer;
