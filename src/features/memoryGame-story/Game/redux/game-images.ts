import santa from "../../images/Santa_300.png";
import butterfly from "../../images/bf0.png";
import tree from "../../images/christmas_tree_300.png";
import snowFlake from "../../images/Snowflake_300.png";
import ribbon from "../../images/ribbon_300.png";
import snowman from "../../images/snowman_300.png";
import gift from "../../images/gift_300.png";
import rudolf from "../../images/rudolf.png";
import candy from "../../images/candy_250.png";
import bell from "../../images/bell_300.png";
import snowman01 from "../../images/snowman01_300.png";
import globe from "../../images/globe_300.png";
import star from "../../images/star.png";
import hat from "../../images/hat.png";
import sledge from "../../images/sledge.png";
import wreath from "../../images/wreath_300.png";

import min0 from "../../images/minion0.png";
import min1 from "../../images/minion1-clean.png";
import min2 from "../../images/minion2-clean.png";
import min3 from "../../images/minion3-clean.png";
import min4 from "../../images/minion4-clean.png";
import min5 from "../../images/minion5-clean.png";
import min6 from "../../images/minion6-clean.png";
import min7 from "../../images/minion7-clean.png";
import min8 from "../../images/minion8-clean.png";
import min9 from "../../images/minion9-clean.png";
import min10 from "../../images/minion10-clean.png";
import min11 from "../../images/minion11-clean.png";
import min12 from "../../images/minion12.jpg";

import owl from "../../images/icon_owl.png";
import clown_fish from "../../images/icon_clown-fish.png";
import elephant from "../../images/icon_elephant.png";
import bird from "../../images/icon_bird.png";
import butterflyIcon from "../../images/icon_butterfly.png";
import chicken from "../../images/icon_chicken.png";
import snail from "../../images/icon_snail.png";
import rabbit from "../../images/icon_rabbit.png";

import { GamePhotoData } from "../redux/types";
import { shuffle } from "utils";
import { ImageType } from "utils/my-images";
import { GameImage } from "../redux/types";

const SQUARES = 16;

const frontImages = (src: ImageType, gameId: number) => ({
  src,
  gameId: gameId + 100,
});

const duplicates = <T>(arr: T[]): T[] => [...arr, ...arr];

const getGameImages = (arr: GameImage[]) =>
  new Array(SQUARES).fill(null).map((_, idx) => ({
    id: (idx + 1).toLocaleString(),
    frontSrc: duplicates<GameImage>(arr)[idx],
    isFlipped: false,
    match: false,
  }));

const minions: ImageType[] = [
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

const christmas: ImageType[] = [
  santa,
  tree,
  snowman,
  rudolf,
  candy,
  bell,
  snowman01,
  globe,
  butterfly,
  snowFlake,
  ribbon,
  gift,
  star,
  hat,
  sledge,
  wreath,
];

const cuteAnimals = [snail, bird, chicken, owl, elephant, rabbit, butterflyIcon, clown_fish];

const frontMinionImages: GameImage[] = minions.slice(2, 10).map(frontImages);
export const minionGameImages = getGameImages(frontMinionImages);

const frontChristmasImages: GameImage[] = christmas.slice(0, 8).map(frontImages);
export const christmasGameImages = getGameImages(frontChristmasImages);

export const cuteAnimalImages = getGameImages(cuteAnimals.map(frontImages));

export const shuffledMinions: GamePhotoData[] = shuffle(minionGameImages);
export const shuffledChristmas: GamePhotoData[] = shuffle(christmasGameImages);
export const shuffledCuteAnimals: GamePhotoData[] = shuffle(cuteAnimalImages);
