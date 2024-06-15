import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { initialState } from "./state";

import { reducers } from "./reducers";

export const musicGameSlice = createSlice({
    name: "musicGame",
    initialState,
    reducers,
});

const actions = musicGameSlice.actions;

export { actions };
export default musicGameSlice.reducer;
