import React from "react";

import styles from "../UtilityTable.module.scss";

type HeaderProps = {
    className?: string;
    children?: React.ReactNode;
};

const Header = ({ className, children }: HeaderProps) => (
    <div className={!className ? `${styles.tableHeader}` : className}>{children}</div>
);

export default Header;
