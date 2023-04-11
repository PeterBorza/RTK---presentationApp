import React from "react";
import { DirectionType, directionIcons } from "../state";

import styles from "./LiftSystem.module.scss";

const IconLayout = ({ direction }: { direction: DirectionType }) => {
    return direction === "static" ? (
        <span className={styles.liftWrapper__icons__static}>{directionIcons[direction]}</span>
    ) : (
        directionIcons[direction]
    );
};

export default IconLayout;
