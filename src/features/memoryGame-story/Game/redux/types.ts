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

export enum GameTheme {
    MINIONS = "minions",
    CHRISTMAS = "christmas",
    CUTE_ANIMALS = "cute_animals",
}

export type GameThemeType = {
    images: GamePhotoData[];
    theme: GameTheme;
};

export interface MemoryGameState {
    photos: ImageDataType[];
    gamePhotos: GamePhotoData[];
    gameFinished: boolean;
    currentCount: number;
    currentTheme?: GameTheme;
    maxCount: number;
    themes: GameThemeType[];
}
