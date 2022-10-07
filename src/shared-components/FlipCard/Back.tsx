import React from "react";

import classNames from "classnames";
import styles from "./FlipCard.module.scss";

export type Props = {
    darkBack: boolean;
};

const Back: React.FC<Props> = ({ children, darkBack }) => {
    const backFlipClasses = classNames(styles.back, {
        [styles.black_bg]: darkBack,
    });
    return <div className={backFlipClasses}>{children}</div>;
};

export default Back;
