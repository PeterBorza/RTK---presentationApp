import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Building, toggleLiftSidePanel } from "..";
import { AsidePlatform } from "../../../reusables";

import styles from "./LiftPlatform.module.scss";

import {
	liftState,
	positionState,
	isSideBarOpen,
	levelsNumberState,
} from "../selectors";

import {
	moveLiftA,
	toggleButtons,
	moveLiftB,
	setLevelNumber,
} from "../liftSlice";

import classNames from "classnames";

const LiftPlatform: FC = () => {
	const { numberOfLevels, isDisabled, liftHeight, liftWidth, speed } =
		useSelector(liftState);
	const { positionA, positionB, positionFloor } = useSelector(positionState);
	const isOpen = useSelector(isSideBarOpen);
	const levelNumber = useSelector(levelsNumberState);
	const [levelInput, setLevelInput] = useState(numberOfLevels);
	const dispatch = useDispatch();

	// console.log({ levelNumber, levelInput });

	const disabledClass = classNames(
		isDisabled ? [styles.disabled] : [styles.active]
	);

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

	const sideBarHeaderTitle = () => {
		return <h1>Lift</h1>;
	};

	const renderLiftContent = () => {
		return <Building />;
	};

	const handleOnClose = () => {
		dispatch(toggleLiftSidePanel(false));
	};

	const sideBarBody = () => {
		return (
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
				<div>
					<div>
						<button
							onClick={handleNumberOfLevels}
							style={{ marginTop: "10px" }}
						>
							Set number of levels
						</button>
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
	return (
		<AsidePlatform
			isOpen={isOpen}
			renderBody={renderLiftContent}
			onClose={handleOnClose}
			renderHeader={sideBarHeaderTitle}
			renderSideBar={sideBarBody}
		/>
	);
};

export default LiftPlatform;
