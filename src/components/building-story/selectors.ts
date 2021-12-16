import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export const liftState = (state: RootState) => state.lift;

export const levelsNumberState = (state: RootState) =>
	state.lift.numberOfLevels;

// export const liftsState = (state: RootState) => state.lift.lifts;

// export const lift_A_Selector = createSelector(liftsState, items =>
// 	items.filter(item => item.name === "A")
// );

// export const lift_B_Selector = createSelector(liftsState, items =>
// 	items.filter(item => item.name === "B")
// );

// export const activeSelector = createSelector(liftsState, items =>
// 	items.map(item => item.isActive)
// );

export const speedSelector = (state: RootState) => state.lift.speed;
