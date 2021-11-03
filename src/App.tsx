import React from "react";

import { Bubbles } from "./components/bubble-story";
import { Colors } from "./components/memoryGame-story";
import { Building } from "./components/building-story";
import { FormModal } from "./components/FormWrapper";

import styles from "./App.module.scss";
import { GasExpences, LightExpences } from "./components/house-keeping";

const App: React.FC = () => {
	return (
		<div className={styles.container}>
			{/* <Bubbles /> */}
			{/* <Colors /> */}
			{/* <Building /> */}
			{/* <FormModal formWidth='80' /> */}
			<GasExpences />
			<LightExpences />
		</div>
	);
};

export default App;
