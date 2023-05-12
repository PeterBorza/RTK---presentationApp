import React, { CSSProperties, ReactNode, useState } from "react";

import { useAppRedux } from "app";
import CoinsTable from "features/coins";

import styles from "./Home.module.scss";
import { useSearch } from "hooks";
import { AnimatedDropdown, CustomInput, Loader, Rubik } from "shared-components";
import { sortData } from "utils";
import { createArray, newArray } from "utils/generators";

import classNames from "classnames";

const { container, container__darkMode: dark } = styles;

const nums = [3, 5, 7, 3, 1, 4, 8, 9, 64, 32, 3, 578, 8, 0, -1];
const strings = ["alpha", "ro", "nu", "omega", "epsilon", "beta", "gamma", "delta", "teta", ""];
const bools = [true, false, false, true, true, false, false, false];

const numss = Array(10)
    .fill(null)
    .map(() => +(Math.random() * 10).toFixed(2));
const dsgf = sortData({ data: numss });

const Home = () => {
    const [val, setVal] = useState<ReactNode | null>(null);
    const [query, setQuery] = useState("");
    const [debouncedValue, filteredData] = useSearch(query, strings);
    const { isDarkMode } = useAppRedux();

    const listColor: CSSProperties = {
        color: isDarkMode ? "white" : "black",
    };

    const dropItems: ReactNode[] = createArray(10)
        .fill("item")
        .map((t, i) => t + (i + 1));

    const handleItemClick = (item: ReactNode) => setVal(item === "reset" ? "" : item);

    return (
        <div className={isDarkMode ? `${container} ${dark}` : container}>
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
                <p style={listColor}>{val}</p>
            </ul> */}
            <div className={styles.dropContainer}>
                <AnimatedDropdown
                    label="tester component"
                    items={[...dropItems, "reset"]}
                    onItemClick={item => handleItemClick(item)}
                />
            </div>
            <p style={listColor}>{val}</p>
        </div>
    );
};

export default Home;
