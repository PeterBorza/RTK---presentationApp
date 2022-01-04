import { forwardRef, RefObject } from "react";

import classNames from "classnames";
import styles from "./LiftCabin.module.scss";
import { Lift } from "../state";

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
            isActive,
            isMoving,
            position,
            // disabled,
            // direction,
            blockPosition,
        } = data;

        const cabinClasses = classNames(
            styles.cabinWrapper,
            [styles[`changePosition-${position}`]],
            [styles[`transitionSpeed-${speed}`]],
            [styles[`cabinHeight-${levelCount}`]],
            [styles[`cabinWrapper__${blockPosition}`]],
            {
                [styles.closeDoors]: isMoving,
                [styles.openDoors]: isActive,
            }
        );

        return (
            <div
                ref={ref}
                className={cabinClasses}
                onTransitionEnd={onArrival}
            />
        );
    }
);

export default LiftCabin;
