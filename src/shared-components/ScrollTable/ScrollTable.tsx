import { forwardRef, ReactNode, RefObject } from "react";

import styles from "./ScrollTable.module.scss";

export interface TableProps {
    ref: RefObject<HTMLDivElement | null>;
    children: ReactNode;
}

const ScrollTable = forwardRef<HTMLDivElement, TableProps>(({ children }, ref) => {
    return (
        <div className={styles.wrapper} ref={ref}>
            {children}
        </div>
    );
});

export default ScrollTable;
