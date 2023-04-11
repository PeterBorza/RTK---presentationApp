import { BubbleWithValidationsType, MinMaxValuesType } from "./types";

export const getErrorMessage = ({ min, max }: MinMaxValuesType) =>
    `value must be between ${min} and ${max}`;

export const getValidation = ({ min, max, inputValue }: MinMaxValuesType) => {
    if (isNaN(+inputValue) || +inputValue < 0) return false;
    if ((min <= +inputValue && +inputValue <= max) || inputValue === "") return true;

    return false;
};

export const bubbleValidations: BubbleWithValidationsType = {
    left: {
        min: 20,
        max: 100,
        inputValue: "",
    },
    top: {
        min: 20,
        max: 100,
        inputValue: "",
    },
    size: {
        min: 10,
        max: 612,
        inputValue: "",
    },
    opacity: {
        min: 0.3,
        max: 1,
        inputValue: "",
    },
};
