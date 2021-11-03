export type ColorString = string[];

export interface ColorSetInterFace {
	id: number;
	palet: ColorString;
}

export interface MemoryGameState {
	photos: string[];
	pair: string[];
	colors: ColorSetInterFace[];
	pending: string | null;
}
