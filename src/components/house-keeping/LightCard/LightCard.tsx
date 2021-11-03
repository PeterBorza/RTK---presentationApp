import React from "react";
import { LightState } from "../types";
import { FaCheck, FaExclamationTriangle } from "react-icons/fa";

import styles from "./LightCard.module.scss";
import classNames from "classnames";

export interface Props {
	onClick: () => void;
}

const LightCard: React.FC<LightState & Props> = ({
	id,
	units,
	selected,
	onClick,
}) => {
	const {
		lightUnitsReadingDate,
		lightUnits,
		lightUsage,
		sumOfLightBill,
		isLightBillPayed,
	} = units;
	const classes = classNames(styles.wrapper, {
		[styles["selected"]]: selected,
	});

	return (
		<div className={classes} onClick={onClick}>
			<p className={styles.data}>{lightUnitsReadingDate}</p>
			<p className={styles.data}>{lightUnits}</p>
			<p className={styles.data}>{lightUsage}</p>
			<p className={styles.data}>{sumOfLightBill}</p>
			<p>
				{isLightBillPayed ? (
					<FaCheck className={styles.green} />
				) : (
					<FaExclamationTriangle className={styles.red} />
				)}
			</p>
		</div>
	);
};

export default LightCard;
