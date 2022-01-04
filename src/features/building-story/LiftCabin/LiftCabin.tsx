import { forwardRef, RefObject } from "react";
import { Lift } from "../state";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { ImStop } from "react-icons/im";

import classNames from "classnames";
import styles from "./LiftCabin.module.scss";

interface Props {
    data: Lift;
    speed: number;
    levelCount: number;
    onArrival?: () => void;
    ref: RefObject<HTMLDivElement | null>;
}

const LiftCabin = forwardRef<HTMLDivElement, Props>(
    ({ data, speed, levelCount, onArrival }, ref) => {
        const {
            name,
            isActive,
            isMoving,
            position,
            // disabled,
            // direction,
            blockPosition,
        } = data;

        const cabinClasses = classNames(
            styles.cabinWrapper,
            [styles[`cabinWrapper__changePosition-${position}`]],
            [styles[`cabinWrapper__transitionSpeed-${speed}`]],
            [styles[`cabinWrapper__cabinHeight-${levelCount}`]],
            [styles[`cabinWrapper__${blockPosition}`]],
            {
                [styles.closeDoors]: isMoving,
                [styles.openDoors]: !isMoving || isActive,
            }
        );

        return (
            <div ref={ref} className={cabinClasses} onTransitionEnd={onArrival}>
                <div className={styles.cabinWrapper__arrow} />
            </div>
        );
    }
);

export default LiftCabin;
