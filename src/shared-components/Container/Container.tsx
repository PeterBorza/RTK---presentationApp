import React, { useState } from "react";
import styles from "./Container.module.scss";
import classNames from "classnames";
import { icons } from "utils";

interface ContainerProps {
    coveringSideBar?: boolean;
    size?: "medium" | "fullScreen";
    darkMode?: boolean;
    children: React.ReactNode;
    sideBar?: () => React.ReactNode;
    header?: () => React.ReactNode;
}

const Container = ({
    children,
    sideBar = () => "SideBar Default",
    header = () => "Header Default",
    coveringSideBar = true,
    size = "medium",
    darkMode = false,
}: ContainerProps) => {
    const [openMenu, setOpenMenu] = useState(false);
    const { left, bars } = icons;

    const containerClasses = classNames(styles.container, [styles[`container__${size}`]], {
        [styles.container__darkMode]: darkMode,
    });

    const contentClasses = classNames(styles.content, {
        [styles.content__sideBar_open]: openMenu && !coveringSideBar,
    });
    const sideBarClasses = classNames(styles.sideBar, {
        [styles.sideBar__open]: openMenu,
        [styles.sideBar__coveringDark]: coveringSideBar && darkMode,
        [styles.sideBar__coveringLight]: coveringSideBar && !darkMode,
    });

    const chevronClasses = classNames(styles.chevron, {
        [styles.chevron__hidden]: !openMenu,
        [styles.chevron__darkMode]: darkMode,
    });
    return (
        <div className={containerClasses}>
            <div className={sideBarClasses}>
                {sideBar()}
                <div className={chevronClasses} onClick={() => setOpenMenu(prev => !prev)}>
                    {openMenu ? left : bars}
                </div>
            </div>
            <section className={contentClasses}>
                <div className={styles.header}>{header()}</div>
                <div className={styles.body}>{children}</div>
            </section>
        </div>
    );
};

export default Container;
