import { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleUtils } from "../../../app";
import { CustomInput } from "../../../shared-components";
import styles from "./UtilityPlatform.module.scss";

const UtilityPlatform: FC = () => {
	const [name, setName] = useState("");
	const validPass = name === "Peter";
	const dispatch = useDispatch();
	useEffect(() => {
		validPass ? dispatch(toggleUtils(true)) : dispatch(toggleUtils(false));
	}, [name]);
	return (
		<div className={styles.container}>
			<h2 style={{ color: validPass ? "limegreen" : "crimson" }}>
				{validPass
					? "Correct password"
					: "Type in owner's first name to see menu"}
			</h2>
			<div className={styles.inputContent}>
				<CustomInput
					name='Password'
					value={name}
					onChange={e => setName(e.target.value)}
				/>
			</div>
		</div>
	);
};

export default UtilityPlatform;
