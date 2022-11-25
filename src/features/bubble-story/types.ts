export interface BubbleCssProps {
    left: string;
    top: string;
    size: string;
    opacity: string;
}

export interface Bubble {
    id: number;
    cssProps: BubbleCssProps;
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
