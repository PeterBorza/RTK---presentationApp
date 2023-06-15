import React, { ReactNode } from "react";

import { useAppRedux } from "app";

import styles from "./Home.module.scss";
import { AnimatedDropdown, TabMenu } from "shared-components";
import { createArray } from "utils/generators";

const { container, container__darkMode: dark } = styles;

const strings = ["alpha", "ro", "nu", "omega", "epsilon", "beta", "gamma", "delta", "teta", ""];

const Home = () => {
    const { isDarkMode } = useAppRedux();

    const dropItems: ReactNode[] = createArray(10)
        .fill("item")
        .map((t, i) => t + (i + 1));

    return (
        <div className={isDarkMode ? `${container} ${dark}` : container}>
            <div className={styles.dropContainer}>
                <AnimatedDropdown label="tester component" items={[...dropItems, "reset"]} />
            </div>
            <TabMenu darkMode={isDarkMode} menuItems={strings} />
        </div>
    );
};

export default Home;
