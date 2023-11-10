import { ReactNode } from "react";

import styles from "./ScrollTable.module.scss";

interface BodyProps {
    children?: ReactNode;
}

const Body = ({ children }: BodyProps) => (
    <ul className={`${styles.body} no-scrollBar`}>{children}</ul>
);

export default Body;
