import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { LevelCount, Lift, Lift as LiftProps } from "../state";
import { moveLift, stopLift } from "../liftSlice";
import { getDirection, levelsSelector, speedState } from "../selectors";
import LiftButton from "../LiftButton";
import Directions from "../Directions";

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

    const liftWrapper = classNames(styles.liftWrapper, {
        [styles.liftWrapper__show]: showPanel,
    });

    useEffect(() => {
        isMoving && setTimeout(() => dispatch(stopLift(name)), speed);
    }, [isMoving, speed, name, dispatch]);

    const handleLiftButtons = (level: LevelCount) => {
        if (level === position) return;
        const newLift: Lift = {
            ...data,
            isMoving: true,
            position: level,
            direction: getDirection(level, position),
            doorsAreOpen: true,
        };
        dispatch(moveLift(newLift));
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
            <div className={styles.panelWrapper}>
                <div className={styles.panelWrapper__icons}>
                    <Directions direction={direction} />
                </div>
                <div className={styles.panelWrapper__buttons}>{lift_Panel}</div>
            </div>
        </div>
    );
};

export default LiftSystem;
