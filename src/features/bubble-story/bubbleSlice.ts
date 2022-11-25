import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BubbleState, Bubble } from "./types";
import { initialState } from "./state";

export const bubbleSlice = createSlice({
    name: "bubbles",
    initialState,
    reducers: {
        resetSelectedBubble: (state: BubbleState) => {
            state.selectedBubble = null;
        },
        addBubble: ({ bubbles }: BubbleState, { payload }: PayloadAction<Bubble>) => {
            bubbles.push(payload);
        },
        setBubbles: ({ bubbles }: BubbleState, { payload }: PayloadAction<Bubble[]>) => {
            bubbles.push(...payload);
        },
        setPending: (state: BubbleState, { payload }: PayloadAction<boolean>) => {
            state.loading.isLoading = payload;
        },
        setError: (state: BubbleState, { payload }: PayloadAction<boolean>) => {
            state.error.error = payload;
        },
        toggleBubbleFormModal: (state: BubbleState, { payload }: PayloadAction<boolean>) => {
            state.isFormModalOpen = payload;
        },
        deleteBub: ({ bubbles }: BubbleState, { payload }: PayloadAction<number>) => {
            const idx = bubbles.findIndex(bub => bub.id === payload);
            bubbles.splice(idx, 1);
        },
        setSelectedBubble: (state: BubbleState, { payload }: PayloadAction<Bubble>) => {
            state.selectedBubble = payload;
        },
    },
});

export const {
    resetSelectedBubble,
    setBubbles,
    setPending,
    setError,
    deleteBub,
    addBubble,
    toggleBubbleFormModal,
    setSelectedBubble,
} = bubbleSlice.actions;

export default bubbleSlice.reducer;
