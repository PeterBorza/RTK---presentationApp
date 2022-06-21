import { shuffle } from "utils";
import { createArray } from "utils/generators";

export type AttemptId = {
    id: number;
};

export interface IguessGameItem extends AttemptId {
    color: string;
}
export type ResultType = number[];

export interface IAttemptEnable extends AttemptId {
    isEnabled: boolean;
}
export interface IResultsType extends AttemptId {
    results: ResultType;
}
export interface IPlayerCombo extends AttemptId {
    item: IguessGameItem;
    order: number;
}

export interface IAttempt extends AttemptId {
    playerCombo: IguessGameItem[];
    results: ResultType;
    selected: boolean;
}

export interface IguessGame {
    baseColors: IguessGameItem[];
    gameCombo: IguessGameItem[];
    attempts: IAttempt[];
    finished: boolean;
}

export const COLORS_TO_GUESS_COUNT = 4;
export const NUMBER_OF_ATTEMPTS = 6;

export const resultValues = ["transparent", "rgb(255 255 255/.8)", "black"];
const colors: string[] = ["red", "blue", "green", "orange", "lightgreen", "lightblue"];
const setup: IguessGameItem[] = colors.map((item, idx) => {
    return {
        id: 1000 + idx,
        color: item,
    };
});

export const initialPlayerCombo: IguessGameItem[] = createArray(COLORS_TO_GUESS_COUNT).map(
    (item, idx) => ({
        id: 1000 + idx,
        color: "none",
    }),
);

const newGame: IguessGameItem[] = shuffle(setup).slice(0, COLORS_TO_GUESS_COUNT);

export const initialState: IguessGame = {
    baseColors: setup,
    gameCombo: newGame,
    attempts: createArray(NUMBER_OF_ATTEMPTS).map((item, idx) => {
        return {
            id: 10001 + idx,
            playerCombo: initialPlayerCombo,
            results: [],
            selected: idx === 0 ? true : false,
        };
    }),
    finished: false,
};
