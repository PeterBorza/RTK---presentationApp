import { createContext, ReactNode } from "react";

import { v4 as uuid } from "uuid";
import Home from "../features/Home";
import { Bubbles } from "../features/bubble-story";
import { Photos, Game } from "../features/memoryGame-story";
import { Building } from "../features/building-story";
import { UtilityContainer } from "../features/Utilities";
import { Url } from "../app/constants";

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
            to: LinkUrls.BUILDING,
            label: Url.BUILDING,
            id: uuid(),
            element: <Building />,
        },
        {
            to: LinkUrls.BUBBLES,
            label: Url.BUBBLES,
            id: uuid(),
            element: <Bubbles />,
        },
        {
            to: LinkUrls.PHOTOS,
            label: Url.PHOTOS,
            id: uuid(),
            element: <Photos />,
        },
        {
            to: LinkUrls.GAME,
            label: Url.GAME,
            id: uuid(),
            element: <Game />,
        },
    ];
    return <LinkContext.Provider value={routes}>{children}</LinkContext.Provider>;
};
