import santa from "./images/Santa_300.png";
import butterfly from "./images/bf0.png";
import tree from "./images/christmas_tree_300.png";
import snowFlake from "./images/Snowflake_300.png";
import ribbon from "./images/ribbon_300.png";
import snowman from "./images/snowman_300.png";
import gift from "./images/gift_300.png";
import rudolf from "./images/rudolf.png";
import candy from "./images/candy_250.png";
import bell from "./images/bell_300.png";
import snowman01 from "./images/snowman01_300.png";
import globe from "./images/globe_300.png";
import star from "./images/star.png";
import hat from "./images/hat.png";
import sledge from "./images/sledge.png";
import wreath from "./images/wreath_300.png";

import min0 from "./images/minion0.png";
import min1 from "./images/minion1-clean.png";
import min2 from "./images/minion2-clean.png";
import min3 from "./images/minion3-clean.png";
import min4 from "./images/minion4-clean.png";
import min5 from "./images/minion5-clean.png";
import min6 from "./images/minion6-clean.png";
import min7 from "./images/minion7-clean.png";
import min8 from "./images/minion8-clean.png";
import min9 from "./images/minion9-clean.png";
import min10 from "./images/minion10-clean.png";
import min11 from "./images/minion11-clean.png";
import min12 from "./images/minion12.jpg";

import { GamePhotoData } from "../memoryGame-story";
import { v4 as uuid } from "uuid";
import { shuffle } from "../../utils";
import { ImageType } from "../../utils/my-images";

export const minions: ImageType[] = [
    min0,
    min1,
    min2,
    min3,
    min4,
    min5,
    min6,
    min7,
    min8,
    min9,
    min10,
    min11,
    min12,
];

export const minionImages: GamePhotoData[] = [
    {
        id: "1",
        frontSrc: {
            src: min2,
            gameId: 100,
        },
        isFlipped: false,
        match: false,
    },
    {
        id: "2",
        frontSrc: {
            src: min3,
            gameId: 101,
        },
        isFlipped: false,
        match: false,
    },
    {
        id: "3",
        frontSrc: {
            src: min4,
            gameId: 102,
        },
        isFlipped: false,
        match: false,
    },
    {
        id: "4",
        frontSrc: {
            src: min5,
            gameId: 103,
        },
        isFlipped: false,
        match: false,
    },
    {
        id: "5",
        frontSrc: {
            src: min6,
            gameId: 104,
        },
        isFlipped: false,
        match: false,
    },
    {
        id: "6",
        frontSrc: {
            src: min7,
            gameId: 105,
        },
        isFlipped: false,
        match: false,
    },
    {
        id: "7",
        frontSrc: {
            src: min8,
            gameId: 106,
        },
        isFlipped: false,
        match: false,
    },
    {
        id: "8",
        frontSrc: {
            src: min9,
            gameId: 107,
        },
        isFlipped: false,
        match: false,
    },

    {
        id: "9",
        frontSrc: {
            src: min2,
            gameId: 100,
        },
        isFlipped: false,
        match: false,
    },
    {
        id: "10",
        frontSrc: {
            src: min3,
            gameId: 101,
        },
        isFlipped: false,
        match: false,
    },
    {
        id: "11",
        frontSrc: {
            src: min4,
            gameId: 102,
        },
        isFlipped: false,
        match: false,
    },
    {
        id: "12",
        frontSrc: {
            src: min5,
            gameId: 103,
        },
        isFlipped: false,
        match: false,
    },
    {
        id: "13",
        frontSrc: {
            src: min6,
            gameId: 104,
        },
        isFlipped: false,
        match: false,
    },
    {
        id: "14",
        frontSrc: {
            src: min7,
            gameId: 105,
        },
        isFlipped: false,
        match: false,
    },
    {
        id: "15",
        frontSrc: {
            src: min8,
            gameId: 106,
        },
        isFlipped: false,
        match: false,
    },
    {
        id: "16",
        frontSrc: {
            src: min9,
            gameId: 107,
        },
        isFlipped: false,
        match: false,
    },
];

