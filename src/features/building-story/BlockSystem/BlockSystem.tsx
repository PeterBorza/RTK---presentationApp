import { useCallback, useEffect, useRef } from "react";
import { LiftName } from "../state";
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
    const liftARef = useRef<HTMLDivElement>(null);
    const liftBRef = useRef<HTMLDivElement>(null);

    const { isActive: activeA, position: positionA, isMoving: isMovingA } = liftA;
    const { isActive: activeB, position: positionB, isMoving: isMovingB } = liftB;

    const startMoving = useCallback(
        (name: LiftName) => dispatch(moveLift({ name, isMoving: true })),
        [dispatch],
    );

    const stopMoving = useCallback(
        (name: LiftName) => dispatch(moveLift({ name, isMoving: false })),
        [dispatch],
    );

    const liftIsStatic = useCallback(
        (name: LiftName, moving: boolean) =>
            !moving && dispatch(setDirection({ name, direction: "static" })),
        [dispatch],
    );

    const liftHasArrived = useCallback(
        (name: LiftName) => {
            stopMoving(name);
            dispatch(setActive({ name, isActive: false }));
            dispatch(setDirection({ name, direction: "static" }));
            liftIsStatic("A", isMovingA);
            liftIsStatic("B", isMovingB);
        },
        [stopMoving, dispatch, liftIsStatic, isMovingA, isMovingB],
    );

    useEffect(() => {
        isMovingA && setTimeout(() => liftHasArrived("A"), speed);
        isMovingB && setTimeout(() => liftHasArrived("B"), speed);
    }, [isMovingA, isMovingB, speed, liftHasArrived]);

    const moveElevator = (name: LiftName, position: LevelCount) =>
        dispatch(changePosition({ name, position }));

    const getDirectionsOfA = (level: LevelCount) => {
        level < positionA && dispatch(setDirection({ name: "A", direction: "down" }));
        level > positionA && dispatch(setDirection({ name: "A", direction: "up" }));
    };

    const getDirectionsOfB = (level: LevelCount) => {
        level < positionB && dispatch(setDirection({ name: "B", direction: "down" }));
        level > positionB && dispatch(setDirection({ name: "B", direction: "up" }));
    };

    const moveA = (position: LevelCount) => {
        startMoving("A");
        moveElevator("A", position);
        getDirectionsOfA(position);
    };

    const moveB = (position: LevelCount) => {
        startMoving("B");
        moveElevator("B", position);
        getDirectionsOfB(position);
    };

    const shaft_ButtonsHandler = (level: LevelCount) => {
        if (positionA === level) {
            dispatch(setActive({ name: "A", isActive: !activeA }));
            stopMoving("A");
        }
        if (positionB === level) {
            dispatch(setActive({ name: "B", isActive: !activeB }));
            stopMoving("B");
        }
        const difA = Math.abs(positionA - level);
        const difB = Math.abs(positionB - level);

        difA < difB
            ? moveA(level)
            : difA > difB
            ? moveB(level)
            : positionA <= positionB
            ? moveA(level)
            : moveB(level);
    };

    const shaftButtons = levels.map(level => (
        <LiftButton
            key={`Shaft-button-${level}`}
            onClick={() => shaft_ButtonsHandler(level)}
            disabled={false}
            value={level}
            selected={false}
        />
    ));

    return (
        <div className={styles.blockContainer}>
            <LiftCabin levelCount={numberOfLevels} speed={speed} data={liftA} ref={liftARef} />
            <LiftCabin levelCount={numberOfLevels} speed={speed} data={liftB} ref={liftBRef} />
            <Shaft>{shaftButtons}</Shaft>
        </div>
    );
};

export default BlockSystem;
