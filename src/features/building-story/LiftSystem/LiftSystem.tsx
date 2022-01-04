import { FC, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Lift as LiftProps } from "../state";
import {
    changePosition,
    moveLift,
    setActive,
    setDirection,
} from "../liftSlice";
import { levelsSelector, speedState } from "../selectors";
import LiftButton from "../LiftButton";
import Panel from "../Panel";
import Directions from "../Directions";

import classNames from "classnames";
import styles from "./LiftSystem.module.scss";

type Props = {
    showPanel?: boolean;
    data: LiftProps;
};

type LevelCount = number;

const LiftSystem: FC<Props> = ({ showPanel = true, data }) => {
    const levels = useSelector(levelsSelector);
    const speed = useSelector(speedState);
    const dispatch = useDispatch();
    const { direction, isMoving, name, position, blockPosition } = data;

    const liftWrapper = classNames(styles.liftWrapper, {
        [styles.liftWrapper__show]: showPanel,
        [styles[`transform-${blockPosition}`]]: showPanel,
    });

    const liftIsMoving = () => dispatch(moveLift({ name, isMoving: true }));
    const liftIsStopped = useCallback(
        () => dispatch(moveLift({ name, isMoving: false })),
        [dispatch, name]
    );

    const closeDoors = () => dispatch(setActive({ name, isActive: false }));
    const openDoors = useCallback(
        () => dispatch(setActive({ name, isActive: true })),
        [dispatch, name]
    );

    useEffect(() => {
        setTimeout(() => {
            liftIsStopped();
            openDoors();
        }, speed);
    }, [liftIsStopped, openDoors, speed]);

    const moveElevator = (position: LevelCount) =>
        dispatch(changePosition({ name, position }));

    const getDirections = (level: LevelCount) => {
        level < position && dispatch(setDirection({ name, direction: "down" }));
        level > position && dispatch(setDirection({ name, direction: "up" }));
    };

    const lift_ButtonHandler = (level: LevelCount) => {
        liftIsMoving();
        closeDoors();
        getDirections(level);
        moveElevator(level);
    };

    const lift_Panel = levels.map(level => (
        <LiftButton
            key={`lift-button-${level}`}
            onClick={() => lift_ButtonHandler(level)}
            disabled={isMoving}
            value={level}
            selected={level === position}
            className={styles.panelButtons}
        />
    ));

    return (
        <div className={liftWrapper}>
            <Panel
                icons={<Directions direction={direction} />}
                renderButtons={() => lift_Panel}
            />
        </div>
    );
};

export default LiftSystem;
