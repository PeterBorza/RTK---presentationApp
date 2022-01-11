import { FC } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { ImStop } from "react-icons/im";
import { Direction } from "../state";

import styles from "./Directions.module.scss";

type Props = {
    direction: Direction;
};

const Directions: FC<Props> = ({ direction }) => {
    const directionIcons = {
        down: <FaArrowDown className={styles.downArrow} />,
        up: <FaArrowUp className={styles.upArrow} />,
        static: <ImStop className={styles.static} />,
    };

    return (
        <div className={styles.iconsContainer}>{directionIcons[direction]}</div>
    );
};

export default Directions;
