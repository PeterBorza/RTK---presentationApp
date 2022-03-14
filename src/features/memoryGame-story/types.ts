import { ImageDataType } from "../../utils/my-images";

export type ColorString = string[];

export interface ColorSetInterFace {
    id: number;
    palet: ColorString;
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
    photos: ImageDataType[];
    gamePhotos: GamePhotoData[];
    pending: boolean;
    error: boolean;
    clickCount: number;
}
