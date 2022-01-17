import { FC } from "react";

import classNames from "classnames";
import styles from "./ScrollTable.module.scss";

const Header: FC<{ className?: string }> = ({ className, children }) => {
    const classes = classNames(styles.header, className);
    return <div className={classes}>{children}</div>;
};

export default Header;
