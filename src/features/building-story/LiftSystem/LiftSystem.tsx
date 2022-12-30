import { FC, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { icons } from "utils";
import { Direction, Lift as LiftProps } from "../state";
import { moveLift, stopLift } from "../liftSlice";
import { levelsSelector, speedState } from "../selectors";
import LiftButton from "../LiftButton";

import classNames from "classnames";
import styles from "./LiftSystem.module.scss";

type Props = {
    showPanel?: boolean;
    data: LiftProps;
};

const LiftSystem: FC<Props> = ({ showPanel = true, data }) => {
    const levels = useSelector(levelsSelector);
    const speed = useSelector(speedState);
    const dispatch = useDispatch();
    const { direction, isMoving, name, position } = data;
    const { faDown, faUp, stop } = icons;

    const directionIcons: Record<Direction, JSX.Element> = {
        down: faDown,
        up: faUp,
        static: stop,
    };

    const IconLayout = ({ direction }: { direction: Direction }) =>
        direction === Direction.STATIC ? (
            <span className={styles.static}>{directionIcons[direction]}</span>
        ) : (
            directionIcons[direction]
        );

    const liftWrapper = classNames(styles.liftWrapper, {
        [styles.liftWrapper__show]: showPanel,
    });

    useLayoutEffect(() => {
        isMoving && setTimeout(() => dispatch(stopLift(name)), speed);
    }, [isMoving, speed, name, dispatch]);

    const liftButtons = (level: number) => (
        <LiftButton
            key={`lift-button-${level}`}
            onClick={() => dispatch(moveLift({ level, lift: data }))}
            disabled={isMoving}
            value={level}
            selected={level === position}
            className={styles.panelButtons}
        />
    );

    return (
        <div className={liftWrapper}>
            <div className={styles.liftWrapper__icons}>
                <IconLayout direction={direction} />
            </div>
            <div className={styles.liftWrapper__buttons}>{levels.map(liftButtons)}</div>
        </div>
    );
};

export default LiftSystem;
