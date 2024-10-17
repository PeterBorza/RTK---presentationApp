import React, { FC } from "react";

import styles from "./Controls.module.scss";

interface Props {
  count: number;
  label: string;
}

const Controls: FC<Props> = ({ children, count, label }) => {
  return (
    <div className={styles.controls}>
      <div className={styles.clicks}>
        {label} <span>{count}</span>
      </div>
      {children}
    </div>
  );
};

export default Controls;
