import { shuffle, createArray } from "utils";

export type AttemptId = {
    id: number;
};

export interface IguessGameItem extends AttemptId {
    color: string;
}
export type ResultType = number[];
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
    base: IguessGameItem[];
}

export type ErrorMessageType = string | null;

export interface IguessGame {
    baseColors: IguessGameItem[];
    gameCombo: IguessGameItem[];
    attempts: IAttempt[];
    finished: boolean;
    errorMessage: ErrorMessageType;
}

export interface EvaluateType {
    result: string;
    definition: string;
}

export interface ErrorMessages {
    notIncluded: string;
    identicalColors: string;
}

export type TooltipType = {
    valid: string;
    invalid: string;
};
export interface GuessGameDataType {
    colorsToGuess: number;
    colorsToUse: number;
    attemptCount: number;
    invalidColor: string;
    resultValues: Array<string>;
    colorPalette: Array<string>;
    gameTitle: string;
    newGame: string;
    tooltip: TooltipType;
    gameLegend: EvaluateType[];
    errorMessages: ErrorMessages;
}

export const guessGameData: GuessGameDataType = {
    colorsToGuess: 4,
    colorsToUse: 6,
    attemptCount: 6,
    invalidColor: "none",
    resultValues: ["transparent", "rgb(253 252 253/.85)", "rgb(16 16 16/ .8)"],
    colorPalette: [
        "red",
        "blue",
        "green",
        "orange",
        "lightgreen",
        "lightblue",
        "purple",
        "pink",
        "yellow",
        "brown",
    ],
    gameTitle: "Guess the colors game",
    newGame: "New Game",
    tooltip: { valid: "click to get results", invalid: "You have to fill in all the squares" },

    gameLegend: [
        {
            result: "White circle",
            definition: "Color is in a random position.",
        },
        {
            result: "Black circle",
            definition: "Color is in it's exact spot in the combo.",
        },
        {
            result: "Transparent circle",
            definition: "Color is not in the combo.",
        },
    ],
    errorMessages: {
        notIncluded: "You must select a color for each field!",
        identicalColors: "The combo does not contain identical color combinations!",
    },
};

const { colorsToUse, attemptCount, colorPalette } = guessGameData;

export const setup: IguessGameItem[] = colorPalette.slice(0, colorsToUse).map((item, idx) => {
    return {
        id: 1000 + idx,
        color: item,
    };
});

export const initialState: IguessGame = {
    baseColors: setup,
    gameCombo: [],
    attempts: createArray(attemptCount).map((_, idx) => ({
        id: 10001 + idx,
        playerCombo: [],
        results: [],
        selected: false,
        base: setup,
    })),
    finished: false,
    errorMessage: null,
};
