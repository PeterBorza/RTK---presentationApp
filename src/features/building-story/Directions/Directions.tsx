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
        down: <FaArrowDown />,
        up: <FaArrowUp />,
        static: <ImStop />,
    };

    return (
        <div className={styles.iconsContainer}>{directionIcons[direction]}</div>
    );
};

export default Directions;
