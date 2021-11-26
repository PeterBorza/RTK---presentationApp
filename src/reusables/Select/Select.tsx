import { ChangeEvent, FC } from "react";
import styles from "./Select.module.scss";

interface Props {
	options: string[];
	name: string;
	label: string;
	onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const Select: FC<Props> = ({ options, name, label, onChange }) => {
	return (
		<div className={styles.wrapper}>
			<label htmlFor={name} className={styles.select__label}>
				{label}
			</label>
			<select
				className={styles.select}
				name={name}
				id={label}
				onChange={onChange}
			>
				{options.map((item, i) => (
					<option
						className={styles.select__option}
						key={i}
						value={item}
					>
						{item}
					</option>
				))}
			</select>
		</div>
	);
};

export default Select;
