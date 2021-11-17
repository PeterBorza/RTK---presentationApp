import React from "react";
import { GasStateItem } from "../gasSlice";
import { IconSet } from "../../../reusables";

import styles from "./GasCard.module.scss";
import classNames from "classnames";

interface Props {
	onClick: () => void;
	onPayedClick: () => void;
	onDelete: () => void;
	onEdit: () => React.ReactNode;
}

const GasCard: React.FC<GasStateItem & Props> = ({
	onClick,
	onPayedClick,
	onDelete,
	onEdit,
	...units
}) => {
	const { dataCitire, citire, consum, factura, platit, selected } = units;
	const classes = classNames(styles.wrapper, {
		[styles["selected"]]: selected,
	});

	return (
		<div className={classes} onClick={onClick}>
			<div className={styles.data}>{dataCitire}</div>
			<div className={styles.data}>{citire}</div>
			<div className={styles.data}>{consum}</div>
			<div className={styles.data}>{factura}</div>
			<div className={styles.iconBox}>
				<IconSet
					onCheck={onPayedClick}
					onDelete={onDelete}
					onEdit={() => onEdit()}
					isChecked={platit}
				/>
			</div>
		</div>
	);
};

export default GasCard;
