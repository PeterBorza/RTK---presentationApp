import React from "react";
import { RouteObject, createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "app/App";
import { AlertModal, Loader } from "shared-components";
import { LinkUrls } from "app";
import { Error } from "./constants";

import Home from "features/Home";
import { Photo, Photos } from "features/memoryGame-story";
import PhotosLandingPage from "features/memoryGame-story/PhotosLandingPage";
import ScrollPage from "features/scroll-pages";
import { UtilityContainer, UtilityPlatform } from "features/Utilities";
import { Gas } from "features/Gas";
import { Light } from "features/Light";

export const appRoutes: RouteObject[] = [
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: LinkUrls.UTILITIES,
                element: <UtilityContainer />,
                children: [
                    {
                        index: true,
                        element: <UtilityPlatform />,
                    },
                    {
                        path: LinkUrls.GAS,
                        element: <Gas />,
                    },
                    {
                        path: LinkUrls.LIGHT,
                        element: <Light />,
                    },
                ],
            },
            {
                path: LinkUrls.PHOTOS,
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
            },
            {
                path: LinkUrls.SCROLL,
                element: <ScrollPage />,
            },
            {
                path: "*",
                element: <AlertModal openModal variant="text" message={Error.MESSAGE} />,
            },
        ],
    },
];

export default () => {
    const router = createBrowserRouter(appRoutes);
    return <RouterProvider router={router} fallbackElement={<Loader message="boom" />} />;
};
