import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BubbleState, Bubble } from "./types";
import { initialState } from "./state";

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
		toggleBubbleFormModal: (
			state: BubbleState,
			{ payload }: PayloadAction<boolean>
		) => {
			state.isFormModalOpen = payload;
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
	toggleBubbleFormModal,
} = bubbleSlice.actions;

export default bubbleSlice.reducer;
