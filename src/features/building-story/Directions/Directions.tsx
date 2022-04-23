import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { ImStop } from "react-icons/im";
import { icons } from "utils";
import { Direction } from "../state";

import styles from "./Directions.module.scss";

const directionIcons = {
    down: <FaArrowDown className={styles.downArrow} />,
    up: <FaArrowUp className={styles.upArrow} />,
    static: <ImStop className={styles.static} />,
};

const Directions = ({ direction }: { direction: Direction }) => {
    return <div className={styles.iconsContainer}>{directionIcons[direction]}</div>;
};

export default Directions;
