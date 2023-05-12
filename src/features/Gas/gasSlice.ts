import { createSlice } from "@reduxjs/toolkit";
import reducers from "./reducers";

import { initialState } from "../Utilities/state";

export const gasSlice = createSlice({
    name: "gas",
    initialState,
    reducers,
});

export const {
    selectCard,
    resetSelected,
    editCard,
    replaceUnit,
    resetEdit,
    togglePayed,
    addUnit,
    getUnits,
    deleteUnit,
    setUtilitiesPending,
    setUtilitiesError,
} = gasSlice.actions;

export default gasSlice.reducer;
