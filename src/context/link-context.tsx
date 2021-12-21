import React, { createContext, ReactNode } from "react";

import { v4 as uuid } from "uuid";
import Home from "../features/Home";
import { Bubbles } from "../features/bubble-story";
import { Photos, Game } from "../features/memoryGame-story";
import { Building } from "../features/building-story";
import { UtilityContainer } from "../features/Utilities";
import { Url } from "../app/constants";

interface LinkProps {
    children: React.ReactNode;
}

interface ProviderProps {
    to: string;
    label: string;
    id: string;
    element: ReactNode;
}

export const LinkContext = createContext<ProviderProps[] | null>(null);

export const LinkContextProvider = ({ children }: LinkProps) => {
    const routes: ProviderProps[] = [
        {
            to: "/",
            label: Url.HOME,
            id: uuid(),
            element: <Home />,
        },
        {
            to: "utilities",
            label: Url.UTILITIES,
            id: uuid(),
            element: <UtilityContainer />,
        },
        {
            to: "building",
            label: Url.BUILDING,
            id: uuid(),
            element: <Building />,
        },
        {
            to: "bubbles",
            label: Url.BUBBLES,
            id: uuid(),
            element: <Bubbles />,
        },
        {
            to: "photos",
            label: Url.PHOTOS,
            id: uuid(),
            element: <Photos />,
        },
        {
            to: "game",
            label: Url.GAME,
            id: uuid(),
            element: <Game />,
        },
    ];
    return (
        <LinkContext.Provider value={routes}>{children}</LinkContext.Provider>
    );
};
