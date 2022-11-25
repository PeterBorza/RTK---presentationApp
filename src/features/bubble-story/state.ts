import { Pending, Error } from "app/constants";
import { BubbleState, BubbleCssProps } from "./types";

export const initialState: BubbleState = {
    bubbles: [],
    loading: {
        isLoading: false,
        message: Pending.MESSAGE,
    },
    error: {
        error: false,
        message: Error.MESSAGE,
    },
    isFormModalOpen: false,
    selectedBubble: null,
};

export const starterBubble: BubbleCssProps = {
    left: "",
    top: "",
    size: "",
    opacity: "",
};
