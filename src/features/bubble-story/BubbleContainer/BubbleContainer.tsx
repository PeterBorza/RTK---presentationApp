import React from "react";
import { useBubbleRedux } from "../selectors";
import { getBubbles, deleteBubble, postBubble } from "../thunks";
import { LinkUrls, Pending, useAppRedux } from "app";
import { BubbleMessages as msg } from "../constants";
import Bubble from "../Bubble";
import BubbleForm from "../BubbleForm";
import { Loader, Button, ButtonWrapper, AlertModal } from "shared-components";
import { clearBubbles, setError, setSelectedBubble, toggleBubbleFormModal } from "../bubbleSlice";
import { Bubble as BubbleType, BubbleCssProps } from "../types";
import { ButtonProps } from "shared-components/Button/Button";
import { bubbleValidations } from "../bubbleValidation";

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

  useOnClickOutside([errorRef], () => dispatch(setError(false)));

  const buttons: ButtonProps[] = [
    {
      onClick: () => dispatch(getBubbles(LinkUrls.BUBBLES)),
      value: msg.FETCH,
      isDisabled: isBubbles,
      displayed: !isBubbles,
    },
    {
      onClick: () => selected && dispatch(deleteBubble(selected.id)),
      value: msg.DELETE,
      isDisabled: !selected,
      displayed: isBubbles,
    },
    {
      onClick: () => dispatch(clearBubbles()),
      value: msg.CLEAR,
      isDisabled: !isBubbles,
      displayed: isBubbles,
    },
  ];

  const ManageBubbles = () => (
    <>
      {buttons.map((item, idx) => (
        <Button key={`button-${idx}`} {...item} />
      ))}
    </>
  );

  const Bubbles = () => (
    <>
      {bubbles.map(({ id, cssProps }: BubbleType) => (
        <Bubble
          key={id}
          onClick={() => dispatch(setSelectedBubble({ id, cssProps }))}
          title={msg.HOVER_TITLE}
          isSelected={selected?.id === id}
          cssProps={cssProps}
          id={id}
        />
      ))}
    </>
  );

  // TODO resolve pending issues on button state

  return (
    <div className={wrapper}>
      {isLoading && <Loader message={Pending.MESSAGE} />}
      <AlertModal ref={errorRef} openModal={error} message={message} variant="text" />

      <ButtonWrapper position="start" dark={isDarkMode}>
        <ManageBubbles />
        {isBubbles && (
          <BubbleForm
            formObject={bubbleValidations}
            isOpen={isBubbleFormModalOpen}
            openForm={() => dispatch(toggleBubbleFormModal(true))}
            closeForm={() => dispatch(toggleBubbleFormModal(false))}
            onPost={(formObject: BubbleCssProps) => dispatch(postBubble(formObject))}
          />
        )}
      </ButtonWrapper>
      <Bubbles />
    </div>
  );
};

export default BubbleContainer;
