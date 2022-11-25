import { useSelector } from "react-redux";
import { selectedBubble } from "./selectors";
import { BubbleMessages as msg } from "./constants";
import { SelectedBubble } from ".";
import { AsidePlatform } from "shared-components";
import { toggleBubbles } from "app/appSlice";
import { useAppRedux } from "app";
import BubbleContainer from "./BubbleContainer";

const BubbleWrapper = () => {
    const { isBubblesOpen, isDarkMode, dispatch } = useAppRedux();
    const selected = useSelector(selectedBubble);

    return (
        <AsidePlatform
            isOpen={isBubblesOpen}
            onClose={() => dispatch(toggleBubbles(false))}
            label={msg.TITLE}
            renderSideBar={() => (
                <SelectedBubble selectedBubble={selected} isSelected={!!selected} />
            )}
        >
            <BubbleContainer dark={isDarkMode} />
        </AsidePlatform>
    );
};

export default BubbleWrapper;
