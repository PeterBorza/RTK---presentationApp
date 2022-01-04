import { FC } from "react";
import { levelsSelector, liftsState } from "../selectors";
import { setActive, changePosition, setDirection } from "../liftSlice";
import { useDispatch, useSelector } from "react-redux";
import { toggleBuilding, liftOpenSelector } from "../../../app/";
import { BuildingMessages as msg } from "..";
import LiftButton from "../LiftButton";
import { DataRow } from "../Lift";
import { Button } from "../../../shared-components";

import styles from "./Building.module.scss";
import { Lift as LiftProps, directions } from "../state";
import LiftSystem from "../LiftSystem";
import BlockSystem from "../BlockSystem";

type LevelCount = number;
type LiftName = "A" | "B";

const Building: FC = () => {
    const openSideBar = useSelector(liftOpenSelector);
    const levels = useSelector(levelsSelector);
    const [liftA, liftB] = useSelector(liftsState);
    const dispatch = useDispatch();

    const { isActive: activeA, position: positionA } = liftA;
    const { isActive: activeB, position: positionB } = liftB;

    const [A_down, A_up, , B_down, B_up] = directions;

    const moveElevator = (name: LiftName, position: number) =>
        dispatch(changePosition({ name, position }));

    const toggleActive = (name: LiftName, isActive: boolean) =>
        dispatch(setActive({ name, isActive }));

    const getDirectionsOfA = (level: LevelCount) => {
        level < positionA && dispatch(setDirection(A_down));
        level > positionA && dispatch(setDirection(A_up));
    };

    const getDirectionsOfB = (level: LevelCount) => {
        level < positionB && dispatch(setDirection(B_down));
        level > positionB && dispatch(setDirection(B_up));
    };

    const menuButton = (
        <Button
            className={styles.menuButton}
            onClick={() => dispatch(toggleBuilding(!openSideBar))}
            value={msg.MENU_BUTTON}
            displayed={!openSideBar}
        />
    );

    const liftA_ButtonHandler = (level: LevelCount) => {
        moveElevator("A", level);
        getDirectionsOfA(level);
        toggleActive("A", false);
    };

    const liftB_ButtonHandler = (level: LevelCount) => {
        moveElevator("B", level);
        getDirectionsOfB(level);
        toggleActive("B", false);
    };

    const liftA_Panel = levels.map(level => (
        <LiftButton
            key={`liftA-button-${level}`}
            onClick={() => liftA_ButtonHandler(level)}
            disabled={false}
            value={level}
            selected={level === positionA}
        />
    ));

    const liftB_Panel = levels.map(level => (
        <LiftButton
            key={`liftB-button-${level}`}
            onClick={() => liftB_ButtonHandler(level)}
            disabled={false}
            value={level}
            selected={level === positionB}
        />
    ));

    const liftData = (lift: LiftProps) =>
        Object.entries(lift).map(item => (
            <DataRow key={item[0]} label={item[0]} value={item[1]} />
        ));

    return (
        <div className={styles.container}>
            {menuButton}
            <div className={styles.systemContainer}>
                <LiftSystem
                    activated={activeA}
                    panel={liftA_Panel}
                    liftData={liftData(liftA)}
                />
                <BlockSystem />
                <LiftSystem
                    activated={activeB}
                    panel={liftB_Panel}
                    liftData={liftData(liftB)}
                />
            </div>
        </div>
    );
};

export default Building;