export const imageStack: GamePhotoData[] = [
    {
        id: uuid(),
        frontSrc: {
            src: santa,
            gameId: 100,
        },
        isFlipped: false,
        match: false,
    },
    {
        id: uuid(),
        frontSrc: {
            src: ribbon,
            gameId: 101,
        },
        isFlipped: false,
        match: false,
    },
    {
        id: uuid(),
        frontSrc: {
            src: butterfly,
            gameId: 102,
        },
        isFlipped: false,
        match: false,
    },
    {
        id: uuid(),
        frontSrc: {
            src: snowFlake,
            gameId: 103,
        },
        isFlipped: false,
        match: false,
    },
    {
        id: uuid(),
        frontSrc: {
            src: tree,
            gameId: 104,
        },
        isFlipped: false,
        match: false,
    },
    {
        id: uuid(),
        frontSrc: {
            src: snowman,
            gameId: 105,
        },
        isFlipped: false,
        match: false,
    },
    {
        id: uuid(),
        frontSrc: {
            src: gift,
            gameId: 106,
        },
        isFlipped: false,
        match: false,
    },
    {
        id: uuid(),
        frontSrc: {
            src: rudolf,
            gameId: 107,
        },
        isFlipped: false,
        match: false,
    },
    {
        id: uuid(),
        frontSrc: {
            src: candy,
            gameId: 108,
        },
        isFlipped: false,
        match: false,
    },
    {
        id: uuid(),
        frontSrc: {
            src: bell,
            gameId: 109,
        },
        isFlipped: false,
        match: false,
    },
    {
        id: uuid(),
        frontSrc: {
            src: snowman01,
            gameId: 110,
        },
        isFlipped: false,
        match: false,
    },
    {
        id: uuid(),
        frontSrc: {
            src: globe,
            gameId: 111,
        },
        isFlipped: false,
        match: false,
    },
    {
        id: uuid(),
        frontSrc: {
            src: star,
            gameId: 112,
        },
        isFlipped: false,
        match: false,
    },
    {
        id: uuid(),
        frontSrc: {
            src: hat,
            gameId: 113,
        },
        isFlipped: false,
        match: false,
    },
    {
        id: uuid(),
        frontSrc: {
            src: sledge,
            gameId: 114,
        },
        isFlipped: false,
        match: false,
    },
    {
        id: uuid(),
        frontSrc: {
            src: wreath,
            gameId: 115,
        },
        isFlipped: false,
        match: false,
    },
];

export const gameImagesSlice: GamePhotoData[] = [
    {
        id: "1",
        frontSrc: {
            src: santa,
            gameId: 100,
        },
        isFlipped: false,
        match: false,
    },
    {
        id: "2",
        frontSrc: {
            src: tree,
            gameId: 101,
        },
        isFlipped: false,
        match: false,
    },
    {
        id: "3",
        frontSrc: {
            src: snowman,
            gameId: 102,
        },
        isFlipped: false,
        match: false,
    },
    {
        id: "4",
        frontSrc: {
            src: rudolf,
            gameId: 103,
        },
        isFlipped: false,
        match: false,
    },
    {
        id: "5",
        frontSrc: {
            src: candy,
            gameId: 104,
        },
        isFlipped: false,
        match: false,
    },
    {
        id: "6",
        frontSrc: {
            src: bell,
            gameId: 105,
        },
        isFlipped: false,
        match: false,
    },
    {
        id: "7",
        frontSrc: {
            src: snowman01,
            gameId: 106,
        },
        isFlipped: false,
        match: false,
    },
    {
        id: "8",
        frontSrc: {
            src: globe,
            gameId: 107,
        },
        isFlipped: false,
        match: false,
    },
    {
        id: "9",
        frontSrc: {
            src: santa,
            gameId: 100,
        },
        isFlipped: false,
        match: false,
    },
    {
        id: "10",
        frontSrc: {
            src: tree,
            gameId: 101,
        },
        isFlipped: false,
        match: false,
    },
    {
        id: "11",
        frontSrc: {
            src: snowman,
            gameId: 102,
        },
        isFlipped: false,
        match: false,
    },
    {
        id: "12",
        frontSrc: {
            src: rudolf,
            gameId: 103,
        },
        isFlipped: false,
        match: false,
    },
    {
        id: "13",
        frontSrc: {
            src: candy,
            gameId: 104,
        },
        isFlipped: false,
        match: false,
    },
    {
        id: "14",
        frontSrc: {
            src: bell,
            gameId: 105,
        },
        isFlipped: false,
        match: false,
    },
    {
        id: "15",
        frontSrc: {
            src: snowman01,
            gameId: 106,
        },
        isFlipped: false,
        match: false,
    },
    {
        id: "16",
        frontSrc: {
            src: globe,
            gameId: 107,
        },
        isFlipped: false,
        match: false,
    },
];

export const shuffledImages: GamePhotoData[] = shuffle(minionImages);
