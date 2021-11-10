import { ChangeEvent, FC } from "react";
import styles from "./CheckBox.module.scss";

interface CheckBoxProps {
	id: string;
	name: string;
	label: string;
	value: string | number;
	isChecked: boolean;
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const CheckBox: FC<CheckBoxProps> = ({
	id,
	name,
	label,
	onChange,
	value,
	isChecked,
}) => {
	return (
		<div className={styles.checkboxWrapper}>
			<input
				type='checkbox'
				id={id}
				name={name}
				value={value}
				checked={isChecked}
				onChange={onChange}
			/>
			<label htmlFor={id}>{label}</label>
		</div>
	);
};

export default CheckBox;
