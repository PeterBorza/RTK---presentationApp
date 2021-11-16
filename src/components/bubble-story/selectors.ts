import { typeofBubbleState } from "../../app/store";

export const bubbleState = ({ bubbles }: typeofBubbleState) => bubbles;

export const selectedBubble = ({ bubbles }: typeofBubbleState) =>
	bubbles.bubbles.find(bubble => bubble.selected === true);

export const pendingState = ({ bubbles }: typeofBubbleState) => bubbles.loading;

export const errorState = ({ bubbles }: typeofBubbleState) => bubbles.error;

export const bubbleSidePanelSelector = ({ bubbles }: typeofBubbleState) =>
	bubbles.isSidePanelOpen;
