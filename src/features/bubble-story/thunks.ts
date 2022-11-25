import { createAsyncThunk } from "@reduxjs/toolkit";
import { BaseAPI, RootState } from "app";
import { setBubbles, setPending, setError, deleteBub, addBubble } from "./bubbleSlice";
import { Bubble, BubbleCssProps } from "./types";

const getAsyncBubbles = async (
    url: string,
    { dispatch }: { dispatch: Function },
): Promise<void> => {
    try {
        dispatch(setPending(true));
        const response = await fetch(`${BaseAPI.BUBBLES_URL}/${url}`);
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

const handleDeleteBubble = async (id: number, { dispatch }: { dispatch: Function }) => {
    try {
        await fetch(`${BaseAPI.BUBBLES_URL}/bubbles/${id}`, {
            method: "DELETE",
        });
        dispatch(deleteBub(id));
    } catch {
        dispatch(setError(true));
    }
};

const handlePostBubble = async (
    data: BubbleCssProps,
    { dispatch, getState }: { dispatch: Function; getState: Function },
) => {
    const { bubbles } = getState() as RootState;

    const ids: number[] = bubbles.bubbles.map(bub => bub.id);
    const maxIndex: number = Math.max(...ids);
    const newBubble: Bubble = {
        id: maxIndex + 1,
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
        dispatch(setError(true));
    }
};

const getBubbles = createAsyncThunk("bubbles/getAsyncBubbles", getAsyncBubbles);

const deleteBubble = createAsyncThunk("bubbles/handleDeleteBubble", handleDeleteBubble);

const postBubble = createAsyncThunk("bubbles/handlePostBubble", handlePostBubble);

export { getBubbles, deleteBubble, postBubble };
