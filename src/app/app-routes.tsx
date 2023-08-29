import React from "react";
import { RouteObject, createBrowserRouter, RouterProvider } from "react-router-dom";

import { App, LinkUrls, Error, NavLinkUrls } from "app";
import { AlertModal, Loader } from "shared-components";

import Home from "features/Home";
import { Photo, Photos } from "features/memoryGame-story";
import PhotosLandingPage from "features/memoryGame-story/PhotosLandingPage";
import ScrollPage from "features/scroll-pages";
import ScrollTester from "features/tester-pages";
import { UtilityContainer, UtilityPlatform } from "features/Utilities";
import { Gas } from "features/Gas";
import { Light } from "features/Light";
import DragContainer from "features/drag-api/DragContainer";

const appRoutes: RouteObject[] = [
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: NavLinkUrls.UTILITIES,
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
                path: NavLinkUrls.PHOTOS,
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
                path: NavLinkUrls.FEATURES,
                element: <ScrollPage />,
            },
            {
                path: NavLinkUrls.TESTER,
                element: <ScrollTester />,
            },
            {
                path: NavLinkUrls.DRAG,
                element: <DragContainer />,
            },
            {
                path: "*",
                element: <AlertModal openModal variant="text" message={Error.MESSAGE} />,
            },
        ],
    },
];

const AppRoutes = () => {
    const router = createBrowserRouter(appRoutes);
    return <RouterProvider router={router} fallbackElement={<Loader message="boom" />} />;
};

export default AppRoutes;
