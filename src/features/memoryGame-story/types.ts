import { ImageDataType, ImageType } from "utils/my-images";

export type ColorString = string[];

export interface ColorSetInterFace {
    id: number;
    palet: ColorString;
}

export interface GameImage {
    src: ImageType;
    gameId: number;
}

export interface GamePhotoData {
    id: string;
    frontSrc: GameImage;
    isFlipped: boolean;
    match: boolean;
}

export type GameTheme = "minions" | "christmas";

export interface MemoryGameState {
    photos: ImageDataType[];
    gamePhotos: GamePhotoData[];
    pending: boolean;
    clickCount: number;
    gameThemes: GameTheme;
}
