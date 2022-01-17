import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import {
    bubbleState,
    errorState,
    pendingState,
    selectedBubble,
} from "../selectors";
import { getBubbles, deleteBubble } from "../thunks";
import { Url } from "../../../app/constants";
import { BubbleMessages as msg } from "../constants";
import Bubble from "../Bubble";
import BubbleForm from "../BubbleForm";
import {
    Loader,
    Button,
    Error,
    ButtonWrapper,
    LoadingWrapper,
} from "../../../shared-components";
import { selectBubble } from "../bubbleSlice";
import { toggleBubbles } from "../../../app/appSlice";
import { bubblesOpenSelector, darkModeSelector } from "../../../app/selectors";
import { FC, useRef } from "react";

import classNames from "classnames";
import styles from "./BubbleContainer.module.scss";

const BubbleContainer: FC<{ dark?: boolean }> = ({ dark = false }) => {
    const { bubbles } = useSelector(bubbleState);
    const openSideBar = useSelector(bubblesOpenSelector);
    const selected = useSelector(selectedBubble);
    const { isLoading } = useSelector(pendingState);
    const error = useSelector(errorState);
    const darkMode = useSelector(darkModeSelector);
    const dispatch = useDispatch();
    const bubbleRef = useRef(null);

    const isBubbles = bubbles.length !== 0;

    const wrapper = classNames(styles.container, {
        [styles.container__dark]: dark,
    });

    const buttons = [
        {
            id: uuid(),
            onClick: () => dispatch(toggleBubbles(!openSideBar)),
            value: msg.MENU,
            isDisabled: !isBubbles,
            displayed: !openSideBar && isBubbles,
        },
        {
            id: uuid(),
            onClick: () => !isBubbles && dispatch(getBubbles(Url.BUBBLES)),
            value: isLoading ? <Loader dots={5} /> : msg.FETCH,
            isDisabled: isBubbles,
            displayed: !isBubbles,
        },
        {
            id: uuid(),
            onClick: () => selected && dispatch(deleteBubble(selected.id)),
            value: msg.DELETE,
            isDisabled: !selected,
            displayed: isBubbles,
        },
    ];

    const getButtons = buttons.map(item => (
        <Button
            key={item.id}
            onClick={item.onClick}
            value={item.value}
            isDisabled={item.isDisabled}
            displayed={item.displayed}
        />
    ));

    const renderButtons = () => {
        return (
            <>
                {getButtons}
                {isBubbles && <BubbleForm />}
            </>
        );
    };

    const handleBubbleClick = (id: number) => {
        dispatch(selectBubble(id));
        dispatch(toggleBubbles(true));
    };

    return isLoading ? (
        <LoadingWrapper loading={isLoading} />
    ) : (
        <div className={wrapper}>
            <ButtonWrapper renderButtons={renderButtons} dark={darkMode} />
            {error.error ? (
                <Error message={error.message} />
            ) : (
                bubbles.map(({ id, selected, cssProps }) => (
                    <Bubble
                        key={id}
                        onClick={() => handleBubbleClick(id)}
                        title={msg.HOVER_TITLE}
                        selected={selected}
                        cssProps={cssProps}
                        id={id}
                        ref={bubbleRef}
                    />
                ))
            )}
        </div>
    );
};

export default BubbleContainer;
