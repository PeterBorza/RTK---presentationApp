import img1 from "images/imageData/img1.JPG";
import img2 from "images/imageData/IMG_7710.JPG";
import img3 from "images/imageData/IMG_7711.JPG";
import img4 from "images/imageData/IMG_7712.JPG";
import img5 from "images/imageData/IMG_7713.JPG";
import img6 from "images/imageData/IMG_7714.JPG";
import img7 from "images/imageData/IMG_7715.JPG";
import img8 from "images/imageData/IMG_7716.JPG";
import img9 from "images/imageData/IMG_7717.JPG";
import img10 from "images/imageData/IMG_7718.JPG";
import img11 from "images/imageData/IMG_7719.JPG";

import rd1900 from "images/rain/rain-900/rd-1-900.jpg";
import rd2900 from "images/rain/rain-900/rd-2-900.jpg";
import rd3900 from "images/rain/rain-900/rd-3-900.jpg";
import rd4900 from "images/rain/rain-900/rd-4-900.jpg";
import rd5900 from "images/rain/rain-900/rd-5-900.jpg";
import rd6900 from "images/rain/rain-900/rd-6-900.jpg";

import ls1 from "images/ls/mini-ls/ls1.jpg";
import ls2 from "images/ls/mini-ls/ls2.jpg";
import ls3 from "images/ls/mini-ls/ls3.jpg";
import ls4 from "images/ls/mini-ls/ls4.jpg";
import ls5 from "images/ls/mini-ls/ls5.jpg";
import ls6 from "images/ls/mini-ls/ls6.jpg";
import ls7 from "images/ls/mini-ls/ls7.jpg";
import ls8 from "images/ls/mini-ls/ls8.jpg";
import ls9 from "images/ls/mini-ls/ls9.jpg";
import ls10 from "images/ls/mini-ls/ls10.jpg";

import ls11 from "images/ls/x900/ls11_900.jpg";
import ls12 from "images/ls/x900/ls12_900.jpg";
import ls13 from "images/ls/x900/ls13_900.jpg";
import ls14 from "images/ls/x900/ls14_900.jpg";
import ls15 from "images/ls/x900/ls15_900.jpg";

export type ImageType = string | undefined;

export type ImageDataType = {
  id: string;
  src: ImageType;
  caption: string;
};

export const myImages: ImageType[] = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
];

export const miniLandscapes: ImageType[] = [ls1, ls2, ls3, ls4, ls5, ls6, ls7, ls8, ls9, ls10];

export const landScapes: ImageType[] = [ls11, ls12, ls13, ls14, ls15];
const textForMyImages: { [key: string]: ImageType } = {
  "Javascript Object": img1,
  "Javascript operator": img2,
  String: img3,
  "HTTP status code": img4,
  Regex: img5,
  "Command line": img6,
  "Javascript DOM": img7,
  Date: img8,
  Array: img9,
  Cron: img10,
  "Array methods": img11,
};

export const rainPhotos: ImageType[] = [rd1900, rd2900, rd3900, rd4900, rd5900, rd6900];

export const imageData = Object.entries(textForMyImages).map(
  ([key, value]) =>
    ({
      id: key,
      src: value,
      caption: key,
    }) as ImageDataType,
);
