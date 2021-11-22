import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./state";

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
			{ numberOfLevels },
			{ payload }: PayloadAction<number>
		) => {
			numberOfLevels = payload;
		},
		setLevelArray: (state, { payload }: PayloadAction<number>) => {
			const newArr = new Array(payload).fill(0).map((_, i: number) => i);
			state.levelArray = [...newArr];
		},
	},
});

export const {
	toggleButtons,
	moveLiftA,
	moveLiftB,
	movePosition,
	setLevelNumber,
	setLevelArray,
} = liftSlice.actions;

export default liftSlice.reducer;
