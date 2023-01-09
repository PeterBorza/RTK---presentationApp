import React from "react";

import { useAppRedux } from "app";
import CoinsTable from "features/coins";

import styles from "./Home.module.scss";

const { container, container__darkMode: dark } = styles;

const Home = () => {
    const { isDarkMode } = useAppRedux();

    return (
        <div className={isDarkMode ? `${container} ${dark}` : container}>
            <CoinsTable />
        </div>
    );
};

export default Home;
