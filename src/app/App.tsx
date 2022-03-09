import React from "react";

import Navigation from "../features/Navigation";
import { LinkContextProvider } from "../context";
import { Outlet } from "react-router";

import styles from "./App.module.scss";

const App = () => {
    return (
        <div className={styles.container}>
            <LinkContextProvider>
                <Navigation />
            </LinkContextProvider>
            <Outlet />
        </div>
    );
};

export default App;
