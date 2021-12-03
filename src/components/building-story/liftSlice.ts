import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./state";
import { LiftState } from "./types";

export const liftSlice = createSlice({
	name: "lift",
	initialState,
	reducers: {
		toggleButtons: state => {
			state.isDisabled = !state.isDisabled;
		},
		moveLiftA: ({ position }, { payload }: PayloadAction<number>) => {
			position.positionA = payload;
			position.positionFloor = payload;
		},
		moveLiftB: ({ position }, { payload }: PayloadAction<number>) => {
			position.positionB = payload;
			position.positionFloor = payload;
		},
		movePosition: ({ position }, { payload }: PayloadAction<number>) => {
			position.positionFloor = payload;
		},
		setLevelNumber: (
			state: LiftState,
			{ payload }: PayloadAction<number>
		) => {
			state.numberOfLevels = payload;
		},
		toggleLiftSidePanel: (
			state: LiftState,
			{ payload }: PayloadAction<boolean>
		) => {
			state.isSideBarOpen = payload;
		},
	},
});

export const {
	toggleButtons,
	moveLiftA,
	moveLiftB,
	movePosition,
	setLevelNumber,
	toggleLiftSidePanel,
} = liftSlice.actions;

export default liftSlice.reducer;
