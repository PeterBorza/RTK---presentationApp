import { FC } from "react";
import { levelsState, liftsState, speedState } from "../selectors";
import { activate, moveLift } from "../liftSlice";
import { useDispatch, useSelector } from "react-redux";
import { toggleBuilding, liftOpenSelector } from "../../../app/";
import { BuildingMessages as msg, LiftCabin } from "..";
import LiftButton from "../LiftButton";
import Shaft from "../Shaft";
import Lift, { DataRow } from "../Lift";
import { Button } from "../../../shared-components";

import classNames from "classnames";
import styles from "./Building.module.scss";
import { Lift as LiftProps } from "../state";

type LevelCount = number;
type LiftName = "A" | "B";

const Building: FC = () => {
    const openSideBar = useSelector(liftOpenSelector);
    const numberOfLevels = useSelector(levelsState);
    const [liftA, liftB] = useSelector(liftsState);
    const speed = useSelector(speedState);
    const dispatch = useDispatch();

    const {
        name: A,
        isActive: activeA,
        position: positionA,
        disabled: disabledA,
        direction: directionA,
    } = liftA;
    const {
        name: B,
        isActive: activeB,
        position: positionB,
        disabled: disabledB,
        direction: directionB,
    } = liftB;

    const liftWrapper = (active: boolean) =>
        classNames(styles.liftWrapper, {
            [styles.liftWrapper__show]: active,
        });

    const myLevels = new Array(numberOfLevels).fill(0).map((_, idx) => idx);

    const animateDoors = (name: LiftName, isActive: boolean) =>
        dispatch(activate({ name, isActive }));

    const moveElevator = (name: LiftName, position: number) =>
        dispatch(moveLift({ name, position }));

    const moveA = (position: number) => {
        animateDoors("A", position === positionA);
        moveElevator("A", position);
    };

    const moveB = (position: number) => {
        animateDoors("B", position === positionB);
        moveElevator("B", position);
    };

    const handlePositionClick = (level: LevelCount) => {
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

    const menuButton = (
        <Button
            className={styles.menuButton}
            onClick={() => dispatch(toggleBuilding(!openSideBar))}
            value={msg.MENU_BUTTON}
            displayed={!openSideBar}
        />
    );

    const liftStyle = (left: string, position: number) => {
        return {
            left,
            transform: `translateY(${-position * 100}%)`,
            transition: `all ${speed}ms ease-out`,
            height: `${100 / numberOfLevels}%`,
        };
    };

    const shaftButtons = myLevels.map(level => (
        <LiftButton
            key={`Shaft-button-${level}`}
            onClick={() => handlePositionClick(level)}
            disabled={false}
            value={level}
            isActive={level === positionA || level === positionB}
        />
    ));

    const liftA_Panel = myLevels.map(level => (
        <LiftButton
            key={`liftA-button-${level}`}
            onClick={() => moveA(level)}
            disabled={false}
            value={level}
            isActive={level === positionA}
        />
    ));

    const liftB_Panel = myLevels.map(level => (
        <LiftButton
            key={`liftB-button-${level}`}
            onClick={() => moveB(level)}
            disabled={false}
            value={level}
            isActive={level === positionB}
        />
    ));

    const liftData = (lift: LiftProps) =>
        Object.entries(lift).map(item => (
            <DataRow key={item[0]} label={item[0]} value={item[1]} />
        ));

    return (
        <div className={styles.container}>
            {menuButton}
            <div className={liftWrapper(activeA)}>
                <Lift panel={liftA_Panel} liftData={liftData(liftA)} />
            </div>
            <div className={styles.block}>
                <LiftCabin
                    openDoors={activeA}
                    onClick={() => animateDoors("A", !activeA)}
                    properties={liftStyle("0", positionA)}
                />
                <LiftCabin
                    openDoors={activeB}
                    onClick={() => animateDoors("B", !activeB)}
                    properties={liftStyle("58%", positionB)}
                />
                <Shaft>{shaftButtons}</Shaft>
            </div>
            <div className={liftWrapper(activeB)}>
                <Lift panel={liftB_Panel} liftData={liftData(liftB)} />
            </div>
        </div>
    );
};

export default Building;
