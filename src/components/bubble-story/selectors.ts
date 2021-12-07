import { RootState } from "../../app/store";

export const bubbleState = ({ bubbles }: RootState) => bubbles;

export const selectedBubble = ({ bubbles }: RootState) => {
	// bubbles.bubbles.find(bubble => bubble.selected === true);
	const idx = bubbles.bubbles.findIndex(item => item.selected === true);
	return bubbles.bubbles[idx];
};

export const pendingState = ({ bubbles }: RootState) => bubbles.loading;

export const errorState = ({ bubbles }: RootState) => bubbles.error;

export const bubbleModalFormSelector = ({ bubbles }: RootState) =>
	bubbles.isFormModalOpen;
