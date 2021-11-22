import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { typeofLiftState } from "../../app/store";
import { PositionState, LiftState } from "./types";

const positionInitialState: PositionState = {
	positionA: 0,
	positionB: 6,
	positionFloor: 0,
};

const initialState: LiftState = {
	numberOfLevels: 7,
	levelArray: [],
	speed: 1000,
	liftHeight: 10,
	liftWidth: 20,
	position: positionInitialState,
	isDisabled: false,
};

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
		movePosition: (state, { payload }: PayloadAction<number>) => {
			state.position.positionFloor = payload;
		},
		setLevelNumber: (state, { payload }: PayloadAction<number>) => {
			state.numberOfLevels = payload;
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

export const liftState = (state: typeofLiftState) => state.lift;
export const positionState = (state: typeofLiftState) => state.lift.position;

export default liftSlice.reducer;
