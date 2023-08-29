import React, { forwardRef, ReactNode } from "react";

import styles from "./ScrollTable.module.scss";

export interface TableProps {
    children: ReactNode;
}

// eslint-disable-next-line react/display-name
const ScrollTable = forwardRef<HTMLDivElement, TableProps>(({ children }, ref) => {
    return (
        <div className={styles.wrapper} ref={ref}>
            {children}
        </div>
    );
});

export default ScrollTable;
