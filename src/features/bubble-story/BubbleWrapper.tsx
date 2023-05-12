import { useSelector } from "react-redux";

import { useAppRedux } from "app";
import { AsidePlatform } from "shared-components";

import { selectedBubble } from "./selectors";
import { BubbleMessages as msg } from "./constants";
import { SelectedBubble } from ".";
import BubbleContainer from "./BubbleContainer";

//TODO clean up here, since we do not use this anymore

const BubbleWrapper = () => {
    const { isBubblesOpen } = useAppRedux();
    const selected = useSelector(selectedBubble);

    return (
        <AsidePlatform
            isOpen={isBubblesOpen}
            label={msg.TITLE}
            renderSideBar={() => <SelectedBubble selectedBubble={selected} />}
            onClose={() => console.log("not used")}
        >
            <BubbleContainer />
        </AsidePlatform>
    );
};

export default BubbleWrapper;
