import { useWindowSize } from "hooks";
import { Scroller } from "shared-components";
import { puzzleImages } from "images/folder/image-stack";

import classNames from "classnames";
import styles from "./Home.module.scss";

const Home = () => {
    const { width } = useWindowSize();
    const SMALL_SCREEN = width < 600;

    const containerClasses = classNames(styles.container, {
        [styles["container__small"]]: SMALL_SCREEN,
    });

    return (
        <div className={containerClasses}>
            <Scroller images={puzzleImages} size="medium" />
        </div>
    );
};

export default Home;
