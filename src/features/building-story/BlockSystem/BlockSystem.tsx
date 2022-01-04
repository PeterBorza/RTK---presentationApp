import { FC, useRef } from "react";
import {
    levelsSelector,
    levelsState,
    liftsState,
    speedState,
} from "../selectors";
import {
    setActive,
    changePosition,
    moveLift,
    setDirection,
} from "../liftSlice";
import { useDispatch, useSelector } from "react-redux";
import { LiftCabin } from "..";
import LiftButton from "../LiftButton";
import Shaft from "../Shaft";

import { directions } from "../state";
import styles from "./BlockSystem.module.scss";

type LevelCount = number;
type LiftName = "A" | "B";

const BlockSystem: FC = () => {
    const numberOfLevels = useSelector(levelsState);
    const [liftA, liftB] = useSelector(liftsState);
    const levels = useSelector(levelsSelector);
    const speed = useSelector(speedState);
    const dispatch = useDispatch();
    const liftARef = useRef<HTMLDivElement>(null);
    const liftBRef = useRef<HTMLDivElement>(null);

    const { isActive: activeA, position: positionA } = liftA;
    const { isActive: activeB, position: positionB } = liftB;

    const startMoving = (name: LiftName) =>
        dispatch(moveLift({ name, isMoving: true }));

    const stopMoving = (name: LiftName) =>
        dispatch(moveLift({ name, isMoving: false }));

    const toggleActive = (name: LiftName, isActive: boolean) =>
        dispatch(setActive({ name, isActive }));

    const moveElevator = (name: LiftName, position: number) =>
        dispatch(changePosition({ name, position }));

    const getDirectionsOfA = (level: LevelCount) => {
        level < positionA && dispatch(setDirection(A_down));
        level > positionA && dispatch(setDirection(A_up));
    };

    const getDirectionsOfB = (level: LevelCount) => {
        level < positionB && dispatch(setDirection(B_down));
        level > positionB && dispatch(setDirection(B_up));
    };

    const moveA = (position: number) => {
        // toggleActive("A", position === positionA);
        moveElevator("A", position);
        startMoving("A");
        getDirectionsOfA(position);
    };

    const moveB = (position: number) => {
        // toggleActive("B", position === positionB);
        moveElevator("B", position);
        startMoving("B");
        getDirectionsOfB(position);
    };

    const [A_down, A_up, , B_down, B_up, ,] = directions;

    const shaftButtonsHandler = (level: LevelCount) => {
        positionA === level && toggleActive("A", !activeA);
        positionB === level && toggleActive("B", !activeB);

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
            onClick={() => shaftButtonsHandler(level)}
            disabled={false}
            value={level}
            selected={level === positionA || level === positionB}
        />
    ));

    const closeDoors = (name: LiftName) => {
        stopMoving(name);
        toggleActive(name, true);
    };

    return (
        <div className={styles.blockContainer}>
            <LiftCabin
                levelCount={numberOfLevels}
                speed={speed}
                data={liftA}
                ref={liftARef}
                onArrival={() => closeDoors("A")}
            />
            <LiftCabin
                levelCount={numberOfLevels}
                speed={speed}
                data={liftB}
                ref={liftBRef}
                onArrival={() => closeDoors("B")}
            />
            <Shaft>{shaftButtons}</Shaft>
        </div>
    );
};

export default BlockSystem;
