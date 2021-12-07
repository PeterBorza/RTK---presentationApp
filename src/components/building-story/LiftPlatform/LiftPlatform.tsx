import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Building } from "..";
import { AsidePlatform, Button } from "../../../reusables";

import { liftState, positionState } from "../selectors";

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

const LiftPlatform: FC = () => {
	const { numberOfLevels, isDisabled, liftHeight, liftWidth, speed } =
		useSelector(liftState);
	const { positionA, positionB, positionFloor } = useSelector(positionState);
	const openSideBar = useSelector(liftOpenSelector);
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

	const handleOnClose = () => {
		dispatch(toggleBuilding(false));
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
	return (
		<AsidePlatform
			isOpen={openSideBar}
			onClose={handleOnClose}
			renderHeader={sideBarHeaderTitle}
			renderSideBar={sideBarBody}
		>
			<Building />
		</AsidePlatform>
	);
};

export default LiftPlatform;
