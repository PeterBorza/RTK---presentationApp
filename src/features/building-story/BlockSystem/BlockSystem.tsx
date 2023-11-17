import { LevelCount } from "../state";
import { useLiftRedux } from "../selectors";
import { actions } from "../liftSlice";
import { LiftCabin } from "..";
import LiftButton from "../LiftButton";

import styles from "./BlockSystem.module.scss";

const BlockSystem = () => {
    const { moveLift } = actions;
    const { levels, lift, dispatch } = useLiftRedux();
    const { numberOfLevels, speed, lifts } = lift;
    const [liftA, liftB] = lifts;
    const { position: positionA, isMoving: isMovingA, direction: dirA } = liftA;
    const { position: positionB, isMoving: isMovingB, direction: dirB } = liftB;

    const shaft_ButtonsHandler = (level: LevelCount) => {
        if (level === positionA || level === positionB) return;
        const difA = Math.abs(positionA - level);
        const difB = Math.abs(positionB - level);

        difA < difB
            ? dispatch(moveLift({ level, lift: liftA }))
            : difA > difB
            ? dispatch(moveLift({ level, lift: liftB }))
            : positionA <= positionB
            ? dispatch(moveLift({ level, lift: liftA }))
            : dispatch(moveLift({ level, lift: liftB }));
    };

    const LiftButtons = () => (
        <>
            {levels.map((level: number) => (
                <LiftButton
                    key={`shaft-button-${level}`}
                    onClick={() => shaft_ButtonsHandler(level)}
                    disabled={isMovingA || isMovingB}
                    value={level}
                    selected={level === positionA || level === positionB}
                    direction={isMovingA ? dirA : dirB}
                    variant="shaft"
                />
            ))}
        </>
    );

    return (
        <div className={styles.blockContainer}>
            <LiftCabin levelCount={numberOfLevels} speed={speed} data={liftA} side="left" />
            <div className={styles.shaftContainer}>
                <LiftButtons />
            </div>
            <LiftCabin levelCount={numberOfLevels} speed={speed} data={liftB} side="right" />
        </div>
    );
};

export default BlockSystem;
