import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState, Lift, LiftName, LevelCount, DirectionType } from "./state";

export const getDirection = (level: LevelCount, position: number): DirectionType => {
    if (level === position) return "static";
    return level < position ? "down" : "up";
};

export const liftSlice = createSlice({
    name: "lift",
    initialState,
    reducers: {
        stopLift: (state, { payload }: PayloadAction<LiftName>) => {
            const targetLift = state.lifts.find(l => l.name === payload);
            if (targetLift) {
                targetLift.isMoving = false;
                targetLift.direction = "static";
                state.speed = initialState.speed;
            }
        },
        moveLift: (state, { payload }: PayloadAction<{ level: number; lift: Lift }>) => {
            const {
                level,
                lift: { name, position },
            } = payload;

            const targetLift = state.lifts.find(l => l.name === name);

            if (state.lifts.some(lift => lift.isMoving === true)) return;

            if (targetLift) {
                if (level === position) return;
                targetLift.position = level;
                targetLift.direction = getDirection(level, position);
                targetLift.isMoving = true;
                state.speed = Math.abs(level - position) * state.speed;
            }
        },
        setLevelNumber: (state, { payload }: PayloadAction<number>) => {
            state.numberOfLevels = payload;
            state.lifts[1].position = payload - 1;
        },
        setSpeed: (state, { payload }: PayloadAction<number>) => {
            state.speed = payload;
        },
    },
});

export const { stopLift, setLevelNumber, setSpeed, moveLift } = liftSlice.actions;

export default liftSlice.reducer;
