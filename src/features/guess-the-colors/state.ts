import { shuffle } from "utils";

export interface IguessGameItem {
    id: number;
    color: string;
}
export type ResultType = number[];

export interface IAttemptEnable {
    id: number;
    isEnabled: boolean;
}
export interface IResultsType {
    id: number;
    results: ResultType;
}
export interface IPlayerCombo {
    id: number;
    item: IguessGameItem;
}

export interface IAttempt {
    id: number;
    playerCombo: IguessGameItem[];
    results: ResultType;
    selected: boolean;
}

export interface IguessGame {
    baseColors: IguessGameItem[];
    gameCombo: IguessGameItem[];
    attempts: IAttempt[];
}

const colors = ["red", "blue", "green", "orange", "lightgreen", "lightblue"];
const setup = colors.map((item, idx) => {
    return {
        id: 1000 + idx,
        color: item,
    };
});

const newGame = shuffle(setup).slice(0, 4);

export const initialState: IguessGame = {
    baseColors: setup,
    gameCombo: newGame,
    attempts: colors.map((item, idx) => {
        return {
            id: 10001 + idx,
            playerCombo: [],
            results: [0, 0, 0, 0],
            selected: false,
        };
    }),
};
