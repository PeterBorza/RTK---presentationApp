import React from "react";
import { RouteObject, createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "app/App";
import { LinkUrls } from "context/link-context";
import Home from "features/Home";
import { Photo, Photos } from "features/memoryGame-story";
import PhotosLandingPage from "features/memoryGame-story/PhotosLandingPage";
import ScrollPageContainer from "features/scroll-pages";
import { UtilityContainer, UtilityPlatform } from "features/Utilities";
import { Url } from "app";
import { Gas } from "features/Gas";
import { Light } from "features/Light";
import { AlertModal, LoadingWrapper } from "shared-components";
import { Error } from "./constants";

export const appRoutes: RouteObject[] = [
    {
        path: LinkUrls.HOME,
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
                        path: Url.GAS,
                        element: <Gas />,
                    },
                    {
                        path: Url.LIGHT,
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
                element: <ScrollPageContainer />,
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
    return (
        <RouterProvider
            router={router}
            fallbackElement={<LoadingWrapper loading={false} loadingMessage="boom" />}
        />
    );
};
