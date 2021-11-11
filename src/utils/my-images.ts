import img1 from "../images/img1.JPG";
import img2 from "../images/IMG_7710.JPG";
import img3 from "../images/IMG_7711.JPG";
import img4 from "../images/IMG_7712.JPG";
import img5 from "../images/IMG_7713.JPG";
import img6 from "../images/IMG_7714.JPG";
import img7 from "../images/IMG_7715.JPG";
import img8 from "../images/IMG_7716.JPG";
import img9 from "../images/IMG_7717.JPG";
import img10 from "../images/IMG_7718.JPG";
import img11 from "../images/IMG_7719.JPG";

export const myImages = () => {
	return [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11];
};

const generateId = (): string => {
	return Math.random().toString(36).substr(2, 9);
};

export const imageData = () => {
	return [
		{
			id: generateId(),
			src: img1,
			caption: "Javascript object",
		},
		{
			id: generateId(),
			src: img2,
			caption: "Javascript operator",
		},
		{
			id: generateId(),
			src: img3,
			caption: "String",
		},
		{
			id: generateId(),
			src: img4,
			caption: "HTTP status code",
		},
		{
			id: generateId(),
			src: img5,
			caption: "regex",
		},
		{
			id: generateId(),
			src: img6,
			caption: "Command line",
		},
		{
			id: generateId(),
			src: img7,
			caption: "Javascript DOM",
		},
		{
			id: generateId(),
			src: img8,
			caption: "Date",
		},
		{
			id: generateId(),
			src: img9,
			caption: "Array",
		},
		{
			id: generateId(),
			src: img10,
			caption: "Cron",
		},
		{
			id: generateId(),
			src: img11,
			caption: "Array methods",
		},
	];
};
