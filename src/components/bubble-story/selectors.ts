import { typeofBubbleState } from "../../app/store";

export const bubbleState = ({ bubbles }: typeofBubbleState) => bubbles;

export const selectedBubble = ({ bubbles }: typeofBubbleState) => {
	// bubbles.bubbles.find(bubble => bubble.selected === true);
	const idx = bubbles.bubbles.findIndex(item => item.selected === true);
	return bubbles.bubbles[idx];
};

export const pendingState = ({ bubbles }: typeofBubbleState) => bubbles.loading;

export const errorState = ({ bubbles }: typeofBubbleState) => bubbles.error;

export const bubbleSidePanelSelector = ({ bubbles }: typeofBubbleState) =>
	bubbles.isSidePanelOpen;

export const bubbleModalFormSelector = ({ bubbles }: typeofBubbleState) =>
	bubbles.isFormModalOpen;
