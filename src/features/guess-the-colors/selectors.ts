import { RootState } from "app/store";
import { createSelector } from "@reduxjs/toolkit";

export const guessGameState = ({ guessGame }: RootState) => guessGame;

export const baseColorsState = ({ guessGame }: RootState) => guessGame.baseColors;

export const gameAttemptsState = ({ guessGame }: RootState) => guessGame.attempts;

export const gameComboState = ({ guessGame }: RootState) => guessGame.gameCombo;

export const gameColorsSelector = createSelector(baseColorsState, items =>
    items.map(item => item.color),
);

export const playerComboSelector = createSelector(gameAttemptsState, items =>
    items.map(item => item.playerCombo),
);

export const playerResults = createSelector(gameAttemptsState, items =>
    items.map(item => item.results),
);
