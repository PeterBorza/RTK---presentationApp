import React, { useState, useEffect } from "react";

import { liftState, positionState } from "../selectors";
import LiftButtons from "../LiftButtons";
import LiftButton from "../LiftButton";

import {
	moveLiftA,
	toggleButtons,
	moveLiftB,
	movePosition,
	setLevelNumber,
	setLevelArray,
} from "../liftSlice";

import { useDispatch, useSelector } from "react-redux";

import classNames from "classnames";
import styles from "./Building.module.scss";

type LevelCount = number;

const Building: React.FC = () => {
	const {
		numberOfLevels,
		levelArray,
		isDisabled,
		liftHeight,
		liftWidth,
		speed,
	} = useSelector(liftState);
	const { positionA, positionB, positionFloor } = useSelector(positionState);
	const [levelInput, setLevelInput] = useState(numberOfLevels);
	const dispatch = useDispatch();

	const disabledClass = classNames(
		isDisabled ? [styles.disabled] : [styles.active]
	);

	const isButtonActive = (myLiftPosition: LevelCount, position: LevelCount) =>
		classNames(
			myLiftPosition === position ? [styles.red] : [styles.lightgrey]
		);

	useEffect(() => {
		dispatch(setLevelArray(numberOfLevels));
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

	const handleNumberOfLevels = () => {
		const topFloor = levelInput - 1;
		dispatch(setLevelNumber(levelInput));

		if (positionA > levelInput) {
			dispatch(moveLiftA(topFloor));
		}

		if (positionB > levelInput) {
			dispatch(moveLiftB(topFloor));
		}
	};

	const shafts = [
		{
			label: "A",
			render: levelArray.map(level => {
				return (
					<LiftButton
						key={`A-${level}`}
						onClick={() => handleAliftClick(level)}
						className={isButtonActive(positionA, level)}
						disabled={isDisabled}
						value={level}
					/>
				);
			}),
		},
		{
			label: "B",
			render: levelArray.map(level => {
				return (
					<LiftButton
						key={`B-${level}`}
						onClick={() => handleBliftClick(level)}
						className={isButtonActive(positionB, level)}
						disabled={isDisabled}
						value={level}
					/>
				);
			}),
		},
		{
			label: "Level",
			render: levelArray.map(level => {
				return (
					<LiftButton
						key={`SHAFT-${level}`}
						onClick={() => handlePositionClick(level)}
						className={isButtonActive(positionFloor, level)}
						disabled={isDisabled}
						value={level}
					/>
				);
			}),
		},
	];

	return (
		<div className={styles.container}>
			<div>
				<button onClick={() => dispatch(toggleButtons())}>
					{isDisabled ? "enable buttons" : "disable buttons"}
				</button>
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
			</div>
			{!isDisabled ? (
				<div className={styles.full}>
					{shafts.map(button => (
						<LiftButtons
							label={button.label}
							renderButtons={() => button.render}
						/>
					))}
				</div>
			) : (
				<div className={styles.empty}>
					<h2>Under construction</h2>
				</div>
			)}
			<div>
				<button
					onClick={() => handleNumberOfLevels()}
					style={{ marginTop: "10px" }}
				>
					Set number of levels
				</button>
				<input
					type='number'
					min='3'
					max='11'
					value={levelInput}
					onChange={e => setLevelInput(Number(e.target.value))}
				/>
			</div>
		</div>
	);
};

export default Building;
