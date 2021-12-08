import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState, LiftState } from "./state";

export const liftSlice = createSlice({
	name: "lift",
	initialState,
	reducers: {
		toggleButtons: state => {
			state.isDisabled = !state.isDisabled;
		},
		moveLiftA: (state, { payload }: PayloadAction<number>) => {
			state.position.positionA = payload;
			state.positionFloor = payload;
		},
		moveLiftB: (state, { payload }: PayloadAction<number>) => {
			state.position.positionB = payload;
			state.positionFloor = payload;
		},
		movePosition: (state, { payload }: PayloadAction<number>) => {
			state.positionFloor = payload;
		},
		setLevelNumber: (
			state: LiftState,
			{ payload }: PayloadAction<number>
		) => {
			state.numberOfLevels = payload;
		},
	},
});

export const {
	toggleButtons,
	moveLiftA,
	moveLiftB,
	movePosition,
	setLevelNumber,
} = liftSlice.actions;

export default liftSlice.reducer;
