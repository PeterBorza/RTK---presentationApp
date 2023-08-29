import React from "react";

import { useAppRedux } from "app";

import styles from "./Home.module.scss";
import { GlowText } from "shared-components";
// import { jsonUsersUrl, useQueryHook } from "providers/tanstack-react-query";

const { container, container__darkMode: dark } = styles;

// const strings = [
//     "alpha",
//     "ro",
//     "nu",
//     "omega",
//     "epsilon",
//     "beta",
//     "gamma",
//     "delta",
//     "teta",
//     "sdgfhng",
//     "sdgfb",
//     "xbd",
//     "gfdgnfsh",
//     "asfdgbfngfh",
//     "dfvbdf",
//     "xzv cvcnzbf",
// ];

// const objectToDrag = [
//     {
//         id: 1,
//         label: "one",
//     },
//     {
//         id: 2,
//         label: "two",
//     },
//     {
//         id: 3,
//         label: "three",
//     },
//     {
//         id: 4,
//         label: "four",
//     },
// ];

export interface Users {
    id: number;
    name: string;
    username: string;
}
const Home = () => {
    // const { isLoading, dataUpdatedAt } = useQueryHook<Users[]>({
    //     key: "json-placeholder",
    //     url: jsonUsersUrl,
    // });

    // const { resData: coins } = useQueryHook<CoinsInterface[]>({
    //     key: "coins",
    //     url: `${COINS_URL}/${LinkUrls.COINS}`,
    // });

    // const time = new Date(dataUpdatedAt).toLocaleTimeString();
    const { isDarkMode } = useAppRedux();

    return (
        <div className={isDarkMode ? `${container} ${dark}` : container}>
            {/* {isLoading ? <Loader /> : <p>{time}</p>} */}
            <div className={styles.iframeRTK}>
                <GlowText text="Informer" />
            </div>
            {/* <GuessGame /> */}
            {/* <div className={styles.dropContainer}>
                <AnimatedDropdown label="tester component" items={[...dropItems, "reset"]} />
            </div> */}
            {/* <TabMenu darkMode={isDarkMode} menuItems={strings} /> */}
        </div>
    );
};

export default Home;
