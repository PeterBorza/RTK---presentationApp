import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Building, BuildingMessages, Lift } from "..";
import { AsidePlatform, Button } from "../../../reusables";

import { liftState, positionState, levelsNumberState } from "../selectors";
import { FaArrowDown, FaBan } from "react-icons/fa";

import LiftButton from "../LiftButton";
import DataRow from "../Lift/DataRow";

import {
	moveLiftA,
	toggleButtons,
	moveLiftB,
	setLevelNumber,
} from "../liftSlice";

import { liftOpenSelector } from "../../../app/selectors";
import { toggleBuilding } from "../../../app/appSlice";

import classNames from "classnames";
import styles from "./LiftPlatform.module.scss";

type LevelCount = number;

const LiftPlatform: FC = () => {
	const levelNumber = useSelector(levelsNumberState);
	const myLevels = new Array(levelNumber).fill(0).map((_, idx) => idx);
	const {
		numberOfLevels,
		isDisabled,
		liftHeight,
		liftWidth,
		speed,
		positionFloor,
	} = useSelector(liftState);
	const { positionA, positionB } = useSelector(positionState);
	const openSideBar = useSelector(liftOpenSelector);
	const [levelInput, setLevelInput] = useState(numberOfLevels);
	const dispatch = useDispatch();

	const isButtonActive = (myLiftPosition: LevelCount, position: LevelCount) =>
		classNames(
			myLiftPosition === position ? [styles.red] : [styles.lightgrey]
		);

	const disabledClass = classNames(
		isDisabled ? [styles.disabled] : [styles.active]
	);

	const buttonStatus = !isDisabled ? (
		<div className={styles.enabledIcon} />
	) : (
		<FaBan />
	);

	// *****************************************************************
	// *****************************************************************

	const liftA_data = [
		{
			label: "Lift",
			value: "A",
		},
		{
			label: "Top Level",
			value: levelNumber - 1,
		},
		{
			label: "Direction",
			value: <FaArrowDown />,
		},
		{
			label: "Floor",
			value: positionA,
		},
		{
			label: "Buttons",
			value: buttonStatus,
		},
	];

	const liftB_data = [
		{
			label: "Lift",
			value: "B",
		},
		{
			label: "Top Level",
			value: levelNumber - 1,
		},
		{
			label: "Direction",
			value: <FaArrowDown />,
		},
		{
			label: "Floor",
			value: positionB,
		},
		{
			label: "Buttons",
			value: buttonStatus,
		},
	];

	// *****************************************************************
	// *****************************************************************

	const handleNumberOfLevels = () => {
		const topFloor = levelInput - 1;
		dispatch(setLevelNumber(levelInput));

		if (positionA > levelInput) dispatch(moveLiftA(topFloor));
		if (positionB > levelInput) dispatch(moveLiftB(topFloor));
	};

	const sideBarBody = () => {
		return (
			<div>
				<Button
					onClick={() => dispatch(toggleButtons())}
					value={isDisabled ? "enable buttons" : "disable buttons"}
				/>

				<p>A: {positionA}</p>
				<p>B: {positionB}</p>
				<p>Lift is at floor: {positionFloor}</p>
				<p>height: {liftHeight}</p>
				<p>width: {liftWidth}</p>
				<p>levels: {numberOfLevels}</p>
				<p>speed: {speed}</p>
				<p>
					disabled:
					<span className={disabledClass}>
						{isDisabled ? "YES" : "NO"}
					</span>
				</p>
				<div>
					<div>
						<Button
							onClick={handleNumberOfLevels}
							value='Set number of levels'
						/>
						<input
							type='number'
							min='3'
							max='11'
							value={levelInput}
							onChange={e =>
								setLevelInput(Number(e.target.value))
							}
						/>
					</div>
				</div>
			</div>
		);
	};

	// *****************************************************************
	// *****************************************************************

	const liftA_buttonsHandler = (button: number) => {
		if (button === positionA) return;
		dispatch(moveLiftA(button));
	};

	const liftB_buttonsHandler = (button: number) => {
		if (button === positionB) return;
		dispatch(moveLiftB(button));
	};

	const panel_A = myLevels.map(button => (
		<LiftButton
			value={button}
			onClick={() => liftA_buttonsHandler(button)}
			key={`panelA${button}`}
		/>
	));

	const panel_B = myLevels.map(button => (
		<LiftButton
			value={button}
			onClick={() => liftB_buttonsHandler(button)}
			key={`panelB${button}`}
		/>
	));

	const liftAPanel = liftA_data.map((data, index) => (
		<DataRow key={`A${index}`} {...data} />
	));
	const liftBPanel = liftB_data.map((data, index) => (
		<DataRow key={`B${index}`} {...data} />
	));

	return (
		<AsidePlatform
			isOpen={openSideBar}
			onClose={() => dispatch(toggleBuilding(false))}
			label={BuildingMessages.HEADER_TITLE}
			renderSideBar={() => <Lift panel={panel_A} liftData={liftAPanel} />}
		>
			<Building />
		</AsidePlatform>
	);
};

export default LiftPlatform;
