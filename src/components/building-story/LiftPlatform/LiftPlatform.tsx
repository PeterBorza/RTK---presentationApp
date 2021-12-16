import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
	// activateA,
	// activateB,
	Building,
	BuildingMessages,
	Lift,
	// setDirectionOfA,
	// setDirectionOfB,
} from "..";
import { AsidePlatform } from "../../../reusables";

import { liftState } from "../selectors";
import { FaArrowDown, FaArrowUp, FaBan } from "react-icons/fa";

import LiftButton from "../LiftButton";
import DataRow from "../Lift/DataRow";

// import { moveLiftA, moveLiftB, setLevelNumber } from "../liftSlice";

import { liftOpenSelector, toggleBuilding } from "../../../app";

import classNames from "classnames";
import styles from "./LiftPlatform.module.scss";

const LiftPlatform: FC = () => {
	const { numberOfLevels, isDisabled, speed, positionFloor } =
		useSelector(liftState);
	// const [liftA] = useSelector(lift_A_Selector);
	// const [liftB] = useSelector(lift_B_Selector);

	const myLevels = new Array(numberOfLevels).fill(0).map((_, idx) => idx);
	const topLevel = numberOfLevels - 1;

	const openSideBar = useSelector(liftOpenSelector);
	const dispatch = useDispatch();

	// const buttonAStatus = !liftA.buttonsDisabled ? (
	// 	<div className={styles.enabledIcon} />
	// ) : (
	// 	<FaBan />
	// );

	// const buttonBStatus = !liftB.buttonsDisabled ? (
	// 	<div className={styles.enabledIcon} />
	// ) : (
	// 	<FaBan />
	// );

	// const directionA =
	// 	liftA.direction === "down" ? (
	// 		<FaArrowDown />
	// 	) : liftA.direction === "up" ? (
	// 		<FaArrowUp />
	// 	) : liftA.direction === "up" ? (
	// 		"-"
	// 	) : null;

	// const directionB =
	// 	liftB.direction === "down" ? (
	// 		<FaArrowDown />
	// 	) : liftB.direction === "up" ? (
	// 		<FaArrowUp />
	// 	) : (
	// 		"-"
	// 	);

	// *****************************************************************
	// *****************************************************************

	// const liftA_data = [
	// 	{
	// 		label: "Lift",
	// 		value: liftA.name,
	// 	},
	// 	{
	// 		label: "Top Level",
	// 		value: topLevel,
	// 	},
	// 	{
	// 		label: "Direction",
	// 		value: directionA,
	// 	},
	// 	{
	// 		label: "Floor",
	// 		value: liftA.position,
	// 	},
	// 	{
	// 		label: "Buttons",
	// 		value: buttonAStatus,
	// 	},
	// ];

	// const liftB_data = [
	// 	{
	// 		label: "Lift",
	// 		value: liftB.name,
	// 	},
	// 	{
	// 		label: "Top Level",
	// 		value: topLevel,
	// 	},
	// 	{
	// 		label: "Direction",
	// 		value: directionB,
	// 	},
	// 	{
	// 		label: "Floor",
	// 		value: liftB.position,
	// 	},
	// 	{
	// 		label: "Buttons",
	// 		value: buttonBStatus,
	// 	},
	// ];

	// *****************************************************************
	// *****************************************************************

	const handleNumberOfLevels = () => {
		const topFloor = numberOfLevels - 1;
		// dispatch(setLevelNumber(numberOfLevels));

		// if (liftA.position > numberOfLevels) dispatch(moveLiftA(topFloor));
		// if (liftB.position > numberOfLevels) dispatch(moveLiftB(topFloor));
	};

	// *****************************************************************
	// *****************************************************************

	// const liftA_buttonsHandler = (button: number) => {
	// 	if (button === liftA.position) dispatch(setDirectionOfB("stop"));
	// 	if (button > liftA.position) dispatch(setDirectionOfA("up"));
	// 	if (button < liftA.position) dispatch(setDirectionOfA("down"));
	// 	dispatch(moveLiftA(button));
	// 	dispatch(activateA(false));
	// };

	// const liftB_buttonsHandler = (button: number) => {
	// 	if (button === liftB.position) dispatch(setDirectionOfB("stop"));
	// 	if (button > liftB.position) dispatch(setDirectionOfB("up"));
	// 	if (button < liftB.position) dispatch(setDirectionOfB("down"));
	// 	dispatch(moveLiftB(button));
	// 	dispatch(activateB(false));
	// };

	// const panel_A = myLevels.map(button => (
	// 	<LiftButton
	// 		value={button}
	// 		onClick={() => liftA_buttonsHandler(button)}
	// 		key={`panelA${button}`}
	// 		isActive={button === liftA.position}
	// 	/>
	// ));

	// const panel_B = myLevels.map(button => (
	// 	<LiftButton
	// 		value={button}
	// 		onClick={() => liftB_buttonsHandler(button)}
	// 		key={`panelB${button}`}
	// 		isActive={button === liftB.position}
	// 	/>
	// ));

	// const liftAPanel = liftA_data.map((data, index) => (
	// 	<DataRow key={`A${index}`} {...data} />
	// ));
	// const liftBPanel = liftB_data.map((data, index) => (
	// 	<DataRow key={`B${index}`} {...data} />
	// ));

	// const renderPanelA = <Lift panel={panel_A} liftData={liftAPanel} />;
	// const renderPanelB = <Lift panel={panel_B} liftData={liftBPanel} />;

	return (
		<AsidePlatform
			isOpen={openSideBar}
			onClose={() => dispatch(toggleBuilding(false))}
			label={BuildingMessages.HEADER_TITLE}
			renderSideBar={() => <Lift panel='buttons' liftData='data' />}
		>
			<Building />
		</AsidePlatform>
	);
};

export default LiftPlatform;
