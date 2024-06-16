import { rainPhotos } from "utils";

import { CustomImageType } from "shared-components/CustomImage/CustomImage";

export const landingPages: CustomImageType[] = [
    {
        src: rainPhotos[0],
        delay: 100,
        duration: 3000,
        spacing: 100,
        direction: "fromLeft",
    },
    {
        src: rainPhotos[1],
        delay: 1800,
        duration: 3500,
        spacing: 300,
        direction: "fromRight",
    },
    {
        src: rainPhotos[2],
        delay: 3500,
        duration: 3500,
        spacing: 200,
        direction: "up",
    },
    {
        src: rainPhotos[3],
        delay: 5000,
        duration: 2000,
        spacing: 200,
        direction: "down",
    },
];
