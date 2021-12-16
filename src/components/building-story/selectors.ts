// import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export const liftState = (state: RootState) => state.lift;

export const levelsNumberState = (state: RootState) =>
	state.lift.numberOfLevels;

export const speedSelector = (state: RootState) => state.lift.speed;
