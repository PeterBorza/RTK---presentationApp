import { RootState } from "app/store";
import { createSelector } from "@reduxjs/toolkit";
import { guessGameData } from "./state";

const { invalidColor } = guessGameData;

export const guessGameState = ({ guessGame }: RootState) => guessGame;

export const baseColorsState = ({ guessGame }: RootState) => guessGame.baseColors;

export const gameAttemptsState = ({ guessGame }: RootState) => guessGame.attempts;

export const gameComboState = ({ guessGame }: RootState) => guessGame.gameCombo;

export const finishedState = ({ guessGame }: RootState) => guessGame.finished;

export const errorState = ({ guessGame }: RootState) => guessGame.errorMessage;

export const playerComboSelector = createSelector(gameAttemptsState, items =>
    items.map(item => item.playerCombo),
);

export const playerResults = createSelector(gameAttemptsState, items =>
    items.map(item => item.results),
);

export const baseSelector = createSelector(gameAttemptsState, items =>
    items.map(item => item.base),
);

export const allValidComboesSelector = createSelector([playerResults], results =>
    results.every(res => res.length !== 0),
);

export const perfectMatchSelector = createSelector(playerResults, results =>
    results.some(res => res.length !== 0 && res.every(item => item === 2)),
);

export const emptyAttemptSelector = createSelector(playerComboSelector, playerComboes => {
    const allComboes = playerComboes.flatMap(combo => combo);
    const isCleanGame = allComboes.every(cmb => cmb.color === invalidColor);
    return isCleanGame;
});

// TODO useColorGameRedux as in other selectors
