import { useWindowSize } from "hooks";
import { DropSelect, Scroller } from "shared-components";

import classNames from "classnames";
import styles from "./Home.module.scss";
import { rainPhotos } from "utils";
import { useState } from "react";
import { MenuType } from "shared-components/DropSelect/DropSelect";

const Home = () => {
    const { width } = useWindowSize();
    const SMALL_SCREEN = width < 600;
    const [label, setLabel] = useState<MenuType>("Select");

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
        [styles["container__small"]]: SMALL_SCREEN,
    });

    return (
        <div className={containerClasses}>
            <Scroller scrollerTitle={label as string} images={rainPhotos} size="medium" />
            <div className={styles.dropContainer}>
                <DropSelect menu={mockMenuList} onSelect={element => setLabel(element)} />
            </div>
        </div>
    );
};

export default Home;
