import React, { FC, useState } from "react";
import {
	Select,
	CustomInput,
	Button,
	ToggleButton,
	SimpleDrop,
} from "../../reusables";

import styles from "./Home.module.scss";

const Home: FC = () => {
	const [inputVal, setInputVal] = useState("");
	const [dark, setDark] = useState(false);
	const [hash, setHash] = useState("small");
	const handler = (e: React.ChangeEvent<HTMLSelectElement>) =>
		setHash(e.target.value);

	const mySelect = {
		options: ["small", "medium", "large", "xxl"],
		name: "mySelect",
		label: "Select a width",
		onChange: handler,
	};

	return (
		<div className={styles.container}>
			<div>
				<Select {...mySelect} />
			</div>
			<div>
				<ToggleButton
					selected={dark}
					toggleSelected={() => setDark(!dark)}
				/>
			</div>
			<div className={styles.customForm}>
				<CustomInput
					name='username'
					value={inputVal}
					onChange={e => setInputVal(e.target.value)}
				/>
				<Button onClick={() => console.log(inputVal)} />
				{dark && <div>Hello WORLD</div>}
			</div>
			<div className={styles.dropWrapper}>
				<SimpleDrop height={hash}>
					<button onClick={() => console.log("clcikc")}>click</button>
					<button onClick={() => console.log("clcikc")}>click</button>
					<button onClick={() => console.log("clcikc")}>click</button>
					<button onClick={() => console.log("clcikc")}>click</button>
				</SimpleDrop>
			</div>
		</div>
	);
};

export default Home;
