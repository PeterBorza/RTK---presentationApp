import { useDispatch, useSelector } from "react-redux";
import { selectedBubble } from "./selectors";
import { BubbleMessages as msg } from "./constants";
import { SelectedBubble } from ".";
import { AsidePlatform } from "../../shared-components";
import { toggleBubbles } from "../../app/appSlice";
import { bubblesOpenSelector, darkModeSelector } from "../../app/selectors";
import BubbleContainer from "./BubbleContainer";

const BubbleWrapper = () => {
    const openSideBar = useSelector(bubblesOpenSelector);
    const darkMode = useSelector(darkModeSelector);
    const selected = useSelector(selectedBubble);
    const dispatch = useDispatch();

    return (
        <AsidePlatform
            isOpen={openSideBar}
            onClose={() => dispatch(toggleBubbles(false))}
            label={msg.TITLE}
            renderSideBar={() => (
                <SelectedBubble selectedBubble={selected} isSelected={!!selected} />
            )}
        >
            <BubbleContainer dark={darkMode} />
        </AsidePlatform>
    );
};

export default BubbleWrapper;
