import { shuffle } from "utils";

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
}

const colors = ["red", "blue", "green", "orange", "lightgreen", "lightblue"];
const setup = colors.map((item, idx) => {
    return {
        id: 1000 + idx,
        color: item,
    };
});

const newGame: IguessGameItem[] = shuffle(setup).slice(0, 4);

export const initialState: IguessGame = {
    baseColors: setup,
    gameCombo: newGame,
    attempts: colors.map((item, idx) => {
        return {
            id: 10001 + idx,
            playerCombo: [],
            results: [],
            selected: false,
        };
    }),
};
