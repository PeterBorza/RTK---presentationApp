import React from "react";

import { Bubbles } from "./components/bubble-story";
import { Colors } from "./components/memoryGame-story";
import { Building } from "./components/building-story";
import { FormModal } from "./components/FormWrapper";

import styles from "./App.module.scss";
import TableContainer from "./components/house-keeping/GasTableContainer";

const App: React.FC = () => {
	return (
		<div className={styles.container}>
			{/* <Bubbles /> */}
			{/* <Colors /> */}
			{/* <Building /> */}
			{/* <FormModal formWidth='80' /> */}
			<TableContainer />
		</div>
	);
};

export default App;
