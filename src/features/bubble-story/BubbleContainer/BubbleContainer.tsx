import React from "react";
import { useBubbleRedux } from "../selectors";
import { getBubbles, deleteBubble, postBubble } from "../thunks";
import { LinkUrls, Pending, useAppRedux } from "app";
import { BubbleMessages as msg } from "../constants";
import Bubble from "../Bubble";
import BubbleForm from "../BubbleForm";
import { Loader, Button, ButtonWrapper, AlertModal } from "shared-components";
import { setError, setSelectedBubble, toggleBubbleFormModal } from "../bubbleSlice";
import { Bubble as BubbleType, BubbleCssProps } from "../types";
import { starterBubble } from "../state";
import { ButtonProps } from "shared-components/Button/Button";

import classNames from "classnames";
import styles from "./BubbleContainer.module.scss";
import { useOnClickOutside } from "hooks";

const BubbleContainer = () => {
    const {
        bubbles: { bubbles },
        selectedBubble: selected,
        pendingBubbles: { isLoading },
        bubbleError: { message, error },
        isBubbleFormModalOpen,
        dispatch,
    } = useBubbleRedux();
    const { isDarkMode } = useAppRedux();
    const errorRef = React.useRef<HTMLDivElement | null>(null);

    const isBubbles = bubbles.length !== 0;

    const wrapper = classNames(styles.container, {
        [styles.container__dark]: isDarkMode,
    });

    useOnClickOutside(errorRef, () => dispatch(setError(false)));

    const buttons: ButtonProps[] = [
        {
            onClick: () => dispatch(getBubbles(LinkUrls.BUBBLES)),
            value: isLoading ? <Loader dots={5} /> : msg.FETCH,
            isDisabled: isBubbles,
            displayed: !isBubbles,
        },
        {
            onClick: () => selected && dispatch(deleteBubble(selected.id)),
            value: msg.DELETE,
            isDisabled: !selected,
            displayed: isBubbles,
        },
    ];

    const getButtons = buttons.map((item, idx) => (
        <Button
            key={`button-${idx}`}
            onClick={item.onClick}
            value={item.value}
            isDisabled={item.isDisabled}
            displayed={item.displayed}
        />
    ));

    const renderButtons = () => (
        <span className={styles.buttons}>
            {getButtons}
            {isBubbles && (
                <BubbleForm
                    formObject={starterBubble}
                    isOpen={isBubbleFormModalOpen}
                    openForm={() => dispatch(toggleBubbleFormModal(true))}
                    closeForm={() => dispatch(toggleBubbleFormModal(false))}
                    onPost={(formObject: BubbleCssProps) => dispatch(postBubble(formObject))}
                />
            )}
        </span>
    );

    const renderBubbles = ({ id, cssProps }: BubbleType) => (
        <Bubble
            key={id}
            onClick={() => dispatch(setSelectedBubble({ id, cssProps }))}
            title={msg.HOVER_TITLE}
            isSelected={selected?.id === id}
            cssProps={cssProps}
            id={id}
        />
    );

    return (
        <div className={wrapper}>
            {isLoading && <Loader message={Pending.MESSAGE} />}
            <AlertModal ref={errorRef} openModal={error} message={message} variant="text" />

            <ButtonWrapper dark={isDarkMode}>{renderButtons()}</ButtonWrapper>
            {bubbles.map(renderBubbles)}
        </div>
    );
};

export default BubbleContainer;
