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

export interface GameImage {
	src: string;
	gameId: number;
}

export interface GamePhotoData {
	id: string;
	frontSrc: GameImage;
	isFlipped: boolean;
	match: boolean;
}

export interface MemoryGameState {
	photos: ImageData[];
	gamePhotos: GamePhotoData[];
	colors: ColorSetInterFace[];
	pending: boolean;
	error: boolean;
	isSidePanelOpen: boolean;
	clickCount: number;
}
