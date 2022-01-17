import { FC } from "react";

import classNames from "classnames";
import styles from "./ScrollTable.module.scss";

const Body: FC<{ className?: string }> = ({ className, children }) => {
    const classes = classNames(styles.body, className);
    return (
        <div className={classes}>
            <ul>{children}</ul>
        </div>
    );
};

export default Body;
