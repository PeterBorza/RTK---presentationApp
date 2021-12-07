import { RootState } from "../../app/store";

export const liftState = (state: RootState) => state.lift;

export const positionState = (state: RootState) => state.lift.position;

export const levelsNumberState = (state: RootState) =>
	state.lift.numberOfLevels;
