import React, { ReactNode, createContext, useContext, useMemo } from "react";

import { MyRubik } from "shared-components";
import { PagesType } from "shared-components/ScrollPage/ScrollPage";

import { Game } from "features/memoryGame-story";
import MusicGame from "features/MusicGame";
import ColorGame from "features/guess-the-colors";
import BubbleContainer from "features/bubble-story/BubbleContainer";
import ImageBox from "features/image-box";
import { Building } from "features/building-story";
import SlideContainer from "features/slide-show";
import CoinsTable from "features/coins";

export const PagesContext = createContext<PagesType<React.ReactNode>[] | null>(null);

export const PagesContextProvider = ({ children }: { children?: React.ReactNode }) => {
    const pages: NonNullable<unknown> = {
        "Music game": <MusicGame />,
        Rubik: <MyRubik withAnimation />,
        "Color game": <ColorGame />,
        "Memory game": <Game />,
        Coins: <CoinsTable />,
        Bubbles: <BubbleContainer />,
        Lift: <Building />,
        Slidehow: <SlideContainer />,
        Landscapes: <ImageBox />,
    };

    // TODO move Puzzles to PHOTOS section

    const sanitise = (label: string) => {
        const cleanString = label.trim().toLocaleLowerCase().split(" ");
        return cleanString.reduce((acc, str) => acc.concat(str), "");
    };

    const renderMyPages = useMemo(
        () =>
            Object.entries(pages).map(
                ([label, content]): PagesType<ReactNode> =>
                    ({
                        id: sanitise(label),
                        label,
                        content,
                    }) as PagesType<ReactNode>,
            ),
        [pages],
    );

    return <PagesContext.Provider value={renderMyPages}>{children}</PagesContext.Provider>;
};

export const usePagesContext = () => useContext(PagesContext);
