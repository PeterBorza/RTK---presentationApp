import { useDispatch, useSelector } from "react-redux";

import { LevelCount } from "../state";
import { levelsSelector, levelsState, liftsState, speedState } from "../selectors";
import { moveLift } from "../liftSlice";
import { LiftCabin } from "..";
import LiftButton from "../LiftButton";

import styles from "./BlockSystem.module.scss";

const BlockSystem = () => {
    const numberOfLevels = useSelector(levelsState);
    const speed = useSelector(speedState);
    const levels = useSelector(levelsSelector);
    const [liftA, liftB] = useSelector(liftsState);
    const { position: positionA, isMoving: isMovingA } = liftA;
    const { position: positionB, isMoving: isMovingB } = liftB;
    const dispatch = useDispatch();

    const shaft_ButtonsHandler = (level: LevelCount) => {
        if (level === positionA || level === positionB) return;
        const difA = Math.abs(positionA - level);
        const difB = Math.abs(positionB - level);

        // TODO set it up to disable moving elevator, but still call the other one

        difA < difB
            ? dispatch(moveLift({ level, lift: liftA }))
            : difA > difB
            ? dispatch(moveLift({ level, lift: liftB }))
            : positionA <= positionB
            ? dispatch(moveLift({ level, lift: liftA }))
            : dispatch(moveLift({ level, lift: liftB }));
    };

    return (
        <div className={styles.blockContainer}>
            <LiftCabin levelCount={numberOfLevels} speed={speed} data={liftA} side="left" />
            <LiftCabin levelCount={numberOfLevels} speed={speed} data={liftB} side="right" />
            <div className={styles.shaftContainer}>
                {levels.map((level: number) => (
                    <LiftButton
                        key={`Shaft-button-${level}`}
                        onClick={() => shaft_ButtonsHandler(level)}
                        disabled={isMovingA || isMovingB}
                        value={level}
                        selected={level === positionA || level === positionB}
                    />
                ))}
            </div>
        </div>
    );
};

export default BlockSystem;
