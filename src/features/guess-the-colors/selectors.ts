import { RootState } from "app/store";
import { createSelector } from "@reduxjs/toolkit";
import { guessGameData, IguessGameItem } from "./state";

export const hasIdenticalItems = (playerCombo: IguessGameItem[]) => {
    const { colorsToGuess } = guessGameData;
    const colors = playerCombo.map(item => item.color);

    const result = Array.from(new Set(colors));
    if (result.length < colorsToGuess) return false;
    return true;
};

export const validCombo = (playerCombo: IguessGameItem[]) =>
    playerCombo.every(item => item.color !== "none") && hasIdenticalItems(playerCombo);

export const guessGameState = ({ guessGame }: RootState) => guessGame;

export const baseColorsState = ({ guessGame }: RootState) => guessGame.baseColors;

export const gameAttemptsState = ({ guessGame }: RootState) => guessGame.attempts;

export const gameComboState = ({ guessGame }: RootState) => guessGame.gameCombo;

export const finishedState = ({ guessGame }: RootState) => guessGame.finished;

export const errorState = ({ guessGame }: RootState) => guessGame.errorMessage;

export const gameColorsSelector = createSelector(baseColorsState, items =>
    items.map(item => item.color),
);

export const playerComboSelector = createSelector(gameAttemptsState, items =>
    items.map(item => item.playerCombo),
);

export const playerResults = createSelector(gameAttemptsState, items =>
    items.map(item => item.results),
);

export const selectedAttempt = createSelector(gameAttemptsState, items =>
    items.find(item => item.selected === true),
);

export const allValidComboesSelector = createSelector(playerComboSelector, comboes =>
    comboes.every(combo => validCombo(combo) === true),
);

export const perfectMatchSelector = createSelector(playerResults, results =>
    results.some(result => result.length !== 0 && result.every(item => item === 2)),
);
