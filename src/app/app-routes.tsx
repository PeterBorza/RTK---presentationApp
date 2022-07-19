import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "app/App";
import { LinkUrls } from "context/link-context";
import Home from "../features/Home";
import { Photo, Photos } from "features/memoryGame-story";
import PhotosLandingPage from "features/memoryGame-story/PhotosLandingPage";
import ScrollPageContainer from "features/scroll-pages";
import { UtilityContainer, UtilityPlatform } from "features/Utilities";
import { Url } from "app";
import { Gas } from "features/Gas";
import { Light } from "features/Light";
import ErrorMessage from "shared-components/ErrorMessage";
import { v4 as uuid } from "uuid";

interface AppRouteType {
    path?: string;
    element: React.ReactNode;
    index?: boolean;
    nestedRoutes?: AppRouteType[];
    isFunctional: boolean;
    id: string;
    to?: string;
    label?: string;
}

export const appRoutes: AppRouteType = {
    path: LinkUrls.HOME,
    element: <App />,
    id: uuid(),
    isFunctional: true,
    nestedRoutes: [
        {
            path: "/",
            index: true,
            element: <Home />,
            isFunctional: true,
            to: LinkUrls.HOME,
            label: Url.HOME,
            id: uuid(),
        },
        {
            path: LinkUrls.UTILITIES,
            element: <UtilityContainer />,
            to: LinkUrls.UTILITIES,
            label: Url.UTILITIES,
            nestedRoutes: [
                {
                    index: true,
                    element: <UtilityPlatform />,
                    isFunctional: true,
                    id: uuid(),
                },
                {
                    path: Url.GAS,
                    element: <Gas />,
                    isFunctional: true,
                    id: uuid(),
                },
                {
                    path: Url.LIGHT,
                    element: <Light />,
                    isFunctional: true,
                    id: uuid(),
                },
            ],
            isFunctional: true,
            id: uuid(),
        },
        {
            path: LinkUrls.PHOTOS,
            element: <Photos />,
            to: LinkUrls.PHOTOS,
            label: Url.PHOTOS,
            nestedRoutes: [
                {
                    index: true,
                    element: <PhotosLandingPage />,
                    isFunctional: true,
                    id: uuid(),
                },
                {
                    path: ":id",
                    element: <Photo />,
                    isFunctional: true,
                    id: uuid(),
                },
            ],
            isFunctional: true,
            id: uuid(),
        },
        {
            path: LinkUrls.SCROLL,
            element: <ScrollPageContainer />,
            isFunctional: true,
            to: LinkUrls.SCROLL,
            label: Url.SCROLL,
            id: uuid(),
        },
        {
            path: "*",
            element: <ErrorMessage isError={true} message="error in URL" />,
            isFunctional: true,
            id: uuid(),
        },
    ],
};

const renderRoutes = ({ id, index, path, element, nestedRoutes, isFunctional }: AppRouteType) =>
    isFunctional && (
        <Route key={id} path={path} index={index} element={element}>
            {nestedRoutes?.map(renderRoutes)}
        </Route>
    );

const AppRoutes = () => <Routes>{renderRoutes(appRoutes)}</Routes>;

export default AppRoutes;
