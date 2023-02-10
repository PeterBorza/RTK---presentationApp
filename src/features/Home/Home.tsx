import React, { CSSProperties, useState } from "react";

import { useAppRedux } from "app";
import CoinsTable from "features/coins";

import styles from "./Home.module.scss";
import { useSearch } from "hooks";
import { CustomInput, Loader, Rubik } from "shared-components";
import { rainPhotos } from "utils";

const { container, container__darkMode: dark } = styles;

const nums = [3, 5, 7, 3, 1, 4, 8, 9, 64, 32, 3, 578, 8, 0, -1];
const strings = ["alpha", "ro", "nu", "omega", "epsilon", "beta", "gamma", "delta", "teta", ""];
const bools = [true, false, false, true, true, false, false, false];

const Home = () => {
    const [loaded, setLoaded] = useState(false);
    const [query, setQuery] = useState("");
    const [debouncedValue, filteredData] = useSearch(query, strings);
    const { isDarkMode } = useAppRedux();

    const listColor: CSSProperties = {
        color: isDarkMode ? "white" : "black",
    };

    const onLoadedIframe = () => {
        setLoaded(true);
        console.log("loaded");
    };

    return (
        <div className={isDarkMode ? `${container} ${dark}` : container}>
            <Rubik sides={rainPhotos} size={100} withAnimation="still" />
            {/* <iframe
                className={styles.iframeRTK}
                // src="https://rtk-presentation-qdl7qsvol-peterborza.vercel.app/features"
                frameBorder="0"
                onLoad={onLoadedIframe}
                name="RTK"
            /> */}
            {/* <CoinsTable /> */}
            {/* <div>
                <CustomInput
                    name="Search"
                    value={query}
                    onChange={val => setQuery(val)}
                    isValid={query.length < 6}
                    darkMode={isDarkMode}
                />
            </div>
            <br />

            <ul style={{ width: "200px", height: "30vh", textAlign: "center" }}>
                {filteredData.length === 0 && debouncedValue.length > 0 ? (
                    <li style={listColor}>No results</li>
                ) : (
                    filteredData.map(item => (
                        <li style={listColor} key={item}>
                            {item}
                        </li>
                    ))
                )}
            </ul> */}
        </div>
    );
};

export default Home;
