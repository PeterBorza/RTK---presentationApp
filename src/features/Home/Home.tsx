import { useWindowSize } from "../../hooks";
import { Rubik } from "../../shared-components";
import { myImages, rainPhotos } from "../../utils/my-images";

import classNames from "classnames";
import styles from "./Home.module.scss";

const Home = () => {
    const imgs = myImages.slice(0, 6);
    const { width } = useWindowSize();
    const SMALL_SCREEN = width < 600;
    const SMALL_SIZE = width < 700;

    const containerClasses = classNames(styles.container, {
        [styles["container__small"]]: SMALL_SCREEN,
    });

    const responsiveSize = SMALL_SIZE ? 80 : 150;

    return (
        <div className={containerClasses}>
            <Rubik sides={imgs} withAnimation="roll-both" size={responsiveSize}></Rubik>
            <Rubik sides={rainPhotos} withAnimation="still" size={responsiveSize}></Rubik>
        </div>
    );
};

export default Home;
