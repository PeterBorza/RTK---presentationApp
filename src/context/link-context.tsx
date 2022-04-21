import { createContext, ReactNode } from "react";

import { v4 as uuid } from "uuid";
import Home from "features/Home";
import { Photos } from "features/memoryGame-story";
import { UtilityContainer } from "features/Utilities";
import { Url } from "app/constants";
import ScrollPageContainer from "features/scroll-pages";

interface LinkProviderProps {
    children: ReactNode;
}

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

interface ProviderProps {
    to: LinkUrls;
    label: string;
    id: string;
    element: ReactNode;
}

export const LinkContext = createContext<ProviderProps[] | null>(null);

export const LinkContextProvider = ({ children }: LinkProviderProps) => {
    const routes: ProviderProps[] = [
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
    return <LinkContext.Provider value={routes}>{children}</LinkContext.Provider>;
};
