import React from "react";

import classNames from "classnames";
import styles from "./FlipCard.module.scss";

export type Props = {
  darkBack: boolean;
  children?: React.ReactNode;
};

const Back = ({ children, darkBack }: Props) => {
  const backFlipClasses = classNames(styles.back, {
    [styles.black_bg]: darkBack,
  });
  return <div className={backFlipClasses}>{children}</div>;
};

export default Back;
