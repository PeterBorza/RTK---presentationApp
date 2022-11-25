import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { useDispatch, useSelector } from "react-redux";
import { createArray } from "utils";

export const liftState = ({ lift }: RootState) => lift;

export const levelsState = ({ lift }: RootState) => lift.numberOfLevels;

export const speedState = ({ lift }: RootState) => lift.speed;

export const liftsState = ({ lift }: RootState) => lift.lifts;

export const distanceSelector = createSelector(liftsState, lifts =>
    lifts.map(lift => lift.distanceFromCall),
);

export const levelsSelector = createSelector(levelsState, levels =>
    createArray(levels).map((_, idx) => idx),
);

export const useLiftRedux = () => {
    const lift = useSelector(liftState);
    const numberOfLevels = useSelector(levelsState);
    const speed = useSelector(speedState);
    const lifts = useSelector(liftsState);
    const distance = useSelector(distanceSelector);
    const levels = useSelector(levelsSelector);
    const dispatch = useDispatch();

    return {
        lift,
        numberOfLevels,
        speed,
        lifts,
        distance,
        levels,
        dispatch,
    };
};
