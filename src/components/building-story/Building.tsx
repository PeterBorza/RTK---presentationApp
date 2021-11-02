import React, { useState, useEffect } from "react";

import {
	moveLiftA,
	liftState,
	positionState,
	toggleButtons,
	moveLiftB,
	movePosition,
	setLevelNumber,
	setLevelArray,
} from "./liftSlice";

import { useDispatch, useSelector } from "react-redux";

import styles from "./Building.module.scss";

interface Style {
	pos1: number;
	pos2: number;
}

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

	const style = (style: Style) => {
		return {
			backgroundColor: style.pos1 === style.pos2 ? "red" : "lightgrey",
		};
	};
	return (
		<div className={styles.container}>
			<button onClick={() => dispatch(toggleButtons())}>
				enable/disable liftbuttons
			</button>
			<p>A: {positionA}</p>
			<p>B: {positionB}</p>
			<p>Lift is at floor: {positionFloor}</p>
			<p>height: {liftHeight}</p>
			<p>width: {liftWidth}</p>
			<p>levels: {numberOfLevels}</p>
			<p>speed: {speed}</p>
			<p>
				disabled:{" "}
				<span
					style={isDisabled ? { color: "red" } : { color: "black" }}
				>
					{String(isDisabled)}
				</span>
			</p>
			{!isDisabled ? (
				<div className={styles.full}>
					<div>
						A:{" "}
						{levelArray.map(level => (
							<button
								key={`A${level}`}
								onClick={() => handleAliftClick(level)}
								style={style({ pos1: positionA, pos2: level })}
								disabled={isDisabled}
							>
								{level}
							</button>
						))}
					</div>
					<br />
					<div>
						B:{" "}
						{levelArray.map(level => (
							<button
								key={`B${level}`}
								onClick={() => handleBliftClick(level)}
								style={style({ pos1: positionB, pos2: level })}
								disabled={isDisabled}
							>
								{level}
							</button>
						))}
					</div>
					<br />
					<div>
						Level:{" "}
						{levelArray.map(level => (
							<button
								key={`Shaft${level}`}
								onClick={() => handlePositionClick(level)}
								style={style({
									pos1: positionFloor,
									pos2: level,
								})}
								disabled={isDisabled}
							>
								{level}
							</button>
						))}
					</div>
				</div>
			) : (
				<div className={styles.empty}>
					<h2>Under construction</h2>
				</div>
			)}
			<input
				type='number'
				min='3'
				max='11'
				value={levelInput}
				onChange={e => setLevelInput(Number(e.target.value))}
			/>
			<button
				onClick={() => handleNumberOfLevels()}
				style={{ marginTop: "10px" }}
			>
				Set number of levels
			</button>
		</div>
	);
};

export default Building;
