import React from "react";
import { UtilityStateUnit } from "../types";
import { IconSet } from "../../../reusables";

import styles from "./UtilityCard.module.scss";
import classNames from "classnames";

interface Props {
	onClick: () => void;
	onPayedClick: () => void;
	onDelete: () => void;
	onEdit: () => void;
	dark?: boolean;
}

const UtilityCard: React.FC<UtilityStateUnit & Props> = ({
	onClick,
	onPayedClick,
	onDelete,
	onEdit,
	dark = false,
	...units
}) => {
	const { dataCitire, citire, consum, factura, platit, selected, edit } =
		units;
	const classes = classNames(styles.wrapper, {
		[styles.selected]: selected,
		[styles.wrapper__dark]: dark,
	});
	const dataWrapper = classNames(styles.data, {
		[styles.data__dark]: dark,
	});
	const iconsWrapper = classNames(styles.iconBox, {
		[styles.iconBox__dark]: dark,
	});

	return (
		<div className={classes} onClick={onClick}>
			<div className={dataWrapper}>{dataCitire}</div>
			<div className={dataWrapper}>{citire}</div>
			<div className={dataWrapper}>{consum}</div>
			<div className={dataWrapper}>{factura}</div>
			<div className={iconsWrapper}>
				<IconSet
					onCheck={onPayedClick}
					onDelete={onDelete}
					onEdit={onEdit}
					isChecked={platit}
					isEdited={edit}
				/>
			</div>
		</div>
	);
};

export default UtilityCard;
