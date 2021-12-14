import { v4 as uuid } from "uuid";

export type Direction = "up" | "down" | "stop";

export interface Lift {
	id: string;
	name: string;
	isActive: boolean;
	position: number;
	buttonsDisabled: boolean;
	direction: string;
}
export interface LiftState {
	lifts: Lift[];
	numberOfLevels: number;
	speed: number;
	isDisabled: boolean;
	positionFloor: number;
}

export const liftsInitialState = [
	{
		id: uuid(),
		name: "A",
		isActive: false,
		position: 0,
		buttonsDisabled: false,
		direction: "stop",
	},
	{
		id: uuid(),
		name: "B",
		isActive: false,
		position: 6,
		buttonsDisabled: false,
		direction: "stop",
	},
];

export const initialState: LiftState = {
	lifts: liftsInitialState,
	numberOfLevels: 7,
	speed: 1000,
	isDisabled: false,
	positionFloor: 0,
};
