export type Direction = "up" | "down";

export interface Lift {
	id: string;
	name: string;
	isActive: boolean;
	position: number;
	buttonsDisabled: boolean;
}
export interface LiftState {
	numberOfLevels: number;
	speed: number;
	isDisabled: boolean;
	positionFloor: number;
	direction: Direction | null;
}

export const initialState: LiftState = {
	numberOfLevels: 7,
	speed: 1000,
	isDisabled: false,
	positionFloor: 0,
	direction: null,
};
