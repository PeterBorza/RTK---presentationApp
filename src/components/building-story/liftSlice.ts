import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { typeofLiftState } from "../../app/store";

interface PositionState {
	positionA: number;
	positionB: number;
	positionFloor: number;
}

interface LiftState {
	numberOfLevels: number;
	levelArray: number[];
	speed: number;
	liftHeight: number;
	liftWidth: number;
	position: PositionState;
	isDisabled: boolean;
}

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
		moveLiftA: (state, { payload }: PayloadAction<number>) => {
			state.position.positionA = payload;
			state.position.positionFloor = payload;
		},
		moveLiftB: (state, { payload }: PayloadAction<number>) => {
			state.position.positionB = payload;
			state.position.positionFloor = payload;
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
