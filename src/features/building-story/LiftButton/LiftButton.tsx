import React from "react";

import { directionIcons, DirectionType } from "../state";

import classNames from "classnames";
import styles from "./LiftButton.module.scss";
interface Props extends React.ComponentProps<"button"> {
  selected: boolean;
  direction?: DirectionType;
  variant: "shaft" | "panel";
}

const LiftButton = ({
  onClick,
  disabled,
  value,
  selected,
  direction = "static",
  variant,
}: Props) => {
  const classes = classNames(styles.buttonStyle, {
    [styles.buttonStyle__active]: selected,
    [styles.panelButtons]: variant === "panel",
  });

  const getCorrectValue = value === 0 ? "P" : value;

  return (
    <button
      onClick={onClick}
      className={classes}
      disabled={disabled}
      title="click on desired floor"
    >
      {direction === "static" ? getCorrectValue : directionIcons[direction]}
    </button>
  );
};

export default LiftButton;
