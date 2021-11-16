import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Pending, Error } from "../../app/constants";
import { BubbleState, Bubble } from "./types";

const initialState: BubbleState = {
	bubbles: [],
	loading: {
		isLoading: false,
		message: Pending.MESSAGE,
	},
	error: {
		error: false,
		message: Error.MESSAGE,
	},
	isSidePanelOpen: false,
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
			{ payload }: PayloadAction<Bubble[]>
		) => {
			bubbles.push(...payload);
		},
		setPending: (
			state: BubbleState,
			{ payload }: PayloadAction<boolean>
		) => {
			state.loading.isLoading = payload;
		},
		setError: (state: BubbleState, { payload }: PayloadAction<boolean>) => {
			state.error.error = payload;
		},
		toggleBubbleSidePanel: (
			state: BubbleState,
			{ payload }: PayloadAction<boolean>
		) => {
			state.isSidePanelOpen = payload;
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
	toggleBubbleSidePanel,
} = bubbleSlice.actions;

export default bubbleSlice.reducer;
