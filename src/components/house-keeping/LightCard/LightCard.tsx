import React from "react";
import { LightState } from "../houseSlice";
import { FaCheck, FaExclamationTriangle } from "react-icons/fa";

import styles from "./LightCard.module.scss";
import classNames from "classnames";

const LightCard: React.FC<LightState> = ({
	lightUnits,
	lightUnitsReadingDate,
	sumOfLightBill,
	isLightBillPayed,
	lightUsage,
}) => {
	return (
		<div className={styles.wrapper}>
			<h3 className={styles.data}>
				Data: <span>{lightUnitsReadingDate}</span>
			</h3>
			<h3 className={styles.data}>
				Citire: <span>{lightUnits}</span>
			</h3>
			<h3 className={styles.data}>
				Consum: <span>{lightUsage}</span>
			</h3>
			<h3 className={styles.data}>
				Factura: <span>{sumOfLightBill}</span>
			</h3>
			{isLightBillPayed ? (
				<FaCheck className={styles.green} />
			) : (
				<FaExclamationTriangle className={styles.red} />
			)}
		</div>
	);
};

export default LightCard;
