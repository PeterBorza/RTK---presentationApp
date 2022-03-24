import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    bubbleModalFormSelector,
    bubbleState,
    errorState,
    pendingState,
    selectedBubble,
} from "../selectors";
import { getBubbles, deleteBubble, postBubble } from "../thunks";
import { Url, Pending } from "../../../app";
import { BubbleMessages as msg } from "../constants";
import Bubble from "../Bubble";
import BubbleForm from "../BubbleForm";
import { Loader, Button, Error, ButtonWrapper, LoadingWrapper } from "../../../shared-components";
import { selectBubble, toggleBubbleFormModal } from "../bubbleSlice";
import { toggleBubbles } from "../../../app/appSlice";
import { Bubble as BubbleType, BubbleCssProps } from "../types";
import { starterBubble } from "../state";
import { ButtonProps } from "../../../shared-components/Button/Button";

import classNames from "classnames";
import styles from "./BubbleContainer.module.scss";

const BubbleContainer = ({ dark = false }: { dark?: boolean }) => {
    const isFormOpen = useSelector(bubbleModalFormSelector);
    const { bubbles } = useSelector(bubbleState);
    const selected = useSelector(selectedBubble);
    const { isLoading } = useSelector(pendingState);
    const error = useSelector(errorState);
    const dispatch = useDispatch();

    const isBubbles = bubbles.length !== 0;

    const wrapper = classNames(styles.container, {
        [styles.container__dark]: dark,
    });

    const handleBubbleClick = (id: number) => {
        dispatch(selectBubble(id));
        dispatch(toggleBubbles(true));
    };

    const buttons: ButtonProps[] = [
        {
            onClick: () => !isBubbles && dispatch(getBubbles(Url.BUBBLES)),
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

    const renderButtons = () => {
        return (
            <span className={styles.buttons}>
                {getButtons}
                {isBubbles && (
                    <BubbleForm
                        formObject={starterBubble}
                        isOpen={isFormOpen}
                        onToggleForm={(open: boolean) => dispatch(toggleBubbleFormModal(open))}
                        onPost={(formObject: BubbleCssProps) => dispatch(postBubble(formObject))}
                    />
                )}
            </span>
        );
    };

    const renderBubbles = ({ id, selected, cssProps }: BubbleType) => (
        <Bubble
            key={id}
            onClick={() => handleBubbleClick(id)}
            title={msg.HOVER_TITLE}
            selected={selected}
            cssProps={cssProps}
            id={id}
        />
    );

    return (
        <>
            <div className={wrapper}>
                <LoadingWrapper loading={isLoading} loadingMessage={Pending.MESSAGE} />
                <Error message={error.message} isError={error.error} />
                <ButtonWrapper renderButtons={renderButtons} dark={dark} />
                {bubbles.map(renderBubbles)}
            </div>
        </>
    );
};

export default BubbleContainer;
