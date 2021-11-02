import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Pending, Error } from "../../app/constants";

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

interface PendingState {
	isLoading: boolean;
	message: string;
}
type ErrorState = string | null;

interface BubbleState {
	bubbles: Bubble[];
	loading: PendingState;
	error: ErrorState;
}

const initialState: BubbleState = {
	bubbles: [],
	loading: {
		isLoading: false,
		message: Pending.MESSAGE,
	},
	error: null,
};

export const bubbleSlice = createSlice({
	name: "bubbles",
	initialState,
	reducers: {
		selectBubble: (
			{ bubbles }: BubbleState,
			{ payload }: PayloadAction<number>
		) => {
			bubbles.map(
				bub => (bub.selected = bub.id === payload ? true : false)
			);
		},
		addBubble: (
			{ bubbles }: BubbleState,
			{ payload }: PayloadAction<Bubble>
		) => {
			bubbles.push(payload);
		},
		setBubbles: (
			{ bubbles }: BubbleState,
			{ payload }: PayloadAction<Bubble[] | []>
		) => {
			bubbles.push(...payload);
		},
		setPending: (
			state: BubbleState,
			{ payload }: PayloadAction<boolean>
		) => {
			state.loading.isLoading = payload;
		},
		setError: (state: BubbleState) => {
			state.error = Error.MESSAGE;
		},
		deleteBub: (
			{ bubbles }: BubbleState,
			{ payload }: PayloadAction<number>
		) => {
			const idx = bubbles.findIndex(bub => bub.id === payload);
			bubbles.splice(idx, 1);
		},
	},
});

export const {
	selectBubble,
	setBubbles,
	setPending,
	setError,
	deleteBub,
	addBubble,
} = bubbleSlice.actions;

export default bubbleSlice.reducer;
