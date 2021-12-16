import React, { CSSProperties, useEffect } from "react";

import { liftState, speedSelector } from "../selectors";
import LiftButton from "../LiftButton";
import { Button } from "../../../reusables";

import { movePosition } from "../liftSlice";

import { useDispatch, useSelector } from "react-redux";

// import classNames from "classnames";
import styles from "./Building.module.scss";
import { toggleBuilding, liftOpenSelector } from "../../../app/";
import { BuildingMessages, LiftCabin } from "..";
import Shaft from "../Shaft";

type LevelCount = number;

const Building: React.FC = () => {
	const openSideBar = useSelector(liftOpenSelector);
	// const speed = useSelector(speedSelector);
	const { numberOfLevels, positionFloor } = useSelector(liftState);
	const dispatch = useDispatch();

	const myLevels = new Array(numberOfLevels).fill(0).map((_, idx) => idx);
	const topLevel = numberOfLevels - 1;

	useEffect(() => {
		if (positionFloor > numberOfLevels) {
			dispatch(movePosition(topLevel));
		}
	}, [dispatch, numberOfLevels, positionFloor]);

	const handlePositionClick = (level: LevelCount) => {
		dispatch(movePosition(level));

		// const difA = Math.abs(liftA.position - level);
		// const difB = Math.abs(liftB.position - level);

		// difA < difB
		// 	? dispatch(moveLiftA(level))
		// 	: difA > difB
		// 	? dispatch(moveLiftB(level))
		// 	: liftA.position <= liftB.position
		// 	? dispatch(moveLiftA(level))
		// 	: dispatch(moveLiftB(level));
	};

	const menuButton = !openSideBar && (
		<Button
			className={styles.menuButton}
			onClick={() => dispatch(toggleBuilding(!openSideBar))}
			value={BuildingMessages.MENU_BUTTON}
		/>
	);

	// const toggleOpenDoorsOfA = () => {
	// 	dispatch(toggleBuilding(true));
	// };

	// const toggleOpenDoorsOfB = () => {
	// 	dispatch(toggleBuilding(true));
	// };
	// const liftAStyle: CSSProperties = {
	// 	left: "0",
	// 	bottom: "0",
	// 	// transform: `translateY(${-liftA.position * 100}%)`,
	// 	transition: `all ${speed}ms ease-out`,
	// };

	// const liftBStyle: CSSProperties = {
	// 	right: "0",
	// 	bottom: "0",
	// 	// transform: `translateY(${-liftB.position * 100}%)`,
	// 	transition: `all ${speed}ms ease-out`,
	// };

	const shaftButtons = myLevels.map(level => (
		<LiftButton
			onClick={() => handlePositionClick(level)}
			key={`Shaft-button-${level}`}
			disabled={false}
			value={level}
			isActive={level === positionFloor}
		/>
	));

	// try indexOf method with both lifts to get DRY code in slice !!!

	return (
		<div className={styles.container}>
			{menuButton}
			<div className={styles.block}>
				{/* <LiftCabin
					openDoors={liftA.isActive}
					onClick={toggleOpenDoorsOfA}
					properties={liftAStyle}
				/>
				<LiftCabin
					openDoors={liftB.isActive}
					onClick={toggleOpenDoorsOfB}
					properties={liftBStyle}
				/> */}
				<Shaft>{shaftButtons}</Shaft>
			</div>
		</div>
	);
};

export default Building;
