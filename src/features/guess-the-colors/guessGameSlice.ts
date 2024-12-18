import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { shuffle } from "utils";

import {
  IguessGame,
  IguessGameItem,
  initialState,
  IPlayerCombo,
  IResultsType,
  IAttempt,
  ErrorMessageType,
  initialPlayerCombo,
} from "./state";

const currentAttemptFinder = (state: IAttempt[], payload: number) =>
  state.findIndex(attempt => attempt.id === payload);

export const guessGameSlice = createSlice({
  name: "guessGame",
  initialState,
  reducers: {
    setComboItem: (state: IguessGame, { payload }: PayloadAction<IPlayerCombo>) => {
      const { id: attemptId, order, item: attempt } = payload;
      const currentAttempt = currentAttemptFinder(state.attempts, attemptId);
      if (currentAttempt !== -1) {
        const currentCombo = state.attempts[currentAttempt].playerCombo;
        currentCombo[order] = attempt;
      }
    },
    setResults: (state: IguessGame, { payload }: PayloadAction<IResultsType>) => {
      const { id: attemptId, results } = payload;
      const currentAttempt = currentAttemptFinder(state.attempts, attemptId);
      if (currentAttempt !== -1) state.attempts[currentAttempt].results = results;
    },
    selectAttempt: (state: IguessGame, { payload }: PayloadAction<number>) => {
      const currentAttempt = currentAttemptFinder(state.attempts, payload);
      if (currentAttempt !== -1) state.attempts[currentAttempt].selected = true;
    },
    resetSelected: (state: IguessGame, { payload }: PayloadAction<number>) => {
      const currentAttempt = currentAttemptFinder(state.attempts, payload);
      if (currentAttempt !== -1) state.attempts[currentAttempt].selected = false;
    },
    resetGame: (state: IguessGame, { payload }: PayloadAction<IguessGameItem[]>) =>
      (state = { ...initialState, gameCombo: shuffle(payload).slice(0, 4) }),

    setFinished: (state: IguessGame, { payload }: PayloadAction<boolean>) => {
      state.finished = payload;
    },
    setError: (state: IguessGame, { payload }: PayloadAction<ErrorMessageType>) => {
      state.errorMessage = payload;
    },
    filterBase: ({ attempts }: IguessGame, { payload }: PayloadAction<IguessGameItem>) => {
      const current = attempts.find(attempt => attempt.id === payload.id);
      if (current) current.base = current.base.filter(item => item.color !== payload.color);
    },
    resetPlayerCombo: ({ attempts }: IguessGame, { payload }: PayloadAction<IguessGameItem>) => {
      const current = attempts.find(attempt => attempt.id === payload.id);
      if (current) current.playerCombo = initialPlayerCombo;
    },
  },
});

export const {
  setComboItem,
  setResults,
  selectAttempt,
  resetSelected,
  resetGame,
  setFinished,
  setError,
  filterBase,
  resetPlayerCombo,
} = guessGameSlice.actions;
export default guessGameSlice.reducer;
