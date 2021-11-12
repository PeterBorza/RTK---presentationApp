import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Pending, Error } from "../../app/constants";
import { BubbleState, Bubble } from "./types";

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
			bubbles.splice(idx);
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
