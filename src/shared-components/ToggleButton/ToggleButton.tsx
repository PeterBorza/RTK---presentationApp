import React, { FC } from "react";

import classNames from "classnames";
import styles from "./ToggleButton.module.scss";

type Props = {
	selected: boolean;
	toggleSelected: () => void;
};

const ToggleButton: FC<Props> = ({ selected, toggleSelected }) => {
	const classes = classNames(styles.dialog_button, {
		[styles.disabled]: selected,
	});
	return (
		<div className={styles.toggle_container} onClick={toggleSelected}>
			<div className={classes}></div>
		</div>
	);
};

export default ToggleButton;
