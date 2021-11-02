import React from "react";
import classNames from "classnames";
import styles from "./TextInput.module.scss";

export interface InputProps {
	className?: string;
	name?: string;
	value: string;
	placeholder?: string;
	title: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput: React.FC<InputProps> = ({
	className,
	name = "put label here",
	value,
	placeholder,
	title,
	onChange,
}) => {
	const labelClasses = classNames(styles.labelWrap, className);

	return (
		<label htmlFor={name} className={labelClasses}>
			<span>{name}</span>:
			<input
				type='text'
				name={name}
				title={title}
				value={value}
				onChange={onChange}
				placeholder={placeholder}
				className={styles.input}
				autoComplete='off'
			/>
		</label>
	);
};

export default TextInput;
