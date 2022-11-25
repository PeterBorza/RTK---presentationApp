import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { useDispatch, useSelector } from "react-redux";

const memoryGameState = ({ memoryGame }: RootState) => memoryGame;

const photoSelector = ({ memoryGame }: RootState) => memoryGame.photos;

const gamePhotosSelector = ({ memoryGame }: RootState) => memoryGame.gamePhotos;

const flippedCardsSelector = createSelector(gamePhotosSelector, items =>
    items.filter(item => item.isFlipped === true),
);

const matchCardsSelector = createSelector(gamePhotosSelector, items =>
    items.filter(item => item.match === true),
);

const finishedGameSelector = createSelector(gamePhotosSelector, items =>
    items.every(item => item.match === true),
);

export const useMGameRedux = () => ({
    memoryGame: useSelector(memoryGameState),
    photos: useSelector(photoSelector),
    gamePhotos: useSelector(gamePhotosSelector),
    flippedCards: useSelector(flippedCardsSelector),
    matchingCards: useSelector(matchCardsSelector),
    isGameFinished: useSelector(finishedGameSelector),
    dispatch: useDispatch(),
});
