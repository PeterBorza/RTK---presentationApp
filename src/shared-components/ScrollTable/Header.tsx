import { FC } from "react";

import styles from "./ScrollTable.module.scss";

const Header: FC = ({ children }) => <div className={styles.header}>{children}</div>;

export default Header;
