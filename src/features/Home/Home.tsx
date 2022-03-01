import React from "react";
import { Rubik } from "../../shared-components";

import styles from "./Home.module.scss";

const Home = () => {
    return (
        <div className={styles.container}>
            <Rubik withAnimation />
        </div>
    );
};

export default Home;
