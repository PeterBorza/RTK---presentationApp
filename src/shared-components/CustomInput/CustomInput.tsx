import { FC, ComponentProps } from "react";

import styles from "./CustomInput.module.scss";

type InputProps = ComponentProps<"input">;

const CustomInput: FC<InputProps> = ({ name, onChange, value }) => {
	return (
		<div className={styles.custom}>
			<input type='text' onChange={onChange} value={value} />
			<label className={styles.label_name}>
				<span className={styles.name_style}>
					{value !== "" ? "" : `${name}:`}
				</span>
			</label>
		</div>
	);
};

export default CustomInput;
