export interface IguessGameItem {
    id: number;
    color: string;
    order: number | null;
}

export interface IAttempt {
    id: number;
    playerCombo: IguessGameItem[];
    results: number[];
}

export interface IguessGame {
    baseColors: IguessGameItem[];
    gameCombo: IguessGameItem[];
    attempts: IAttempt[];
}

export const initialState: IguessGame = {
    baseColors: [
        {
            id: 1000,
            color: "red",
            order: 1,
        },
        {
            id: 1001,
            color: "blue",
            order: 2,
        },
        {
            id: 1002,
            color: "green",
            order: 3,
        },
        {
            id: 1003,
            color: "lightblue",
            order: 4,
        },
        {
            id: 1004,
            color: "lightgreen",
            order: 5,
        },
        {
            id: 1005,
            color: "orange",
            order: 6,
        },
    ],
    gameCombo: [],
    attempts: [
        {
            id: 10001,
            playerCombo: [],
            results: [],
        },
        {
            id: 10002,
            playerCombo: [],
            results: [],
        },
        {
            id: 10003,
            playerCombo: [],
            results: [],
        },
        {
            id: 10004,
            playerCombo: [],
            results: [],
        },
        {
            id: 10005,
            playerCombo: [],
            results: [],
        },
        {
            id: 10006,
            playerCombo: [],
            results: [],
        },
    ],
};
