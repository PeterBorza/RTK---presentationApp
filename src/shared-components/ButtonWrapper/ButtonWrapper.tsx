import React from "react";

import styles from "./ButtonWrapper.module.scss";
import classNames from "classnames";

type Props = {
  dark?: boolean;
  position?: "start" | "center" | "end";
  children?: React.ReactNode;
};

// TODO fix position related issue

const ButtonWrapper = ({ children, dark = false, position = "end" }: Props) => {
  const buttonWrapper = classNames(styles.buttonWrapper, [styles[`buttonWrapper--${position}`]], {
    [styles.buttonWrapper__dark]: dark,
  });
  return <div className={buttonWrapper}>{children}</div>;
};

export default ButtonWrapper;
