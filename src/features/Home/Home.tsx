import { useWindowSize } from "hooks";

import classNames from "classnames";
import styles from "./Home.module.scss";
import { DropdownContainer } from "shared-components/Dropdown";

const Home = () => {
    const { width } = useWindowSize();
    const SMALL_SCREEN = width < 600;

    const containerClasses = classNames(styles.container, {
        [styles["container__small"]]: SMALL_SCREEN,
    });

    const numbers = [1, 2, 3, 4];
    const menuItems = (num: number) => <h1>{num}</h1>;

    return (
        <div className={containerClasses}>
            <h2>Pick your colors</h2>
            <div className={styles.colorDrops_container}>
                <DropdownContainer<number>
                    menuList={numbers}
                    renderMenuItem={num => menuItems(num)}
                />
            </div>
        </div>
    );
};

export default Home;
