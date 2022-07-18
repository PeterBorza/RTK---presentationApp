import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState, LiftState, Lift, LiftName } from "./state";

export const liftSlice = createSlice({
    name: "lift",
    initialState,
    reducers: {
        stopLift: ({ lifts }: LiftState, { payload }: PayloadAction<LiftName>) => {
            const targetLift = lifts.find(l => l.name === payload);
            if (targetLift) {
                targetLift.isMoving = false;
                targetLift.doorsAreOpen = false;
                targetLift.direction = "static";
            }
        },
        moveLift: ({ lifts }: LiftState, { payload }: PayloadAction<Lift>) => {
            const { name, position, doorsAreOpen, isMoving, direction } = payload;
            const lift = lifts.find(l => l.name === name);
            if (lift) {
                lift.position = position;
                lift.doorsAreOpen = doorsAreOpen;
                lift.direction = direction;
                lift.isMoving = isMoving;
            }
        },
        setLevelNumber: ({ numberOfLevels }: LiftState, { payload }: PayloadAction<number>) => {
            numberOfLevels = payload;
        },
        setSpeed: ({ speed }: LiftState, { payload }: PayloadAction<number>) => {
            speed = payload;
        },
    },
});

export const { stopLift, setLevelNumber, setSpeed, moveLift } = liftSlice.actions;

export default liftSlice.reducer;
