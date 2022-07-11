import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState, LiftState, Lift, LiftActive, LiftMoving } from "./state";

export const liftSlice = createSlice({
    name: "lift",
    initialState,
    reducers: {
        setActive: ({ lifts }: LiftState, { payload }: PayloadAction<Pick<Lift, LiftActive>>) => {
            const targetLift = lifts.find(l => l.name === payload.name);
            if (targetLift) targetLift.isActive = payload.isActive;
        },
        moveLift: ({ lifts }: LiftState, { payload }: PayloadAction<Pick<Lift, LiftMoving>>) => {
            const targetLift = lifts.find(l => l.name === payload.name);
            if (targetLift) targetLift.isMoving = payload.isMoving;
        },
        setLevelNumber: ({ numberOfLevels }: LiftState, { payload }: PayloadAction<number>) => {
            numberOfLevels = payload;
        },
        setSpeed: ({ speed }: LiftState, { payload }: PayloadAction<number>) => {
            speed = payload;
        },
        setMovingLift: ({ lifts }: LiftState, { payload }: PayloadAction<Lift>) => {
            const { name, position, isActive, isMoving, direction } = payload;
            const lift = lifts.find(l => l.name === name);
            if (lift) {
                lift.position = position;
                lift.isActive = isActive;
                lift.direction = direction;
                lift.isMoving = isMoving;
            }
        },
    },
});

export const { setActive, moveLift, setLevelNumber, setSpeed, setMovingLift } = liftSlice.actions;

export default liftSlice.reducer;
