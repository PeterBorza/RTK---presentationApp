import { useCallback, useEffect, useMemo, useRef } from "react";
import { Direction, Lift, LiftName } from "../state";
import { levelsSelector, levelsState, liftsState, speedState } from "../selectors";
import { setActive, changePosition, moveLift, setDirection } from "../liftSlice";
import { useDispatch, useSelector } from "react-redux";
import { LiftCabin } from "..";
import LiftButton from "../LiftButton";
import Shaft from "../Shaft";

import styles from "./BlockSystem.module.scss";

type LevelCount = number;

const BlockSystem = () => {
    const numberOfLevels = useSelector(levelsState);
    const [liftA, liftB] = useSelector(liftsState);
    const levels = useSelector(levelsSelector);
    const speed = useSelector(speedState);
    const dispatch = useDispatch();
    const liftARef = useRef<HTMLDivElement | null>(null);
    const liftBRef = useRef<HTMLDivElement | null>(null);

    const { position: positionA, isMoving: isMovingA } = liftA;
    const { position: positionB, isMoving: isMovingB } = liftB;

    const startMoving = useCallback(
        (name: LiftName) => dispatch(moveLift({ name, isMoving: true })),
        [dispatch],
    );

    const stopMoving = useCallback(
        (name: LiftName) => dispatch(moveLift({ name, isMoving: false })),
        [dispatch],
    );

    const liftHasArrived = useCallback(
        (name: LiftName) => {
            stopMoving(name);
            dispatch(setActive({ name, isActive: false }));
            dispatch(setDirection({ name, direction: "static" }));
        },
        [stopMoving, dispatch],
    );

    useEffect(() => {
        isMovingA && setTimeout(() => liftHasArrived("A"), speed);
        isMovingB && setTimeout(() => liftHasArrived("B"), speed);
    }, [isMovingA, isMovingB, speed, liftHasArrived]);

    const moveElevator = useCallback(
        (name: LiftName, position: LevelCount) => dispatch(changePosition({ name, position })),
        [dispatch],
    );

    const setDirections = useCallback(
        (name: LiftName, direction: Direction) => dispatch(setDirection({ name, direction })),
        [dispatch],
    );

    const checkPos = (level: LevelCount, lift: Lift) => {
        return level < lift.position ? "down" : "up";
    };

    const setActivated = useCallback(
        (level: LevelCount, { name, position, isActive }: Lift) => {
            if (position === level) {
                dispatch(setActive({ name, isActive: !isActive }));
                stopMoving(name);
            }
        },
        [stopMoving, dispatch],
    );

    const setMove = useCallback(
        (position: LevelCount, lift: Lift) => {
            startMoving(lift.name);
            moveElevator(lift.name, position);
            setDirections(lift.name, checkPos(position, lift));
        },
        [startMoving, moveElevator, setDirections],
    );

    const shaft_ButtonsHandler = useCallback(
        (level: LevelCount) => {
            setActivated(level, liftA);
            setActivated(level, liftB);
            const difA = Math.abs(positionA - level);
            const difB = Math.abs(positionB - level);

            difA < difB
                ? setMove(level, liftA)
                : difA > difB
                ? setMove(level, liftB)
                : positionA <= positionB
                ? setMove(level, liftA)
                : setMove(level, liftB);
        },
        [liftA, liftB, positionA, positionB, setActivated, setMove],
    );

    const shaftButtons = useMemo(() => {
        return levels.map(level => (
            <LiftButton
                key={`Shaft-button-${level}`}
                onClick={() => shaft_ButtonsHandler(level)}
                disabled={false}
                value={level}
                selected={false}
            />
        ));
    }, [levels, shaft_ButtonsHandler]);

    return (
        <div className={styles.blockContainer}>
            <LiftCabin levelCount={numberOfLevels} speed={speed} data={liftA} ref={liftARef} />
            <LiftCabin levelCount={numberOfLevels} speed={speed} data={liftB} ref={liftBRef} />
            <Shaft>{shaftButtons}</Shaft>
        </div>
    );
};

export default BlockSystem;
