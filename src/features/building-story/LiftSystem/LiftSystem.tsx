import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Lift as LiftProps } from "../state";
import { moveLift, stopLift } from "../liftSlice";
import { levelsSelector, speedState } from "../selectors";
import LiftButton from "../LiftButton";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { ImStop } from "react-icons/im";

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

    const directionIcons = {
        down: <FaArrowDown className={styles.downArrow} />,
        up: <FaArrowUp className={styles.upArrow} />,
        static: <ImStop className={styles.static} />,
    };

    const liftWrapper = classNames(styles.liftWrapper, {
        [styles.liftWrapper__show]: showPanel,
    });

    useEffect(() => {
        isMoving && setTimeout(() => dispatch(stopLift(name)), speed);
    }, [isMoving, speed, name, dispatch]);

    const liftButtonHandler = (level: number) => {
        dispatch(moveLift({ level, lift: data }));
    };

    return (
        <div className={liftWrapper}>
            <div className={styles.liftWrapper__icons}>{directionIcons[direction]}</div>
            <div className={styles.liftWrapper__buttons}>
                {levels.map(level => (
                    <LiftButton
                        key={`lift-button-${level}`}
                        onClick={() => liftButtonHandler(level)}
                        disabled={isMoving}
                        value={level}
                        selected={level === position}
                        className={styles.panelButtons}
                    />
                ))}
            </div>
        </div>
    );
};

export default LiftSystem;
