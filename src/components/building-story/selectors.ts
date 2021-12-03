import { typeofLiftState } from "../../app/store";

export const liftState = (state: typeofLiftState) => state.lift;

export const positionState = (state: typeofLiftState) => state.lift.position;

export const levelsNumberState = (state: typeofLiftState) =>
	state.lift.numberOfLevels;

export const isSideBarOpen = (state: typeofLiftState) =>
	state.lift.isSideBarOpen;
