import { AppMessages } from "app/constants";
import { BubbleState } from "./types";

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
