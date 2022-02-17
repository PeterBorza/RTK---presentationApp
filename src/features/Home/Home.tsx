import React from "react";
import { SimpleDrop } from "../../shared-components";

import styles from "./Home.module.scss";

const Home = () => {
    return (
        <div className={styles.container}>
            <div className={styles.dropHolder}>
                <SimpleDrop height="medium">
                    <ul>
                        <li>item-1</li>
                        <li>item-2</li>
                        <li>item-3</li>
                        <li>item-4</li>
                        <li>item-5</li>
                        <li>item-6</li>
                        <li>item-7</li>
                        <li>item-8</li>
                        <li>item-9</li>
                        <li>item-10</li>
                    </ul>
                </SimpleDrop>
            </div>
        </div>
    );
};

export default Home;
