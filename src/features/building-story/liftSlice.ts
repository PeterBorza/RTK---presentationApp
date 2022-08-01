import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState, LiftState, Lift, LiftName, LevelCount, Direction } from "./state";

export const getDirection = (level: LevelCount, position: number): Direction => {
    if (level === position) return "static";
    return level < position ? "down" : "up";
};

export const liftSlice = createSlice({
    name: "lift",
    initialState,
    reducers: {
        stopLift: ({ lifts }: LiftState, { payload }: PayloadAction<LiftName>) => {
            const targetLift = lifts.find(l => l.name === payload);
            if (targetLift) {
                targetLift.isMoving = false;
                targetLift.direction = "static";
            }
        },
        moveLift: (
            { lifts }: LiftState,
            { payload }: PayloadAction<{ level: number; lift: Lift }>,
        ) => {
            const { name, position } = payload.lift;
            const lift = lifts.find(l => l.name === name);
            const level = payload.level;

            if (lift) {
                if (level === position) return;
                lift.position = level;
                lift.direction = getDirection(level, position);
                lift.isMoving = true;
            }
        },
        setLevelNumber: (state, { payload }: PayloadAction<number>) => {
            state.numberOfLevels = payload;
            state.lifts[1].position = payload - 1;
        },
        setSpeed: ({ speed }: LiftState, { payload }: PayloadAction<number>) => {
            speed = payload;
        },
    },
});

export const { stopLift, setLevelNumber, setSpeed, moveLift } = liftSlice.actions;

export default liftSlice.reducer;
