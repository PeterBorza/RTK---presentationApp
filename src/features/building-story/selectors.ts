import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export const liftState = (state: RootState) => state.lift;

export const levelsState = (state: RootState) => state.lift.numberOfLevels;

export const speedState = (state: RootState) => state.lift.speed;

export const liftsState = (state: RootState) => state.lift.lifts;

export const activeSelector = createSelector(liftsState, lifts =>
    lifts.map(lift => lift.isActive)
);

export const topLevelSelector = createSelector(
    levelsState,
    levels => levels - 1
);
