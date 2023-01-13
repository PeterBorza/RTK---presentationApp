import { AppMessages } from "app/constants";
import { BubbleState, BubbleCssProps } from "./types";

export const initialState: BubbleState = {
    bubbles: [],
    loading: {
        isLoading: false,
        message: AppMessages.PENDING,
    },
    error: {
        error: false,
        message: AppMessages.ERROR,
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
