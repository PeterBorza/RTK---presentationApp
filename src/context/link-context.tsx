import React, { createContext, useMemo } from "react";

import { v4 as uuid } from "uuid";
import Home from "features/Home";
import { Photos } from "features/memoryGame-story";
import { UtilityContainer } from "features/Utilities";
import { Url } from "app/constants";
import ScrollPageContainer from "features/scroll-pages";

export enum LinkUrls {
    HOME = "/",
    UTILITIES = "utilities",
    BUILDING = "building",
    BUBBLES = "bubbles",
    PHOTOS = "photos",
    GAME = "game",
    RUBIK = "rubik",
    SCROLL = "scroll",
}

export interface IProviderProps {
    to: LinkUrls;
    label: string;
    id: string;
    element: React.ReactNode;
}

export const LinkContext = createContext<IProviderProps[]>([]);

export const LinkContextProvider: React.FC = ({ children }) => {
    const context = useMemo(() => {
        const initialLinkContext: IProviderProps[] = [
            {
                to: LinkUrls.HOME,
                label: Url.HOME,
                id: uuid(),
                element: <Home />,
            },
            {
                to: LinkUrls.UTILITIES,
                label: Url.UTILITIES,
                id: uuid(),
                element: <UtilityContainer />,
            },
            {
                to: LinkUrls.PHOTOS,
                label: Url.PHOTOS,
                id: uuid(),
                element: <Photos />,
            },
            {
                to: LinkUrls.SCROLL,
                label: Url.SCROLL,
                id: uuid(),
                element: <ScrollPageContainer />,
            },
        ];
        return initialLinkContext;
    }, []);

    return <LinkContext.Provider value={context}>{children}</LinkContext.Provider>;
};
