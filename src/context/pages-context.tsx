import { createContext, useContext } from "react";

import { MyRubik } from "shared-components";

import { Game } from "features/memoryGame-story";
import { PagesType } from "shared-components/ScrollPage/ScrollPage";
import InputExamples from "features/InputExamples";
import ColorGame from "features/guess-the-colors";
import BubbleContainer from "features/bubble-story/BubbleContainer";
import ImageBox from "features/image-box";
import { Building } from "features/building-story";
import SlideContainer from "features/slide-show";

export const PagesContext = createContext<PagesType<JSX.Element>[] | null>(null);

export const PagesContextProvider: React.FC = ({ children }) => {
    const myPages: PagesType<JSX.Element>[] = [
        {
            id: "inputs",
            label: "Input Examples",
            content: <InputExamples />,
        },
        {
            id: "rubik",
            label: "Rubik",
            content: <MyRubik withAnimation />,
        },
        {
            id: "color-game",
            label: "Color Game",
            content: <ColorGame />,
        },
        {
            id: "memory-game",
            label: "Memory Game",
            content: <Game />,
        },
        {
            id: "bubbles",
            label: "Bubbles",
            content: <BubbleContainer />,
        },
        {
            id: "lift",
            label: "Lift",
            content: <Building />,
        },
        {
            id: "slide",
            label: "SlideShow",
            content: <SlideContainer />,
        },
        {
            id: "images",
            label: "Images",
            content: <ImageBox />,
        },
    ];
    return <PagesContext.Provider value={myPages}>{children}</PagesContext.Provider>;
};

export const usePagesContext = () => useContext(PagesContext);
