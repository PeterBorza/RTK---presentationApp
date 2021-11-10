import React from "react";
import { GasStateItem } from "../gasSlice";
import { FaCheck, FaExclamationTriangle } from "react-icons/fa";

import styles from "./GasCard.module.scss";
import classNames from "classnames";

interface Props {
	onClick: () => void;
	onPayedClick: () => void;
}

const GasCard: React.FC<GasStateItem & Props> = ({
	onClick,
	onPayedClick,
	...units
}) => {
	const { dataCitire, citire, consum, factura, platit, selected } = units;
	const classes = classNames(styles.wrapper, {
		[styles["selected"]]: selected,
	});

	return (
		<div className={classes} onClick={onClick}>
			<p className={styles.data}>{dataCitire}</p>
			<p className={styles.data}>{citire}</p>
			<p className={styles.data}>{consum}</p>
			<p className={styles.data}>{factura}</p>
			<p onClick={onPayedClick}>
				{platit ? (
					<FaCheck className={styles.green} />
				) : (
					<FaExclamationTriangle className={styles.red} />
				)}
			</p>
		</div>
	);
};

export default GasCard;
