import React, { ComponentProps } from "react";
import classNames from "classnames";
import styles from "./TextInput.module.scss";

type InputProps = ComponentProps<"input">;

const TextInput: React.FC<InputProps> = ({
	className,
	type = "text",
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
				type={type}
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
