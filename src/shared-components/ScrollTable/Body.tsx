import { FC } from "react";

import styles from "./ScrollTable.module.scss";

const Body: FC<{ className?: string }> = ({ children }) => (
    <ul className={styles.body}>{children}</ul>
);

export default Body;
