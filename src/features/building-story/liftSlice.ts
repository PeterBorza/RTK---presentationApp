import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./state";
import reducers from "./reducers";

export const liftSlice = createSlice({
    name: "lift",
    initialState,
    reducers,
});

const actions = liftSlice.actions;

export { actions };

export default liftSlice.reducer;
