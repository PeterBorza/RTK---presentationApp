import { createContext, useContext } from "react";

import { MyRubik } from "shared-components";
import { PagesType } from "shared-components/ScrollPage/ScrollPage";

import { Game } from "features/memoryGame-story";
import InputExamples from "features/InputExamples";
import ColorGame from "features/guess-the-colors";
import BubbleContainer from "features/bubble-story/BubbleContainer";
import ImageBox from "features/image-box";
import { Building } from "features/building-story";
import SlideContainer from "features/slide-show";
import CoinsTable from "features/coins";

export const PagesContext = createContext<PagesType<JSX.Element>[] | null>(null);

export const PagesContextProvider: React.FC = ({ children }) => {
    const pages: {} = {
        "Input Examples": <InputExamples />,
        Rubik: <MyRubik withAnimation />,
        "Color game": <ColorGame />,
        "Memory game": <Game />,
        Coins: <CoinsTable />,
        Bubbles: <BubbleContainer />,
        Lift: <Building />,
        Slidehow: <SlideContainer />,
        Puzzles: <ImageBox />,
    };

    const sanitise = (label: string) => {
        const cleanString = label.trim().toLocaleLowerCase().split(" ");
        return cleanString.reduce((acc, str) => acc.concat(str), "");
    };

    const renderMyPages = Object.entries(pages).map(
        ([label, content]) =>
            ({
                id: sanitise(label),
                label: label,
                content,
            } as PagesType<JSX.Element>),
    );

    return <PagesContext.Provider value={renderMyPages}>{children}</PagesContext.Provider>;
};

export const usePagesContext = () => useContext(PagesContext);
