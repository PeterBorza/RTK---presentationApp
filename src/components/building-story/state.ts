import { PositionState, LiftState } from "./types";

export const positionInitialState: PositionState = {
	positionA: 0,
	positionB: 6,
	positionFloor: 0,
};

export const initialState: LiftState = {
	numberOfLevels: 7,
	speed: 1000,
	liftHeight: 10,
	liftWidth: 20,
	position: positionInitialState,
	isDisabled: false,
	isSideBarOpen: false,
};
