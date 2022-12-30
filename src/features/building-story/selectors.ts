import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { useDispatch, useSelector } from "react-redux";
import { createArray } from "utils";

export const liftState = ({ lift }: RootState) => lift;

export const levelsState = ({ lift }: RootState) => lift.numberOfLevels;

export const speedState = ({ lift }: RootState) => lift.speed;

export const liftsState = ({ lift }: RootState) => lift.lifts;

export const levelsSelector = createSelector(levelsState, levels =>
    createArray(levels).map((_, idx) => idx),
);

export const useLiftRedux = () => ({
    lift: useSelector(liftState),
    numberOfLevels: useSelector(levelsState),
    speed: useSelector(speedState),
    lifts: useSelector(liftsState),
    levels: useSelector(levelsSelector),
    dispatch: useDispatch(),
});
