import { MusicGameType } from "./types";

export const reducers = {
  setWeekNumber: (state: MusicGameType) => {
    state.weekNumber++;
  },
};
