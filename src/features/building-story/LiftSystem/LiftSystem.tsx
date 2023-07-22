import { useLayoutEffect } from "react";

import { Lift as LiftProps } from "../state";
import { actions } from "../liftSlice";
import { useLiftRedux } from "../selectors";
import IconLayout from "./IconLayout";
import LiftButton from "../LiftButton";

import classNames from "classnames";
import styles from "./LiftSystem.module.scss";

type Props = {
    showPanel?: boolean;
    data: LiftProps;
};

const LiftSystem = ({ showPanel = true, data }: Props) => {
    const { moveLift, stopLift } = actions;
    const { levels, speed, dispatch } = useLiftRedux();
    const { direction, isMoving, name, position } = data;

    const liftWrapper = classNames(styles.liftWrapper, {
        [styles.liftWrapper__show]: showPanel,
    });

    useLayoutEffect(() => {
        isMoving && setTimeout(() => dispatch(stopLift(name)), speed);
    }, [isMoving, speed, name, stopLift, dispatch]);

    const liftButtons = (level: number) => (
        <LiftButton
            key={`lift-button-${level}`}
            onClick={() => dispatch(moveLift({ level, lift: data }))}
            disabled={isMoving}
            value={level}
            selected={level === position}
            variant="panel"
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
