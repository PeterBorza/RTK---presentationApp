import { RootState } from "app/store";
import { createSelector } from "@reduxjs/toolkit";
import { shuffle } from "utils";

export const guessGameState = ({ guessGame }: RootState) => guessGame;

export const baseColorsState = ({ guessGame }: RootState) => guessGame.baseColors;

export const gameAttemptsState = ({ guessGame }: RootState) => guessGame.attempts;

export const gameComboState = ({ guessGame }: RootState) => guessGame.gameCombo;

export const gameColorsArray = createSelector(baseColorsState, items =>
    items.map(item => item.color),
);

export const attemptResults = createSelector(gameAttemptsState, items =>
    items.map(item => item.results),
);

export const playerComboArray = createSelector(gameAttemptsState, items =>
    items.map(item => item.playerCombo),
);
