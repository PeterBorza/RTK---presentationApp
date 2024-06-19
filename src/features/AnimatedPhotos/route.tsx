import { RouteObject } from "react-router-dom";

import Photos, { Photo } from "./Photos";
import PhotosLandingPage from "./PhotosLandingPage";

export const photosRoute = <T extends string>(path: T): RouteObject => ({
    path,
    element: <Photos />,
    children: [
        {
            index: true,
            element: <PhotosLandingPage />,
        },
        {
            path: ":id",
            element: <Photo />,
        },
    ],
});
