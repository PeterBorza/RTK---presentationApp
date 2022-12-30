import React from "react";
import { Direction, directionIcons } from "../state";

import styles from "./LiftSystem.module.scss";

const IconLayout = ({ direction }: { direction: Direction }) => {
    return direction === Direction.STATIC ? (
        <span className={styles.liftWrapper__icons__static}>{directionIcons[direction]}</span>
    ) : (
        directionIcons[direction]
    );
};

export default IconLayout;
