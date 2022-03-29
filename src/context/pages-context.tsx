import { createContext, ReactNode } from "react";

import { Game } from "../features/memoryGame-story";
import city900 from "../images/city900.jpg";
import { PagesType } from "../shared-components/ScrollPage/ScrollPage";
import InputExamples from "../features/InputExamples";
import { FloatingImage, MyRubik } from "../shared-components";
import BubbleContainer from "../features/bubble-story/BubbleContainer";
import ImageBox from "../features/image-box";
import { Building } from "../features/building-story";
import SlideContainer from "../features/slide-show/SlideContainer";
import { useSelector } from "react-redux";
import { darkModeSelector } from "../app";

interface PagesProviderProps {
    children: ReactNode;
}

export const PagesContext = createContext<PagesType<JSX.Element>[] | null>(null);

export const PagesContextProvider = ({ children }: PagesProviderProps) => {
    const darkMode = useSelector(darkModeSelector);

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
            id: "game",
            label: "Memory Game",
            content: <Game />,
        },
        {
            id: "bubbles",
            label: "Bubbles",
            content: <BubbleContainer dark={darkMode} />,
        },
        {
            id: "lift",
            label: "Lift",
            content: (
                <FloatingImage src={city900}>
                    <Building />
                </FloatingImage>
            ),
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