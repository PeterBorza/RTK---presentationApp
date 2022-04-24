import { useWindowSize } from "hooks";

import classNames from "classnames";
import styles from "./Home.module.scss";
import { ColorDrops } from "features/guess-the-colors/game-components";

const Home = () => {
    const { width } = useWindowSize();
    const SMALL_SCREEN = width < 600;

    const containerClasses = classNames(styles.container, {
        [styles["container__small"]]: SMALL_SCREEN,
    });

    return (
        <div className={containerClasses}>
            <h2>Pick your colors</h2>
            <div className={styles.colorDrops_container}>
                <ColorDrops />
                <ColorDrops />
                <ColorDrops />
                <ColorDrops />
            </div>
        </div>
    );
};

export default Home;
