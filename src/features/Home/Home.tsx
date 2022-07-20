import { useWindowSize } from "hooks";

import classNames from "classnames";
import styles from "./Home.module.scss";

const Home = () => {
    const { width } = useWindowSize();
    const SMALL_SCREEN = width < 600;

    const containerClasses = classNames(styles.container, {
        [styles["container__small"]]: SMALL_SCREEN,
    });

    return <div className={containerClasses}></div>;
};

export default Home;
