import { forwardRef, ReactNode, RefObject } from "react";

import styles from "./ScrollTable.module.scss";
import classNames from "classnames";

export interface TableProps {
    className?: string;
    ref: RefObject<HTMLDivElement | null>;
    children: ReactNode;
}

const ScrollTable = forwardRef<HTMLDivElement, TableProps>(
    ({ className, children }, ref) => {
        const classes = classNames(styles.wrapper, className);
        return (
            <div className={classes} ref={ref}>
                {children}
            </div>
        );
    }
);

export default ScrollTable;
