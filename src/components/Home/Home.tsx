import React, { FC, useState } from "react";
import { Select, CustomInput, Button } from "../../reusables";

import styles from "./Home.module.scss";

const Home: FC = () => {
	const [inputVal, setInputVal] = useState("");
	const handler = (e: React.ChangeEvent<HTMLSelectElement>) =>
		console.log(e.target.value);

	const mySelect = {
		options: ["small", "medium", "large", "xxl"],
		name: "mySelect",
		label: "Select a width",
		onChange: handler,
	};

	return (
		<div className={styles.container}>
			<Select {...mySelect} />
			<div className={styles.customForm}>
				<CustomInput
					name='username'
					value={inputVal}
					onChange={e => setInputVal(e.target.value)}
				/>
				<Button onClick={() => console.log(inputVal)} />
			</div>
		</div>
	);
};

export default Home;
