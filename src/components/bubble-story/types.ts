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
type ErrorState = string | null;

export interface BubbleState {
	bubbles: Bubble[];
	loading: PendingState;
	error: ErrorState;
}
