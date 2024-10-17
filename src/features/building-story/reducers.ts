import { PayloadAction } from "@reduxjs/toolkit";
import { Lift, LiftName, LiftState, initialState } from "./state";
import { getDirection } from "./helpers";

const reducers = {
  stopLift: (state: LiftState, { payload }: PayloadAction<LiftName>) => {
    const targetLift = state.lifts.find(l => l.name === payload);
    if (targetLift) {
      targetLift.isMoving = false;
      targetLift.direction = "static";
      state.speed = initialState.speed;
    }
  },
  moveLift: (state: LiftState, { payload }: PayloadAction<{ level: number; lift: Lift }>) => {
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
      state.speed = Math.abs(level - position) * initialState.speed;
    }
  },
  setLevelNumber: (state: LiftState, { payload }: PayloadAction<number>) => {
    state.numberOfLevels = payload;
  },
  resetLevelNumber: (state: LiftState) => {
    state.lifts = initialState.lifts;
    state.numberOfLevels = initialState.numberOfLevels;
  },
  setSpeed: (state: LiftState, { payload }: PayloadAction<number>) => {
    state.speed = payload;
  },
};

export default reducers;
