export interface PositionState {
	positionA: number;
	positionB: number;
}

export interface LiftState {
	numberOfLevels: number;
	speed: number;
	liftHeight: number;
	liftWidth: number;
	position: PositionState;
	isDisabled: boolean;
	positionFloor: number;
}

export const positionInitialState: PositionState = {
	positionA: 0,
	positionB: 6,
};

export const initialState: LiftState = {
	numberOfLevels: 7,
	speed: 1000,
	liftHeight: 10,
	liftWidth: 20,
	position: positionInitialState,
	isDisabled: false,
	positionFloor: 0,
};
