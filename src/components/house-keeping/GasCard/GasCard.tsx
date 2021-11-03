import React from "react";
import { GasState } from "../houseSlice";
import { FaCheck, FaExclamationTriangle } from "react-icons/fa";

import styles from "./GasCard.module.scss";
import classNames from "classnames";

interface Props {
	onClick: () => void;
}

const GasCard: React.FC<GasState & Props> = ({ units, selected, onClick }) => {
	const classes = classNames(styles.wrapper, {
		[styles["selected"]]: selected,
	});

	const {
		gasUnitsReadingDate,
		gasUnits,
		gasUsage,
		sumOfGasBill,
		isGasBillPayed,
	} = units;

	return (
		<div className={classes} onClick={onClick}>
			<p className={styles.data}>{gasUnitsReadingDate}</p>
			<p className={styles.data}>{gasUnits}</p>
			<p className={styles.data}>{gasUsage}</p>
			<p className={styles.data}>{sumOfGasBill}</p>
			<p>
				{isGasBillPayed ? (
					<FaCheck className={styles.green} />
				) : (
					<FaExclamationTriangle className={styles.red} />
				)}
			</p>
		</div>
	);
};

export default GasCard;
