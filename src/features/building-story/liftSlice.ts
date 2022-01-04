import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
    initialState,
    LiftState,
    Lift,
    LiftDirection,
    LiftActive,
    LiftPosition,
    LiftMoving,
    LiftDisabled,
    LiftName,
} from "./state";

const targetLift = (state: LiftState, payload: LiftName) =>
    state.lifts.find(lift => lift.name === payload);

export const liftSlice = createSlice({
    name: "lift",
    initialState,
    reducers: {
        setDisabled: (
            { lifts }: LiftState,
            { payload }: PayloadAction<Pick<Lift, LiftDisabled>>
        ) => {
            const targetLift = lifts.find(l => l.name === payload.name);
            if (targetLift) targetLift.disabled = payload.disabled;
        },
        setDirection: (
            { lifts }: LiftState,
            { payload }: PayloadAction<Pick<Lift, LiftDirection>>
        ) => {
            const targetLift = lifts.find(l => l.name === payload.name);
            if (targetLift) targetLift.direction = payload.direction;
        },
        setActive: (
            { lifts }: LiftState,
            { payload }: PayloadAction<Pick<Lift, LiftActive>>
        ) => {
            const targetLift = lifts.find(l => l.name === payload.name);
            if (targetLift) targetLift.isActive = payload.isActive;
        },
        moveLift: (
            { lifts }: LiftState,
            { payload }: PayloadAction<Pick<Lift, LiftMoving>>
        ) => {
            const targetLift = lifts.find(l => l.name === payload.name);
            if (targetLift) targetLift.isMoving = payload.isMoving;
        },
        changePosition: (
            { lifts }: LiftState,
            { payload }: PayloadAction<Pick<Lift, LiftPosition>>
        ) => {
            const targetLift = lifts.find(l => l.name === payload.name);
            if (targetLift) targetLift.position = payload.position;
        },
        setLevelNumber: (
            { numberOfLevels }: LiftState,
            { payload }: PayloadAction<number>
        ) => {
            numberOfLevels = payload;
        },
        setSpeed: (
            { speed }: LiftState,
            { payload }: PayloadAction<number>
        ) => {
            speed = payload;
        },
    },
});

export const {
    setDisabled,
    setDirection,
    setActive,
    moveLift,
    changePosition,
    setLevelNumber,
    setSpeed,
} = liftSlice.actions;

export default liftSlice.reducer;
