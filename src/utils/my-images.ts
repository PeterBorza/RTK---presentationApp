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

import rd1900 from "../images/rd-1-900.jpg";
import rd2900 from "../images/rd-2-900.jpg";
import rd3900 from "../images/rd-3-900.jpg";
import rd4900 from "../images/rd-4-900.jpg";
import rd5900 from "../images/rd-5-900.jpg";
import rd6900 from "../images/rd-6-900.jpg";

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

export const imageData = Object.entries(textForMyImages).map(([key, value]) => {
    return {
        id: key,
        src: value,
        caption: key,
    } as unknown as ImageDataType;
});
