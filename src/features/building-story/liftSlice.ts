import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState, LiftState, Lift } from "./state";

export const liftSlice = createSlice({
    name: "lift",
    initialState,
    reducers: {
        toggleDisabled: (
            state: LiftState,
            { payload }: PayloadAction<Pick<Lift, "name" | "disabled">>
        ) => {
            const targetLift = state.lifts.find(
                lift => lift.name === payload.name
            );
            if (targetLift) targetLift.disabled = !targetLift.disabled;
        },
        setDirection: (
            state: LiftState,
            { payload }: PayloadAction<Pick<Lift, "name" | "direction">>
        ) => {
            const targetLift = state.lifts.find(
                lift => lift.name === payload.name
            );
            if (targetLift) targetLift.direction = payload.direction;
        },
        activate: (
            state: LiftState,
            { payload }: PayloadAction<Pick<Lift, "name" | "isActive">>
        ) => {
            const targetLift = state.lifts.find(
                lift => lift.name === payload.name
            );
            if (targetLift) targetLift.isActive = payload.isActive;
        },

        moveLift: (
            state: LiftState,
            { payload }: PayloadAction<Pick<Lift, "name" | "position">>
        ) => {
            const targetLift = state.lifts.find(
                lift => lift.name === payload.name
            );
            if (targetLift) targetLift.position = payload.position;
        },
        setLevelNumber: (
            state: LiftState,
            { payload }: PayloadAction<number>
        ) => {
            state.numberOfLevels = payload;
        },
        setSpeed: (state: LiftState, { payload }: PayloadAction<number>) => {
            state.speed = payload;
        },
    },
});

export const {
    toggleDisabled,
    setDirection,
    activate,
    moveLift,
    setLevelNumber,
    setSpeed,
} = liftSlice.actions;

export default liftSlice.reducer;
