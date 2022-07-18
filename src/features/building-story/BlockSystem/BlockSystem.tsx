import { useEffect } from "react";
import { LevelCount, Lift } from "../state";
import { levelsSelector, levelsState, liftsState, speedState } from "../selectors";
import { moveLift, stopLift } from "../liftSlice";
import { useDispatch, useSelector } from "react-redux";
import { LiftCabin } from "..";
import LiftButton from "../LiftButton";
import Shaft from "../Shaft";

import styles from "./BlockSystem.module.scss";
import { getDirection } from "../selectors";

const BlockSystem = () => {
    const numberOfLevels = useSelector(levelsState);
    const speed = useSelector(speedState);
    const [liftA, liftB] = useSelector(liftsState);
    const levels = useSelector(levelsSelector);
    const dispatch = useDispatch();

    const { position: positionA, isMoving: isMovingA } = liftA;
    const { position: positionB, isMoving: isMovingB } = liftB;

    useEffect(() => {
        isMovingA && setTimeout(() => dispatch(stopLift(liftA.name)), speed);
    }, [liftA.name, isMovingA, speed, dispatch]);

    useEffect(() => {
        isMovingB && setTimeout(() => dispatch(stopLift(liftB.name)), speed);
    }, [liftB.name, isMovingB, speed, dispatch]);

    const moveLiftHandler = (level: number, lift: Lift) => {
        const newLift: Lift = {
            ...lift,
            isMoving: true,
            position: level,
            direction: getDirection(level, lift.position),
            doorsAreOpen: true,
        };
        dispatch(moveLift(newLift));
    };

    const shaft_ButtonsHandler = (level: LevelCount) => {
        if (level === positionA || level === positionB) return;
        const difA = Math.abs(positionA - level);
        const difB = Math.abs(positionB - level);

        difA < difB
            ? moveLiftHandler(level, liftA)
            : difA > difB
            ? moveLiftHandler(level, liftB)
            : positionA <= positionB
            ? moveLiftHandler(level, liftA)
            : moveLiftHandler(level, liftB);
    };

    const shaftButtons = (level: number) => (
        <LiftButton
            key={`Shaft-button-${level}`}
            onClick={() => shaft_ButtonsHandler(level)}
            disabled={false}
            value={level}
            selected={false}
        />
    );

    return (
        <div className={styles.blockContainer}>
            <LiftCabin levelCount={numberOfLevels} speed={speed} data={liftA} />
            <LiftCabin levelCount={numberOfLevels} speed={speed} data={liftB} />
            <Shaft>{levels.map(shaftButtons)}</Shaft>
        </div>
    );
};

export default BlockSystem;
