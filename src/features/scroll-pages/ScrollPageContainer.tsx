import React from "react";

import { FloatingImage, Rubik, ScrollPage } from "../../shared-components";
import { PagesType } from "../../shared-components/ScrollPage/ScrollPage";
import BubbleContainer from "../bubble-story/BubbleContainer";
import { Building } from "../building-story";
import InputExamples from "../InputExamples";
import { Game } from "../memoryGame-story";
import SlideContainer from "../slide-show/SlideContainer";
import city900 from "../../images/city900.jpg";

const ScrollPageContainer = () => {
    const myPages: PagesType[] = [
        {
            id: "inputs",
            label: "Input Examples",
            content: <InputExamples />,
        },
        {
            id: "rubik",
            label: "Rubik",
            content: <Rubik withAnimation />,
        },
        {
            id: "game",
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
    ];
    return <ScrollPage pages={myPages} />;
};

export default ScrollPageContainer;
