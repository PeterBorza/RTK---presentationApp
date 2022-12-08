import { useWindowSize } from "hooks";
import { DropSelect, Scroller, ToggleButton } from "shared-components";

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
        console.log("click");
    };

    return (
        <div className={containerClasses}>
            {/* <Scroller scrollerTitle={label as string} images={rainPhotos} size="medium" />
            <div className={styles.dropContainer}>
                <DropSelect menu={mockMenuList} onSelect={element => setLabel(element)} />
            </div> */}
            <ToggleButton
                darkMode={isDarkMode}
                enabled={enableDot}
                toggleEnabled={() => setEnableDot(prev => !prev)}
            />
        </div>
    );
};

export default Home;
