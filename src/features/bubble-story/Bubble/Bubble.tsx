import { CSSProperties, useEffect, useRef, useState } from "react";

import { Bubble as Props } from "../types";
import { getRandomColor } from "utils";

import styles from "./Bubble.module.scss";
import classNames from "classnames";

interface BubbleProps extends Props {
  onClick: () => void;
  title: string;
  isSelected: boolean;
}

const INITIAL_COLOR = "transparent";

const Bubble = ({
  onClick,
  title,
  id,
  isSelected,
  cssProps: { left, top, size, opacity },
}: BubbleProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [background, setBackground] = useState<string>(INITIAL_COLOR);

  // TODO set background inline
  useEffect(() => {
    isSelected && setBackground(getRandomColor());
  }, [isSelected]);

  const bubbleClassNames = classNames(styles.bubbleStyle, {
    [styles.bubbleStyle__active]: isSelected,
  });

  const handleClick = () => {
    onClick();
    setBackground(getRandomColor());
  };

  const inlineStyles: CSSProperties = {
    left: `${left}%`,
    top: `${top}%`,
    width: `${size}px`,
    opacity,
    background: `#${background}`,
  };

  return (
    <div
      className={bubbleClassNames}
      onClick={handleClick}
      style={inlineStyles}
      title={title}
      ref={ref}
    >
      <span className={styles.bubbleStyle__id}>{id}</span>
    </div>
  );
};

export default Bubble;
