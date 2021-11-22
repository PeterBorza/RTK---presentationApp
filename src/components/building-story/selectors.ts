import { typeofLiftState } from "../../app/store";

export const liftState = (state: typeofLiftState) => state.lift;
export const positionState = (state: typeofLiftState) => state.lift.position;
export const levelArrayState = (state: typeofLiftState) =>
	state.lift.levelArray;
