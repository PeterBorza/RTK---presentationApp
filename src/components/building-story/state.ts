import { v4 as uuid } from "uuid";

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
	// liftA: Lift;
	// liftB: Lift;
}

export const initialState: LiftState = {
	numberOfLevels: 7,
	speed: 1000,
	isDisabled: false,
	positionFloor: 0,
	direction: null,
	// liftA: {
	// 	id: uuid(),
	// 	name: "A",
	// 	isActive: false,
	// 	position: 0,
	// 	buttonsDisabled: false,
	// },
	// liftB: {
	// 	id: uuid(),
	// 	name: "B",
	// 	isActive: false,
	// 	position: 6,
	// 	buttonsDisabled: false,
	// },
};
