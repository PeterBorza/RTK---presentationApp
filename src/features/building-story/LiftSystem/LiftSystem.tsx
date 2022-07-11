import { FC, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Direction, Lift, Lift as LiftProps } from "../state";
import { moveLift, setActive, setMovingLift } from "../liftSlice";
import { levelsSelector, speedState } from "../selectors";
import LiftButton from "../LiftButton";
import Panel from "../Panel";
import Directions from "../Directions";

import classNames from "classnames";
import styles from "./LiftSystem.module.scss";

type Props = {
    showPanel: boolean;
    data: LiftProps;
};

type LevelCount = number;

const LiftSystem: FC<Props> = ({ showPanel, data }) => {
    const levels = useSelector(levelsSelector);
    const speed = useSelector(speedState);
    const dispatch = useDispatch();
    const { direction, isMoving, name, position } = data;

    const liftWrapper = classNames(styles.liftWrapper, {
        [styles.liftWrapper__show]: showPanel,
    });

    const liftIsStopped = useCallback(
        () => dispatch(moveLift({ name, isMoving: false })),
        [dispatch, name],
    );

    const openDoors = useCallback(
        () => dispatch(setActive({ name, isActive: true })),
        [dispatch, name],
    );

    useEffect(() => {
        setTimeout(() => {
            liftIsStopped();
            openDoors();
        }, speed);
    }, [liftIsStopped, openDoors, speed]);

    const getDirection = (level: LevelCount): Direction => {
        if (level === position) return "static";
        return level < position ? "down" : "up";
    };

    const handleLiftButtons = (level: LevelCount) => {
        if (level === position) return;
        const newLift: Lift = {
            ...data,
            isMoving: true,
            position: level,
            direction: getDirection(level),
            isActive: true,
        };
        dispatch(setMovingLift(newLift));
    };

    const lift_Panel = levels.map(level => (
        <LiftButton
            key={`lift-button-${level}`}
            onClick={() => handleLiftButtons(level)}
            disabled={isMoving}
            value={level}
            selected={level === position}
            className={styles.panelButtons}
        />
    ));

    return (
        <div className={liftWrapper}>
            <Panel icons={<Directions direction={direction} />} renderButtons={() => lift_Panel} />
        </div>
    );
};

export default LiftSystem;
