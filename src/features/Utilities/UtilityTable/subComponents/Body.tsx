import { ReactNode } from "react";

import styles from "../UtilityTable.module.scss";

type BodyProps = {
    className?: string;
    children?: ReactNode;
};

const Body = ({ className, children }: BodyProps) => {
    return <div className={!className ? `${styles.tableBody}` : className}>{children}</div>;
};

export default Body;
