import React, { ReactNode, useState } from "react";

import { useAppRedux } from "app";

import styles from "./Home.module.scss";
import { AnimatedDropdown, TabMenu, SortableDrag } from "shared-components";
import { createArray } from "utils/generators";
import classNames from "classnames";
import { DragItemsType } from "shared-components/Drag/SortableDrag";
import ColorBall from "features/guess-the-colors/game-components/guess-with-drag/GuessGame/sub-components/ColorBall/ColorBall";
import { GuessGame } from "features/guess-the-colors/game-components/guess-with-drag";

const { container, container__darkMode: dark } = styles;

const strings = [
    "alpha",
    "ro",
    "nu",
    "omega",
    "epsilon",
    "beta",
    "gamma",
    "delta",
    "teta",
    "sdgfhng",
    "sdgfb",
    "xbd",
    "gfdgnfsh",
    "asfdgbfngfh",
    "dfvbdf",
    "xzv cvcnzbf",
];

const objectToDrag = [
    {
        id: 1,
        label: "one",
    },
    {
        id: 2,
        label: "two",
    },
    {
        id: 3,
        label: "three",
    },
    {
        id: 4,
        label: "four",
    },
];
const Home = () => {
    const [dragStrings, setDragStrings] = useState(strings);
    const { isDarkMode } = useAppRedux();
    const dropItems: ReactNode[] = createArray(10)
        .fill("item")
        .map((t, i) => t + (i + 1));
    const classes = (isDragging: boolean) =>
        classNames(styles.sortableItem, styles.menuItem, {
            [styles.isDragging]: isDragging,
        });

    const getSortItem = (item: string, isDragging?: boolean) => (
        <div className={classes(Boolean(isDragging))}>{item}</div>
    );
    const onDragEndHandler = (items: DragItemsType) => {
        setDragStrings(items);
    };

    return (
        <div className={isDarkMode ? `${container} ${dark}` : container}>
            {/* <SortableDrag
                items={dragStrings}
                onDragEnd={onDragEndHandler}
                sortableItem={getSortItem}
                className={styles.sortableContainer}
            /> */}
            {/* <GuessGame /> */}
            {/* <div className={styles.dropContainer}>
                <AnimatedDropdown label="tester component" items={[...dropItems, "reset"]} />
            </div> */}
            {/* <TabMenu darkMode={isDarkMode} menuItems={strings} /> */}
        </div>
    );
};

export default Home;
