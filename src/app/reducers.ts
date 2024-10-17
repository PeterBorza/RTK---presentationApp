import { combineReducers } from "@reduxjs/toolkit";

import liftReducer from "features/building-story/liftSlice";
import memoryGameReducer from "features/memoryGame-story/Game/redux/memoryGameSlice";
import guessGameReducer from "features/guess-the-colors/guessGameSlice";
import bubbleReducer from "features/bubble-story/bubbleSlice";
import gasReducer from "features/Gas/gasSlice";
import lightReducer from "features/Light/lightSlice";
import appReducer from "./appSlice";
import musicGameReducer from "features/MusicGame/redux/musicGameSlice";

const reducers = {
  lift: liftReducer,
  memoryGame: memoryGameReducer,
  guessGame: guessGameReducer,
  bubbles: bubbleReducer,
  gas: gasReducer,
  light: lightReducer,
  app: appReducer,
  musicGame: musicGameReducer,
};

const createRootReducer = () => combineReducers({ ...reducers });

export const rootReducer = createRootReducer();
