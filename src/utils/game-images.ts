import santa from "../images/Santa0.png";
import butterfly from "../images/bf0.png";
import tree from "../images/christmas_tree.png";
import snowFlake from "../images/Snowflake.png";
import ribbon from "../images/ribbon.png";
import snowman from "../images/snowman.png";
import gift from "../images/gift.png";
import rudolf from "../images/rudolf.png";
import candy from "../images/candy.png";
import bell from "../images/bell.png";
import snowman01 from "../images/snowman01.png";
import globe from "../images/globe.png";
import star from "../images/star.png";
import hat from "../images/hat.png";
import sledge from "../images/sledge.png";
import merryChristmas from "../images/merryChristmas.png";
import wreath from "../images/wreath.png";

import { GamePhotoData } from "../components/memoryGame-story";

const generateId = (): string => {
	return Math.random().toString(36).substr(2, 9);
};

export const gameImages: GamePhotoData[] = [
	{
		id: generateId(),
		frontSrc: {
			backGround: "rgb(9, 77, 9)",
			src: santa,
			gameId: 100,
		},
		backSrc: {
			backGround: "rgba(226, 235, 226, 0.719)",
			src: merryChristmas,
		},
		isFlipped: false,
	},
	{
		id: generateId(),
		frontSrc: {
			backGround: "rgb(9, 77, 9)",
			src: ribbon,
			gameId: 101,
		},
		backSrc: {
			backGround: "rgba(226, 235, 226, 0.719)",
			src: merryChristmas,
		},
		isFlipped: false,
	},
	{
		id: generateId(),
		frontSrc: {
			backGround: "rgb(9, 77, 9)",
			src: butterfly,
			gameId: 102,
		},
		backSrc: {
			backGround: "rgba(226, 235, 226, 0.719)",
			src: merryChristmas,
		},
		isFlipped: false,
	},
	{
		id: generateId(),
		frontSrc: {
			backGround: "rgb(9, 77, 9)",
			src: snowFlake,
			gameId: 103,
		},
		backSrc: {
			backGround: "rgba(226, 235, 226, 0.719)",
			src: merryChristmas,
		},
		isFlipped: false,
	},
	{
		id: generateId(),
		frontSrc: {
			backGround: "rgb(9, 77, 9)",
			src: tree,
			gameId: 104,
		},
		backSrc: {
			backGround: "rgba(226, 235, 226, 0.719)",
			src: merryChristmas,
		},
		isFlipped: false,
	},
	{
		id: generateId(),
		frontSrc: {
			backGround: "rgb(9, 77, 9)",
			src: snowman,
			gameId: 105,
		},
		backSrc: {
			backGround: "rgba(226, 235, 226, 0.719)",
			src: merryChristmas,
		},
		isFlipped: false,
	},
	{
		id: generateId(),
		frontSrc: {
			backGround: "rgb(9, 77, 9)",
			src: gift,
			gameId: 106,
		},
		backSrc: {
			backGround: "rgba(226, 235, 226, 0.719)",
			src: merryChristmas,
		},
		isFlipped: false,
	},
	{
		id: generateId(),
		frontSrc: {
			backGround: "rgb(9, 77, 9)",
			src: rudolf,
			gameId: 107,
		},
		backSrc: {
			backGround: "rgba(226, 235, 226, 0.719)",
			src: merryChristmas,
		},
		isFlipped: false,
	},
	{
		id: generateId(),
		frontSrc: {
			backGround: "rgb(9, 77, 9)",
			src: candy,
			gameId: 108,
		},
		backSrc: {
			backGround: "rgba(226, 235, 226, 0.719)",
			src: merryChristmas,
		},
		isFlipped: false,
	},
	{
		id: generateId(),
		frontSrc: {
			backGround: "rgb(9, 77, 9)",
			src: bell,
			gameId: 109,
		},
		backSrc: {
			backGround: "rgba(226, 235, 226, 0.719)",
			src: merryChristmas,
		},
		isFlipped: false,
	},
	{
		id: generateId(),
		frontSrc: {
			backGround: "rgb(9, 77, 9)",
			src: snowman01,
			gameId: 110,
		},
		backSrc: {
			backGround: "rgba(226, 235, 226, 0.719)",
			src: merryChristmas,
		},
		isFlipped: false,
	},
	{
		id: generateId(),
		frontSrc: {
			backGround: "rgb(9, 77, 9)",
			src: globe,
			gameId: 111,
		},
		backSrc: {
			backGround: "rgba(226, 235, 226, 0.719)",
			src: merryChristmas,
		},
		isFlipped: false,
	},
	{
		id: generateId(),
		frontSrc: {
			backGround: "rgb(9, 77, 9)",
			src: star,
			gameId: 112,
		},
		backSrc: {
			backGround: "rgba(226, 235, 226, 0.719)",
			src: merryChristmas,
		},
		isFlipped: false,
	},
	{
		id: generateId(),
		frontSrc: {
			backGround: "rgb(9, 77, 9)",
			src: hat,
			gameId: 113,
		},
		backSrc: {
			backGround: "rgba(226, 235, 226, 0.719)",
			src: merryChristmas,
		},
		isFlipped: false,
	},
	{
		id: generateId(),
		frontSrc: {
			backGround: "rgb(9, 77, 9)",
			src: sledge,
			gameId: 114,
		},
		backSrc: {
			backGround: "rgba(226, 235, 226, 0.719)",
			src: merryChristmas,
		},
		isFlipped: false,
	},
	{
		id: generateId(),
		frontSrc: {
			backGround: "rgb(9, 77, 9)",
			src: wreath,
			gameId: 115,
		},
		backSrc: {
			backGround: "rgba(226, 235, 226, 0.719)",
			src: merryChristmas,
		},
		isFlipped: false,
	},
];
