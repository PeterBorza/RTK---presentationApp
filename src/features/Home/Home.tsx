import { useWindowSize } from "hooks";
import { CheckBox, DropSelect, Loader, Scroller, ToggleButton } from "shared-components";

import classNames from "classnames";
import styles from "./Home.module.scss";
import { rainPhotos } from "utils";
import { useState } from "react";
import { MenuType } from "shared-components/DropSelect/DropSelect";
import { useAppRedux } from "app";

const Home = () => {
    const { isDarkMode } = useAppRedux();
    const { width } = useWindowSize();
    const SMALL_SCREEN = width < 600;
    const [label, setLabel] = useState<MenuType>("Select");
    const [enableDot, setEnableDot] = useState(false);
    const [clr, setClr] = useState("");

    const mockMenuList = [
        "1 pair",
        "2 pairs",
        "3 of a kind",
        "straight",
        "full house",
        "flush",
        "quads",
        "straight flush",
        "very long word to see how it behaves when in container",
    ];

    const colors = ["green", "red", "blue", "olive"];

    const containerClasses = classNames(styles.container, {
        [styles.container__small]: SMALL_SCREEN,
        [styles.container__darkMode]: isDarkMode,
    });

    const dotClasses = classNames(
        styles.dot,
        enableDot ? styles.dot__enabled : styles.dot__disabled,
    );

    const x = () => {
        setEnableDot(prev => !prev);
        console.log(enableDot);
    };

    const renderCheckBoxes = (item: string) => {
        return (
            <CheckBox
                key={item}
                onChange={() => setClr(item)}
                value={item}
                name={item}
                label={item}
                isChecked={clr === item}
            />
        );
    };

    return (
        <div className={containerClasses} style={{ backgroundColor: clr }}>
            <Scroller scrollerTitle={label as string} images={rainPhotos} size="medium" />
            <div className={styles.dropContainer}>
                <DropSelect menu={mockMenuList} onSelect={element => setLabel(element)} />
            </div>
            {/* <ToggleButton darkMode={isDarkMode} enabled={enableDot} toggleEnabled={x} size="xxl" /> */}
            {/* {colors.map(renderCheckBoxes)} */}
            {/* <Loader dots={5} message="...loading, please wait" darkMode={isDarkMode} /> */}
        </div>
    );
};

export default Home;
