export interface PositionState {
	positionA: number;
	positionB: number;
	positionFloor: number;
}

export interface LiftState {
	numberOfLevels: number;
	speed: number;
	liftHeight: number;
	liftWidth: number;
	position: PositionState;
	isDisabled: boolean;
	isSideBarOpen: boolean;
}
