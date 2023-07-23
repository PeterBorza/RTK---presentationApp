import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppDispatch, BUBBLES_URL, GetState, RootState } from "app";
import { setBubbles, setPending, setError, deleteBub, addBubble } from "./bubbleSlice";
import { Bubble, BubbleCssProps } from "./types";

const getAsyncBubbles = async (
    url: string,
    { dispatch }: { dispatch: AppDispatch },
): Promise<void> => {
    try {
        dispatch(setPending(true));
        const response = await fetch(`${BUBBLES_URL}/${url}`);
        const data = await response.json();
        dispatch(setBubbles(data));
        return data;
    } catch (error) {
        dispatch(setError(true));
        console.warn(`This is due to: ${error}`);
    } finally {
        dispatch(setPending(false));
    }
};

const handleDeleteBubble = async (id: number, { dispatch }: { dispatch: AppDispatch }) => {
    try {
        await fetch(`${BUBBLES_URL}/bubbles/${id}`, {
            method: "DELETE",
        });
        dispatch(deleteBub(id));
    } catch {
        dispatch(setError(true));
    }
};

const handlePostBubble = async (
    data: BubbleCssProps,
    { dispatch, getState }: { dispatch: AppDispatch; getState: GetState },
) => {
    const { bubbles } = getState();

    const ids = bubbles.bubbles.map(bub => bub.id);
    const maxIndex = Math.max(...ids);
    const newBubble: Bubble = {
        id: maxIndex + 1,
        cssProps: data,
    };
    try {
        await fetch(`${BUBBLES_URL}/bubbles`, {
            method: "POST",
            body: JSON.stringify(newBubble),
            headers: { "Content-Type": "application/json" },
        });
        dispatch(addBubble(newBubble));
    } catch {
        dispatch(setError(true));
    }
};

const getBubbles = createAsyncThunk<Promise<void>, string, { dispatch: AppDispatch }>(
    "bubbles/getAsyncBubbles",
    getAsyncBubbles,
);

const deleteBubble = createAsyncThunk<Promise<void>, number, { dispatch: AppDispatch }>(
    "bubbles/handleDeleteBubble",
    handleDeleteBubble,
);

const postBubble = createAsyncThunk<
    Promise<void>,
    BubbleCssProps,
    { dispatch: AppDispatch; state: RootState }
>("bubbles/handlePostBubble", handlePostBubble);

export { getBubbles, deleteBubble, postBubble };
