import { RootState } from "app/store";
import { useDispatch, useSelector } from "react-redux";

export const bubbleState = ({ bubbles }: RootState) => bubbles;

export const selectedBubble = ({ bubbles }: RootState) => bubbles.selectedBubble;

export const pendingState = ({ bubbles }: RootState) => bubbles.loading;

export const errorState = ({ bubbles }: RootState) => bubbles.error;

export const bubbleModalFormSelector = ({ bubbles }: RootState) => bubbles.isFormModalOpen;

export const useBubbleRedux = () => ({
    bubbles: useSelector(bubbleState),
    selectedBubble: useSelector(selectedBubble),
    pendingBubbles: useSelector(pendingState),
    bubbleError: useSelector(errorState),
    isBubbleFormModalOpen: useSelector(bubbleModalFormSelector),
    dispatch: useDispatch(),
});
