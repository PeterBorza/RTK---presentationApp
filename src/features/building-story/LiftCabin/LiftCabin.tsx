import React from "react";
import { LevelCount, Lift } from "../state";

import classNames from "classnames";
import styles from "./LiftCabin.module.scss";

interface Props {
    data: Lift;
    speed: number;
    levelCount: LevelCount;
}

const LiftCabin: React.FC<Props> = ({ data, speed, levelCount }) => {
    const { name, doorsAreOpen, isMoving, position, blockPosition } = data;

    const cabinClasses = classNames(
        styles.cabinWrapper,
        [styles[`cabinWrapper__changePosition-${position}`]],
        [styles[`cabinWrapper__transitionSpeed-${speed}`]],
        [styles[`cabinWrapper__cabinHeight-${levelCount}`]],
        [styles[`cabinWrapper__${blockPosition}`]],
        {
            [styles.closeDoors]: isMoving,
            [styles.openDoors]: !isMoving || doorsAreOpen,
        },
    );

    return <div className={cabinClasses} data-content={name} />;
};

export default LiftCabin;
