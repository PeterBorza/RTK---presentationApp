import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState, LiftState, Direction } from "./state";

export const liftSlice = createSlice({
	name: "lift",
	initialState,
	reducers: {
		toggleShaftButtons: state => {
			state.isDisabled = !state.isDisabled;
		},
		setDirectionOfA: (state, { payload }: PayloadAction<Direction>) => {
			state.lifts[0].direction = payload;
		},
		setDirectionOfB: (state, { payload }: PayloadAction<Direction>) => {
			state.lifts[1].direction = payload;
		},
		toggleDisableA: state => {
			state.lifts[0].buttonsDisabled = !state.lifts[0].buttonsDisabled;
		},
		toggleDisableB: state => {
			state.lifts[1].buttonsDisabled = !state.lifts[1].buttonsDisabled;
		},
		activateA: (state, { payload }: PayloadAction<boolean>) => {
			state.lifts[0].isActive = payload;
		},
		activateB: (state, { payload }: PayloadAction<boolean>) => {
			state.lifts[1].isActive = payload;
		},
		moveLiftA: (state, { payload }: PayloadAction<number>) => {
			state.lifts[0].position = payload;
			state.positionFloor = payload;
		},
		moveLiftB: (state, { payload }: PayloadAction<number>) => {
			state.lifts[1].position = payload;
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
		setSpeed: (state, { payload }: PayloadAction<number>) => {
			state.speed = payload;
		},
	},
});

export const {
	toggleShaftButtons,
	setDirectionOfA,
	setDirectionOfB,
	toggleDisableA,
	toggleDisableB,
	activateA,
	activateB,
	moveLiftA,
	moveLiftB,
	movePosition,
	setLevelNumber,
	setSpeed,
} = liftSlice.actions;

export default liftSlice.reducer;
