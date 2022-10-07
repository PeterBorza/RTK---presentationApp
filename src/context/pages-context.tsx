import { createContext } from "react";
import { useSelector } from "react-redux";

import { Game } from "features/memoryGame-story";
import city900 from "images/city900.jpg";
import { PagesType } from "shared-components/ScrollPage/ScrollPage";
import InputExamples from "features/InputExamples";
import { FloatingImage, MyRubik } from "shared-components";
import ColorGame from "features/guess-the-colors";
import BubbleContainer from "features/bubble-story/BubbleContainer";
import ImageBox from "features/image-box";
import { Building } from "features/building-story";
import SlideContainer from "features/slide-show/SlideContainer";
import { darkModeSelector } from "app";

export const PagesContext = createContext<PagesType<JSX.Element>[] | null>(null);

export const PagesContextProvider: React.FC = ({ children }) => {
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
