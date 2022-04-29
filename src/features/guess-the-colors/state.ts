export interface IguessGameItem {
    id: number;
    color: string;
    order: number;
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
    isAttemptEnabled: boolean;
}

export interface IguessGame {
    baseColors: IguessGameItem[];
    gameCombo: IguessGameItem[];
    attempts: IAttempt[];
}

const colors = ["red", "blue", "green", "orange", "lightgreen", "lightblue"];

export const initialState: IguessGame = {
    baseColors: colors.map((item, idx) => {
        return {
            id: 1000 + idx,
            color: item,
            order: 1 + idx,
        };
    }),
    gameCombo: [],
    attempts: colors.map((item, idx) => {
        return {
            id: 10001 + idx,
            playerCombo: [],
            results: [0, 0, 0, 0],
            isAttemptEnabled: true,
        };
    }),
};
