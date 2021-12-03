import React, { FC } from "react";
import { Select, CustomInput } from "../../reusables";

import styles from "./Home.module.scss";

const Home: FC = () => {
	const handler = (e: React.ChangeEvent<HTMLSelectElement>) =>
		console.log(e.target.value);

	const mySelect = {
		options: ["small", "medium", "large", "xxl"],
		name: "mySelect",
		label: "Select a width",
		// onChange: (e: React.ChangeEvent<HTMLSelectElement>) => handler(e),
		onChange: handler,
	};

	return (
		<div className={styles.container}>
			<Select {...mySelect} />
			<CustomInput />
		</div>
	);
};

export default Home;
