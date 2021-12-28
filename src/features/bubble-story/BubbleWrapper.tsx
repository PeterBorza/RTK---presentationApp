import { useDispatch, useSelector } from "react-redux";
import { selectedBubble } from "./selectors";
import { BubbleMessages as msg } from "./constants";
import { SelectedBubble } from ".";
import { AsidePlatform } from "../../shared-components";
import { resetSelectedBubble } from "./bubbleSlice";
import { toggleBubbles } from "../../app/appSlice";
import { bubblesOpenSelector } from "../../app/selectors";
import { useRef } from "react";
import { useOnClickOutside } from "../../hooks";
import BubbleContainer from "./BubbleContainer";

const BubbleWrapper: React.FC = () => {
    const openSideBar = useSelector(bubblesOpenSelector);
    const selected = useSelector(selectedBubble);
    const dispatch = useDispatch();
    const bubbleRef = useRef(null);
    useOnClickOutside(bubbleRef, () => dispatch(resetSelectedBubble()));

    return (
        <AsidePlatform
            isOpen={openSideBar}
            onClose={() => dispatch(toggleBubbles(false))}
            label={msg.TITLE}
            renderSideBar={() => (
                <SelectedBubble
                    selectedBubble={selected}
                    isSelected={!!selected}
                />
            )}
        >
            <BubbleContainer />
        </AsidePlatform>
    );
};

export default BubbleWrapper;
