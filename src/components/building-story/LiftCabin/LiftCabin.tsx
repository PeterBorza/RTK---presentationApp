import React, { FC } from "react";

import classNames from "classnames";
import styles from "./LiftCabin.module.scss";

interface Props {
	openDoors: boolean;
}

const LiftCabin: FC<Props> = ({ openDoors = false }) => {
	const cabinClasses = classNames(styles.cabinWrapper, {
		[styles.openDoors]: openDoors,
	});
	return <div className={cabinClasses}></div>;
};

export default LiftCabin;
