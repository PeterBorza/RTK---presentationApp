import { createAsyncThunk } from "@reduxjs/toolkit";
import { BaseAPI } from "../../app/constants";
import { typeofBubbleState } from "../../app/store";
import {
	setBubbles,
	setPending,
	setError,
	deleteBub,
	addBubble,
} from "./bubbleSlice";
import { Bubble, BubbleCssProps } from "./types";

export const getAsyncBubbles = createAsyncThunk(
	"bubbles/getAsyncBubbles",
	async (_, { dispatch }: { dispatch: Function }): Promise<void> => {
		try {
			dispatch(setPending(true));
			const response = await fetch(`${BaseAPI.BUBBLES_URL}/bubbles`);
			const data = await response.json();
			dispatch(setBubbles(data));
			return data;
		} catch {
			dispatch(setError());
		} finally {
			dispatch(setPending(false));
		}
	}
);

// **********************************************************************

export const handleDeleteBubble = async (
	id: number,
	{ dispatch }: { dispatch: Function }
) => {
	try {
		await fetch(`${BaseAPI.BUBBLES_URL}/bubbles/${id}`, {
			method: "DELETE",
		});
		dispatch(deleteBub(id));
	} catch {
		dispatch(setError());
	}
};

export const deleteBubble = createAsyncThunk(
	"bubbles/handleDeleteBubble",
	handleDeleteBubble
);

// **********************************************************************

export const handlePostBubble = async (
	data: BubbleCssProps,
	{ dispatch, getState }: { dispatch: Function; getState: Function }
) => {
	const { bubbles } = getState() as typeofBubbleState;

	const ids: number[] = bubbles.bubbles.map(bub => bub.id);
	const maxIndex: number = Math.max(...ids);
	const newBubble: Bubble = {
		id: maxIndex + 1,
		selected: false,
		cssProps: data,
	};
	try {
		await fetch(`${BaseAPI.BUBBLES_URL}/bubbles`, {
			method: "POST",
			body: JSON.stringify(newBubble),
			headers: { "Content-Type": "application/json" },
		});
		dispatch(addBubble(newBubble));
	} catch {
		dispatch(setError());
	}
};

export const postBubble = createAsyncThunk(
	"bubbles/handlePostBubble",
	handlePostBubble
);
