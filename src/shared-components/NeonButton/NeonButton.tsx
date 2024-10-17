import React, { useMemo } from "react";

import classNames from "classnames";
import styles from "./NeonButton.module.scss";

export type ButtonColors = "green" | "violet" | "blue";

interface NeonButtonProps {
  onClick: () => void;
  onContextMenuClick?: () => void;
  tabIndex?: number;
  color?: ButtonColors;
  mirrorEffect?: boolean;
  animated?: boolean;
  children?: React.ReactNode;
}

const buttonSides = ["top", "right", "bottom", "left"];

const { neon, neon__mirrorEffect: mirror, span } = styles;

const NeonButton = ({
  children,
  onClick,
  onContextMenuClick,
  tabIndex,
  color = "green",
  mirrorEffect = false,
  animated = true,
}: NeonButtonProps) => {
  const classes = classNames(neon, [styles[`neon__${color}`]], {
    [mirror]: mirrorEffect,
  });

  const renderSpans = useMemo(
    () =>
      buttonSides.map(side => {
        const spanStyles = classNames(span, styles[`span__${side}`]);
        return <span key={side} className={spanStyles} />;
      }),
    [],
  );

  return (
    <button
      className={classes}
      onClick={onClick}
      onContextMenu={onContextMenuClick}
      tabIndex={tabIndex}
    >
      {children}
      {animated && renderSpans}
    </button>
  );
};

export default NeonButton;
