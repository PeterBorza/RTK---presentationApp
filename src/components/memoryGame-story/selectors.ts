import { createSelector } from "@reduxjs/toolkit";
import { typeofMemoryGameState } from "../../app/store";

export const memoryGameState = ({ memoryGame }: typeofMemoryGameState) =>
	memoryGame;

export const gamePhotosSelector = ({ memoryGame }: typeofMemoryGameState) =>
	memoryGame.gamePhotos;

export const photoSelector = ({ memoryGame }: typeofMemoryGameState) =>
	memoryGame.photos;

export const sidePanelSelector = ({ memoryGame }: typeofMemoryGameState) =>
	memoryGame.isSidePanelOpen;

export const loadingSelector = ({ memoryGame }: typeofMemoryGameState) =>
	memoryGame.pending;

export const errorSelector = ({ memoryGame }: typeofMemoryGameState) =>
	memoryGame.error;

export const flippedCardsSelector = createSelector(gamePhotosSelector, items =>
	items.filter(item => item.isFlipped === true)
);

export const matchCardsSelector = createSelector(gamePhotosSelector, items =>
	items.filter(item => item.match === true)
);

export const clickCountSelector = ({ memoryGame }: typeofMemoryGameState) =>
	memoryGame.clickCount;
