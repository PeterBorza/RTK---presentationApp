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

import { GamePhotoData } from "../memoryGame-story";
import { v4 as uuid } from "uuid";
import { shuffle } from "../../utils";

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

export const shuffledImages = shuffle(gameImagesSlice);
