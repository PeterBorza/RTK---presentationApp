import { useEffect } from "react";
import { Direction, LevelCount, Lift } from "../state";
import { levelsSelector, levelsState, liftsState, speedState } from "../selectors";
import { setMovingLift } from "../liftSlice";
import { useDispatch, useSelector } from "react-redux";
import { LiftCabin } from "..";
import LiftButton from "../LiftButton";
import Shaft from "../Shaft";

import styles from "./BlockSystem.module.scss";

const BlockSystem = () => {
    const numberOfLevels = useSelector(levelsState);
    const [liftA, liftB] = useSelector(liftsState);
    const levels = useSelector(levelsSelector);
    const speed = useSelector(speedState);
    const dispatch = useDispatch();

    const { position: positionA, isMoving: isMovingA } = liftA;
    const { position: positionB, isMoving: isMovingB } = liftB;

    const stopLiftHandler = (lift: Lift) => {
        const newLift: Lift = {
            ...lift,
            isMoving: false,
            isActive: false,
            direction: "static",
        };
        dispatch(setMovingLift(newLift));
    };

    useEffect(() => {
        isMovingA && setTimeout(() => stopLiftHandler(liftA), speed);
        isMovingB && setTimeout(() => stopLiftHandler(liftB), speed);
    }, [isMovingA, isMovingB, speed, stopLiftHandler]);

    const checkPos = (level: LevelCount, position: number): Direction => {
        if (level === position) return "static";
        return level < position ? "down" : "up";
    };

    const moveLiftHandler = (level: number, lift: Lift) => {
        const newLift: Lift = {
            ...lift,
            isMoving: true,
            position: level,
            direction: checkPos(level, lift.position),
            isActive: true,
        };
        dispatch(setMovingLift(newLift));
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
