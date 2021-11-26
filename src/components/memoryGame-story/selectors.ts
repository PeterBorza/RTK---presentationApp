import { createSelector } from "reselect";
import { typeofMemoryGameState } from "../../app/store";

export const memoryGameState = (state: typeofMemoryGameState) =>
	state.memoryGame;

export const gamePhotosSelector = (state: typeofMemoryGameState) =>
	state.memoryGame.gamePhotos;

export const colorSelector = (state: typeofMemoryGameState) =>
	state.memoryGame.colors;

export const photoSelector = (state: typeofMemoryGameState) =>
	state.memoryGame.photos;

export const pairSelector = (state: typeofMemoryGameState) =>
	state.memoryGame.pair;

export const paletSelector = (state: typeofMemoryGameState) =>
	state.memoryGame.colors.map(palet => palet.palet);

export const sidePanelSelector = (state: typeofMemoryGameState) =>
	state.memoryGame.isSidePanelOpen;

export const loadingSelector = (state: typeofMemoryGameState) =>
	state.memoryGame.pending;

export const errorSelector = (state: typeofMemoryGameState) =>
	state.memoryGame.error;

export const flippedCardSelector = createSelector(gamePhotosSelector, items => {
	items.map(item => item.isFlipped);
});
