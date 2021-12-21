import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Building, BuildingMessages, Lift } from "..";
import { AsidePlatform } from "../../../shared-components";

import { liftState } from "../selectors";
// import { FaArrowDown, FaArrowUp, FaBan } from "react-icons/fa";

// import LiftButton from "../LiftButton";
// import DataRow from "../Lift/DataRow";

// import { moveLiftA, moveLiftB, setLevelNumber } from "../liftSlice";

import { liftOpenSelector, toggleBuilding } from "../../../app";

// import classNames from "classnames";
// import styles from "./LiftPlatform.module.scss";

const LiftPlatform: FC = () => {
    // const { numberOfLevels, isDisabled, speed, positionFloor } =
    // useSelector(liftState);

    // const myLevels = new Array(numberOfLevels).fill(0).map((_, idx) => idx);
    // const topLevel = numberOfLevels - 1;

    const openSideBar = useSelector(liftOpenSelector);
    const dispatch = useDispatch();

    return (
        <AsidePlatform
            isOpen={openSideBar}
            onClose={() => dispatch(toggleBuilding(false))}
            label={BuildingMessages.HEADER_TITLE}
            renderSideBar={() => <Lift panel="buttons" liftData="data" />}
        >
            <Building />
        </AsidePlatform>
    );
};

export default LiftPlatform;
