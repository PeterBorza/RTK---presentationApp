export type InputValueType = "left" | "top" | "size" | "opacity";

export type BubbleCssProps = Record<InputValueType, string>;

export type MinMaxValuesType = {
    min: number;
    max: number;
    inputValue: string;
};

export type BubbleWithValidationsType = Record<InputValueType, MinMaxValuesType>;

export interface Bubble {
    id: number;
    cssProps: Record<InputValueType, string>;
}

export interface PendingState {
    isLoading: boolean;
    message: string;
}
type ErrorState = {
    error: boolean;
    message: string;
};

export interface BubbleState {
    bubbles: Bubble[];
    loading: PendingState;
    error: ErrorState;
    isFormModalOpen: boolean;
    selectedBubble: Bubble | null;
}
