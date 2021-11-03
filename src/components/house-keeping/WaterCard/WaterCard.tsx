import React from "react";
import styles from "./WaterCard.module.scss";
import { WaterState } from "../types";
import { FaCheck, FaExclamationTriangle } from "react-icons/fa";

const WaterCard: React.FC<WaterState> = ({
	id,
	kitchenUnits,
	bathUnits,
	waterReadingDate,
	expences,
	month,
	isExpencesPayed,
}) => {
	return (
		<div className={styles.container}>
			<div className={styles.readDate}>
				<p>
					data citire apa: <span>{waterReadingDate}</span>
				</p>
			</div>
			<div className={styles.units}>
				<p>
					bucatarie: <span>{kitchenUnits}</span>
				</p>
				<p>
					baie: <span>{bathUnits}</span>
				</p>
			</div>

			<div className={styles.expence}>
				<p>
					cheltuieli: <span>{expences}</span>
				</p>
				<p>
					pe luna: <span>{month}</span>
				</p>
			</div>
			{isExpencesPayed ? (
				<FaCheck className={styles.green} />
			) : (
				<FaExclamationTriangle className={styles.red} />
			)}
		</div>
	);
};

export default WaterCard;
