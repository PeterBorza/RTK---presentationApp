import React from "react";

import styles from "./CustomInput.module.scss";

const CustomInput = () => {
	return (
		<div className={styles.custom}>
			<input type='text' />
			<label className={styles.label_name}>
				<span className={styles.name_style}>Name:</span>
			</label>
		</div>
	);
};

export default CustomInput;
