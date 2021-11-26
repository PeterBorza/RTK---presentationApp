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
	backGround: string;
	src: string;
	gameId: number;
}

export interface GamePhotoData {
	id: string;
	frontSrc: GameImage;
	backSrc: Omit<GameImage, "gameId">;
	isFlipped: boolean;
}

export interface MemoryGameState {
	photos: ImageData[];
	gamePhotos: GamePhotoData[];
	pair: GamePhotoData[];
	colors: ColorSetInterFace[];
	pending: boolean;
	error: boolean;
	isSidePanelOpen: boolean;
}
