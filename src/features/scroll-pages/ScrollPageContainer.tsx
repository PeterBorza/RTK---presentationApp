import { FloatingImage, MyRubik, ScrollPage } from "../../shared-components";
import { PagesType } from "../../shared-components/ScrollPage/ScrollPage";
import BubbleContainer from "../bubble-story/BubbleContainer";
import { Building } from "../building-story";
import InputExamples from "../InputExamples";
import { Game } from "../memoryGame-story";
import SlideContainer from "../slide-show/SlideContainer";
import ImageBox from "../image-box";
import city900 from "../../images/city900.jpg";
import { darkModeSelector } from "../../app";
import { useSelector } from "react-redux";

const ScrollPageContainer = () => {
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
    return <ScrollPage pages={myPages} />;
};

export default ScrollPageContainer;
