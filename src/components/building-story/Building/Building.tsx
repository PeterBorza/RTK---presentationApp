import React, { useEffect } from "react";

import {
	liftState,
	positionState,
	isSideBarOpen,
	levelsNumberState,
} from "../selectors";
import LiftButtons from "../LiftButtons";
import LiftButton from "../LiftButton";

import { moveLiftA, moveLiftB, movePosition } from "../liftSlice";

import { useDispatch, useSelector } from "react-redux";

import classNames from "classnames";
import styles from "./Building.module.scss";
import { toggleLiftSidePanel } from "..";

type LevelCount = number;

const Building: React.FC = () => {
	const { numberOfLevels, isDisabled } = useSelector(liftState);
	const { positionA, positionB, positionFloor } = useSelector(positionState);
	const isOpen = useSelector(isSideBarOpen);
	const levelNumber = useSelector(levelsNumberState);
	const dispatch = useDispatch();

	const myLevels = new Array(levelNumber).fill(0).map((_, idx) => idx);

	const isButtonActive = (myLiftPosition: LevelCount, position: LevelCount) =>
		classNames(
			myLiftPosition === position ? [styles.red] : [styles.lightgrey]
		);

	useEffect(() => {
		if (positionFloor > numberOfLevels) {
			dispatch(movePosition(numberOfLevels - 1));
		}
	}, [dispatch, numberOfLevels, positionFloor]);

	const handleAliftClick = (level: LevelCount) => {
		if (level === positionA) return;
		dispatch(moveLiftA(level));
	};

	const handleBliftClick = (level: LevelCount) => {
		if (level === positionB) return;
		dispatch(moveLiftB(level));
	};

	const handlePositionClick = (level: LevelCount) => {
		dispatch(movePosition(level));

		const difA = Math.abs(positionA - level);
		const difB = Math.abs(positionB - level);

		difA < difB
			? dispatch(moveLiftA(level))
			: difA > difB
			? dispatch(moveLiftB(level))
			: positionA <= positionB
			? dispatch(moveLiftA(level))
			: dispatch(moveLiftB(level));
	};

	const liftAButtonGroup = (level: number) => {
		return (
			<LiftButton
				key={`A-${level}`}
				onClick={() => handleAliftClick(level)}
				className={isButtonActive(positionA, level)}
				disabled={isDisabled}
				value={level}
			/>
		);
	};

	const liftBButtonGroup = (level: number) => {
		return (
			<LiftButton
				key={`B-${level}`}
				onClick={() => handleBliftClick(level)}
				className={isButtonActive(positionB, level)}
				disabled={isDisabled}
				value={level}
			/>
		);
	};

	const shaftButtonGroup = (level: number) => {
		return (
			<LiftButton
				key={`SHAFT-${level}`}
				onClick={() => handlePositionClick(level)}
				className={isButtonActive(positionFloor, level)}
				disabled={isDisabled}
				value={level}
			/>
		);
	};

	const shafts = [
		{
			label: "A",
			render: myLevels.map(liftAButtonGroup),
		},
		{
			label: "B",
			render: myLevels.map(liftBButtonGroup),
		},
		{
			label: "Level",
			render: myLevels.map(shaftButtonGroup),
		},
	];

	return (
		<div className={styles.container}>
			<div className={styles.menuButtonWrapper}>
				<button
					className={styles.menuButton}
					onClick={() => dispatch(toggleLiftSidePanel(!isOpen))}
				>
					Menu
				</button>
			</div>
			{!isDisabled ? (
				<div className={styles.full}>
					{shafts.map(button => (
						<LiftButtons
							label={button.label}
							renderButtons={() => button.render}
							key={button.label}
						/>
					))}
				</div>
			) : (
				<div className={styles.empty}>
					<h2>Under construction</h2>
				</div>
			)}
		</div>
	);
};

export default Building;
