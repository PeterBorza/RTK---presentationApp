import React from "react";

import { Gas } from "../Gas";
import { Light } from "../Light";
import styles from "./UtilityContainer.module.scss";

const UtilityContainer = () => {
	return (
		<div className={styles.container}>
			<Gas />
			<Light />
		</div>
	);
};

export default UtilityContainer;
