import React from "react";

import { MyExpences } from "./components/house-keeping";
import { Bubbles } from "./components/bubble-story";
import { Colors } from "./components/memoryGame-story";
import { Building } from "./components/building-story";
import { FormModal } from "./components/FormWrapper";

import styles from "./App.module.scss";

const App: React.FC = () => {
	return (
		<div className={styles.container}>
			{/* <MyExpences /> */}
			{/* <Bubbles /> */}
			{/* <Colors /> */}
			{/* <Building /> */}
			<FormModal formWidth='80' />
		</div>
	);
};

export default App;
