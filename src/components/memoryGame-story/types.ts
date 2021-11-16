export type ColorString = string[];

export interface ColorSetInterFace {
	id: number;
	palet: ColorString;
}

export interface ImageData {
	id: string;
	src: string;
	caption: string;
}

export interface MemoryGameState {
	photos: ImageData[];
	pair: string[];
	colors: ColorSetInterFace[];
	pending: boolean;
	error: boolean;
	isSidePanelOpen: boolean;
}
