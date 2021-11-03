import { typeofMemoryGameState } from "../../app/store";

export const memoryGameState = (state: typeofMemoryGameState) =>
	state.memoryGame;

export const colorSelector = (state: typeofMemoryGameState) =>
	state.memoryGame.colors;

export const paletSelector = (state: typeofMemoryGameState) =>
	state.memoryGame.colors.map(palet => palet.palet);
