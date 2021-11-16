export interface BubbleCssProps {
	left: string;
	top: string;
	size: string;
	opacity: string;
}

export interface Bubble {
	id: number;
	selected: boolean;
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
	isSidePanelOpen: boolean;
}
