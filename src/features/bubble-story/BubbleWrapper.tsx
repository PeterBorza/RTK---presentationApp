import { useSelector } from "react-redux";
import { selectedBubble } from "./selectors";
import { BubbleMessages as msg } from "./constants";
import { SelectedBubble } from ".";
import { AsidePlatform } from "shared-components";
import { useAppRedux } from "app";
import BubbleContainer from "./BubbleContainer";

//TODO clean up here, since we do not use this anymore

const BubbleWrapper = () => {
    const { isBubblesOpen, isDarkMode, dispatch } = useAppRedux();
    const selected = useSelector(selectedBubble);

    return (
        <AsidePlatform
            isOpen={isBubblesOpen}
            onClose={() => console.log("Not used")}
            label={msg.TITLE}
            renderSideBar={() => <SelectedBubble selectedBubble={selected} />}
        >
            <BubbleContainer dark={isDarkMode} />
        </AsidePlatform>
    );
};

export default BubbleWrapper;
