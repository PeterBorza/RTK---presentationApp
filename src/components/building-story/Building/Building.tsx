import React, { useEffect } from "react";

import { liftState, positionState, levelsNumberState } from "../selectors";
import LiftButton from "../LiftButton";
import { Button } from "../../../reusables";

import { moveLiftA, moveLiftB, movePosition } from "../liftSlice";

import { useDispatch, useSelector } from "react-redux";

import classNames from "classnames";
import styles from "./Building.module.scss";
import { toggleBuilding } from "../../../app/appSlice";
import { liftOpenSelector } from "../../../app/selectors";
import { BuildingMessages, LiftCabin } from "..";

type LevelCount = number;

const Building: React.FC = () => {
	const openSideBar = useSelector(liftOpenSelector);
	const dispatch = useDispatch();

	const { numberOfLevels, isDisabled, positionFloor } =
		useSelector(liftState);
	const { positionA, positionB } = useSelector(positionState);
	const levelNumber = useSelector(levelsNumberState);

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

	return (
		<div className={styles.container}>
			{!openSideBar && (
				<Button
					className={styles.menuButton}
					onClick={() => dispatch(toggleBuilding(!openSideBar))}
					value={BuildingMessages.MENU_BUTTON}
				/>
			)}
			<div className={styles.block}>
				<LiftCabin openDoors={false} />
			</div>
		</div>
	);
};

export default Building;
