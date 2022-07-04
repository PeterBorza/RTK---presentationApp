import { RootState } from "app/store";
import { createSelector } from "@reduxjs/toolkit";
import { guessGameData, IguessGameItem } from "./state";

const { colorsToGuess, invalidColor, errorMessages } = guessGameData;

export const hasIdenticalItems = (playerCombo: IguessGameItem[]) => {
    const colors = playerCombo.map(item => item.color);

    const result = Array.from(new Set(colors));
    if (result.length < colorsToGuess) return false;
    return true;
};

export const validCombo = (playerCombo: IguessGameItem[]) =>
    playerCombo.every(item => item.color !== invalidColor) && hasIdenticalItems(playerCombo);

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

export const allValidComboesSelector = createSelector([playerResults], results =>
    results.every(res => res.length !== 0),
);

export const perfectMatchSelector = createSelector(playerResults, results =>
    results.some(result => result.length !== 0 && result.every(item => item === 2)),
);

export const errorSelector = createSelector(gameAttemptsState, attempts => {
    const selected = attempts.find(attempt => attempt.selected === true);
    if (selected) {
        const combo = selected.playerCombo;
        const empty = combo.every(item => item.color === invalidColor);
        const incomplete = combo.some(item => item.color === invalidColor);
        const identical = !hasIdenticalItems(combo);

        if (empty) return null;
        if (incomplete) {
            return errorMessages.notIncluded;
        }
        if (identical) {
            return errorMessages.identicalColors;
        }
    }
    return null;
});
