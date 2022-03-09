import React from "react";

import classNames from "classnames";
import styles from "./NavBar.module.scss";

const NavBar: React.FC<{ vertical?: boolean }> = ({ children, vertical = false }) => {
    const listClasses = classNames(styles.list, {
        [styles.list__vertical]: vertical,
    });
    return (
        <nav className={styles.nav}>
            <ul className={listClasses}>{children}</ul>
        </nav>
    );
};

export default NavBar;
