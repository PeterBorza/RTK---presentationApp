import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "app/store";

export const memoryGameState = ({ memoryGame }: RootState) => memoryGame;

export const photoSelector = ({ memoryGame }: RootState) => memoryGame.photos;

export const loadingSelector = ({ memoryGame }: RootState) => memoryGame.pending;

export const gamePhotosSelector = ({ memoryGame }: RootState) => memoryGame.gamePhotos;

export const flippedCardsSelector = createSelector(gamePhotosSelector, items =>
    items.filter(item => item.isFlipped === true),
);

export const matchCardsSelector = createSelector(gamePhotosSelector, items =>
    items.filter(item => item.match === true),
);
